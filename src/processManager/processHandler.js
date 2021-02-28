const ProcessEvent = require('./processEvent');

function runProcess(process) {
    let stdOut = '';
    let stdErr = '';
    let excludeError = false;
    let jsonResponse = process.jsonResponse;
    return new Promise(function (resolve, rejected) {
        process.run(function (event, data) {
            switch (event) {
                case ProcessEvent.STD_OUT:
                    excludeError = false;
                    stdOut += data;
                    break;
                case ProcessEvent.ERR_OUT:
                    if (data.toString().indexOf('[EACCES]') !== -1 || data.toString().indexOf('spawn cmd ENOENT') !== -1) {
                        excludeError = true;
                    } else if (!excludeError) {
                        stdErr += data;
                    }
                    break;
                case ProcessEvent.ERROR:
                    if (data.toString().indexOf('[EACCES]') !== -1) {
                        excludeError = true;
                    } else if (!excludeError) {
                        stdErr += data;
                    }
                    break;
                case ProcessEvent.END:
                    if (stdErr.length > 0) {
                        let result = (jsonResponse) ? JSON.parse(stdErr) : stdErr;
                        rejected(result);
                    } else {
                        let result = (jsonResponse) ? JSON.parse(stdOut) : stdOut;
                        resolve(result);
                    }
                    break;
                default:
                    break;
            }
        });
    });
}

module.exports = {
    runProcess: runProcess
}