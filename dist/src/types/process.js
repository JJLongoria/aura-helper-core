"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = void 0;
const values_1 = require("../values");
const { ChildProcess } = require('child_process');
/**
 * Class to handle and execute system processes
 */
class Process {
    /**
     * Method to create new system process
     * @param {string} command Command name to execute
     * @param {string[]} args Command args list
     * @param {ProcessOptions} options Command Options
     * @param {(data: any) => void} outputCallback Command output callback
     */
    constructor(command, args, options, outputCallback) {
        this.handleProgress = false;
        this.name = command || 'Process';
        this.command = command || '';
        this.args = args || [];
        this.options = options || {};
        this.jsonResponse = true;
        this.outputCallback = outputCallback;
    }
    /**
     * Method to set the output progress callback
     * @param {(data: any) => void} outputCallback output callback to handle process progress
     * @returns {Process} Return Process instance
     */
    setOutputCallback(outputCallback) {
        this.outputCallback = outputCallback;
        return this;
    }
    /**
     * Method to set the max buffer for the command
     * @param {number} maxBuffer Max buffer value
     * @returns {Process} Return Process instance
     */
    setMaxBuffer(maxBuffer) {
        if (maxBuffer !== undefined) {
            this.options.maxBuffer = maxBuffer;
        }
        return this;
    }
    /**
     * Method to set the Current Working Directory (CWD) for the command
     * @param {string} cwd Max buffer value
     * @returns {Process} Return Process instance
     */
    setCWD(cwd) {
        if (cwd !== undefined) {
            this.options.cwd = cwd;
        }
        return this;
    }
    /**
     * Method to set if the response is a JSON Object or not
     * @param {boolean} jsonResponse true if the response is a JSON Object, false in otherwise
     * @returns {Process} Return Process instance
     */
    setJSONResponse(jsonResponse) {
        this.jsonResponse = jsonResponse;
        return this;
    }
    /**
     * Method to set the process name
     * @param {string} name Process Name
     * @returns {Process} Return Process instance
     */
    setProcessName(name) {
        if (name !== undefined) {
            this.name = name;
        }
        return this;
    }
    /**
     * Method to set if handle progress
     * @param {boolean} handleProgress true to handle progress
     * @returns {Process} Return Process instance
     */
    setHandleProgress(handleProgress) {
        this.handleProgress = handleProgress;
        return this;
    }
    /**
     * Method to run the process
     * @param {(event: string, data: any) => void} callback callback to handle progress
     */
    run(callback) {
        this.process = ChildProcess.spawn(this.command, this.args, this.options);
        this.process.stdout.setEncoding('utf8');
        this.process.stderr.setEncoding('utf8');
        this.process.stdout.on('data', (data) => {
            if (callback) {
                callback.call(this, values_1.ProcessEvent.STD_OUT, data);
            }
        });
        this.process.stderr.on('data', (data) => {
            if (callback) {
                callback.call(this, values_1.ProcessEvent.ERR_OUT, data);
            }
        });
        this.process.on('error', (data) => {
            if (callback) {
                callback.call(this, values_1.ProcessEvent.ERROR, data);
            }
        });
        this.process.on('close', (code) => {
            if (callback) {
                callback.call(this, values_1.ProcessEvent.END, code);
            }
        });
    }
    /**
     * Method to kill the running process
     */
    kill() {
        if (this.process) {
            this.process.kill(2);
        }
    }
}
exports.Process = Process;
//# sourceMappingURL=process.js.map