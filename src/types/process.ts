import { ProcessEvent } from "../values";
import { ProcessOptions } from "./processOptions";
const { ChildProcess } = require('child_process');

/**
 * Class to handle and execute system processes
 */
export class Process {

    name: string;
    handleProgress: boolean;
    command: string;
    args: string[];
    options: ProcessOptions;
    jsonResponse: boolean;
    process: any;
    outputCallback?: (data: any) => void;

    /**
     * Method to create new system process
     * @param {string} command Command name to execute
     * @param {string[]} args Command args list
     * @param {ProcessOptions} options Command Options
     * @param {(data: any) => void} outputCallback Command output callback
     */
    constructor(command: string, args?: string[], options?: ProcessOptions, outputCallback?: (data: any) => void) {
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
    setOutputCallback(outputCallback: (data: any) => void): Process {
        this.outputCallback = outputCallback;
        return this;
    }

    /**
     * Method to set the max buffer for the command
     * @param {number} maxBuffer Max buffer value
     * @returns {Process} Return Process instance
     */
    setMaxBuffer(maxBuffer: number): Process {
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
    setCWD(cwd: string): Process {
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
    setJSONResponse(jsonResponse: boolean): Process {
        this.jsonResponse = jsonResponse;
        return this;
    }

    /**
     * Method to set the process name
     * @param {string} name Process Name
     * @returns {Process} Return Process instance
     */
    setProcessName(name: string): Process {
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
    setHandleProgress(handleProgress: boolean): Process {
        this.handleProgress = handleProgress;
        return this;
    }

    /**
     * Method to run the process
     * @param {(event: string, data: any) => void} callback callback to handle progress
     */
    run(callback?: (event: string, data: any) => void) {
        this.process = ChildProcess.spawn(this.command, this.args, this.options);
        this.process.stdout.setEncoding('utf8');
        this.process.stderr.setEncoding('utf8');
        this.process.stdout.on('data', (data: any) => {
            if (callback) {
                callback.call(this, ProcessEvent.STD_OUT, data);
            }
        });
        this.process.stderr.on('data', (data: any) => {
            if (callback) {
                callback.call(this, ProcessEvent.ERR_OUT, data);
            }
        });
        this.process.on('error', (data: any) => {
            if (callback) {
                callback.call(this, ProcessEvent.ERROR, data);
            }
        });
        this.process.on('close', (code: any) => {
            if (callback) {
                callback.call(this, ProcessEvent.END, code);
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