const childProcess = require('child_process');
const ProcessEvent = require('../values/processEvent');


class Process {

    constructor(command, args, options, outputCallback) {
        this.handleProgress = false;
        this.command = command || '';
        this.args = args || [];
        this.options = options || {};
        this.outputCallback = outputCallback;

    }

    setOutputCallback(outputCallback) {
        this.outputCallback = outputCallback;
        return this;
    }

    setMaxBuffer(maxBuffer) {
        if (maxBuffer !== undefined)
            this.options['maxBuffer'] = maxBuffer;
        return this;
    }

    setCWD(cwd) {
        if (cwd !== undefined)
            this.options['cwd'] = cwd;
        return this;
    }

    setJSONResponse(jsonResponse) {
        this.jsonResponse = jsonResponse;
        return this;
    }

    setProcessName(name) {
        if (name !== undefined)
            this.name = name;
        return this;
    }

    setHandleProgress(handleProgress){
        this.handleProgress = handleProgress;
        return this;
    }

    run(callback) {
        this.process = childProcess.spawn(this.command, this.args, this.options);
        this.process.stdout.setEncoding('utf8');
        this.process.stderr.setEncoding('utf8');
        this.process.stdout.on('data', (data) => {
            if (callback)
                callback.call(this, ProcessEvent.STD_OUT, data);
        });
        this.process.stderr.on('data', (data) => {
            if (callback)
                callback.call(this, ProcessEvent.ERR_OUT, data);
        });
        this.process.on('error', (data) => {
            if (callback)
                callback.call(this, ProcessEvent.ERROR, data);
        });
        this.process.on('close', (code) => {
            if (callback)
                callback.call(this, ProcessEvent.END, code);
        });
    }

    kill() {
        if (this.process) {
            this.process.kill(2);
        }
    }

}
module.exports = Process;