import { ProcessOptions } from "./processOptions";
/**
 * Class to handle and execute system processes
 */
export declare class Process {
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
    constructor(command: string, args?: string[], options?: ProcessOptions, outputCallback?: (data: any) => void);
    /**
     * Method to set the output progress callback
     * @param {(data: any) => void} outputCallback output callback to handle process progress
     * @returns {Process} Return Process instance
     */
    setOutputCallback(outputCallback?: (data: any) => void): Process;
    /**
     * Method to set the max buffer for the command
     * @param {number} maxBuffer Max buffer value
     * @returns {Process} Return Process instance
     */
    setMaxBuffer(maxBuffer: number): Process;
    /**
     * Method to set the Current Working Directory (CWD) for the command
     * @param {string} cwd Max buffer value
     * @returns {Process} Return Process instance
     */
    setCWD(cwd: string): Process;
    /**
     * Method to set if the response is a JSON Object or not
     * @param {boolean} jsonResponse true if the response is a JSON Object, false in otherwise
     * @returns {Process} Return Process instance
     */
    setJSONResponse(jsonResponse: boolean): Process;
    /**
     * Method to set the process name
     * @param {string} name Process Name
     * @returns {Process} Return Process instance
     */
    setProcessName(name: string): Process;
    /**
     * Method to set if handle progress
     * @param {boolean} handleProgress true to handle progress
     * @returns {Process} Return Process instance
     */
    setHandleProgress(handleProgress: boolean): Process;
    /**
     * Method to run the process
     * @param {(event: string, data: any) => void} callback callback to handle progress
     */
    run(callback?: (event: string, data: any) => void): void;
    /**
     * Method to kill the running process
     */
    kill(): void;
}
