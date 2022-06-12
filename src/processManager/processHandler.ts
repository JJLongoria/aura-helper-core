import { AuraHelperCLIProgress } from "../types/auraHelperCLIProgress";
import { Process } from "../types/process";
import { StrUtils } from "../utils";
import { ProcessEvent } from "../values";

/**
 * Class to execute and handling progress
 */
export class ProcessHandler {

    /**
     * Method run system processes and handle it responses
     * @param {Process} process 
     * 
     * @returns {Promise<any>} Return a promise with the response data
     */
    static runProcess(process: Process): Promise<any> {
        let stdOut = '';
        let stdErr = '';
        let excludeError = false;
        const jsonResponse = process.jsonResponse;
        return new Promise<any>((resolve, rejected) => {
            process.run((event, data) => {
                switch (event) {
                    case ProcessEvent.STD_OUT:
                        const strData = data.toString();
                        if (process.handleProgress) {
                            try {
                                const jsonData = JSON.parse(strData);
                                if (!jsonData.isProgress) {
                                    stdOut += strData;
                                } else {
                                    if (process.outputCallback) {
                                        process.outputCallback.call(this, new AuraHelperCLIProgress(jsonData));
                                    }
                                }
                            } catch (error) {
                                if (strData.startsWith('{')) {
                                    const arrayData = '[' + StrUtils.replace(strData, '}\n{', '},\n{') + ']';
                                    try {
                                        const arrayJSONData = JSON.parse(arrayData);
                                        for (const data of arrayJSONData) {
                                            if (!data.isProgress) {
                                                stdOut += JSON.stringify(data, null, 2);
                                            } else {
                                                if (process.outputCallback) {
                                                    process.outputCallback.call(this, data);
                                                }
                                            }
                                        }
                                    } catch (error2) {
                                        if (process.outputCallback && strData && strData.length > 0) {
                                            process.outputCallback.call(this, strData);
                                        }
                                        stdOut += strData;
                                    }
                                } else {
                                    if (process.outputCallback && strData && strData.length > 0) {
                                        process.outputCallback.call(this, strData);
                                    }
                                    stdOut += strData;
                                }
                            }
                        } else {
                            if (process.outputCallback && strData && strData.length > 0) {
                                process.outputCallback.call(this, strData);
                            }
                            stdOut += strData;
                        }
                        excludeError = false;
                        break;
                    case ProcessEvent.ERR_OUT:
                        if (data.toString().indexOf('[EACCES]') !== -1 || data.toString().indexOf('spawn cmd ENOENT') !== -1 || data.toString().indexOf('Debugger attached') !== -1 || data.toString().indexOf('Waiting for the debugger') !== -1 || data.toString().indexOf('sfdx-cli update available') !== -1) {
                            excludeError = true;
                        } else if (!excludeError) {
                            stdErr += data;
                        }
                        break;
                    case ProcessEvent.ERROR:
                        if (data.toString().indexOf('[EACCES]') !== -1 || data.toString().indexOf('Debugger attached') !== -1 || data.toString().indexOf('Waiting for the debugger') !== -1  || data.toString().indexOf('sfdx-cli update available') !== -1) {
                            excludeError = true;
                        } else if (!excludeError) {
                            stdErr += data;
                        }
                        break;
                    case ProcessEvent.END:
                        if (stdErr.length > 0) {
                            try {
                                const result = (jsonResponse) ? JSON.parse(stdErr.substring(stdErr.indexOf('{'))) : stdErr;
                                rejected(result);
                            } catch (error) {
                                rejected(stdErr);
                            }

                        } else {
                            try {
                                const result = (jsonResponse) ? JSON.parse(stdOut.substring(stdOut.indexOf('{'))) : stdOut;
                                resolve(result);
                            } catch (error) {
                                resolve(stdOut);
                            }
                        }
                        break;
                    default:
                        break;
                }
            });
        });
    }
}