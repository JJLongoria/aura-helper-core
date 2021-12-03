import { Process } from "../types/process";
/**
 * Class to execute and handling progress
 */
export declare class ProcessHandler {
    /**
     * Method run system processes and handle it responses
     * @param {Process} process
     *
     * @returns {Promise<any>} Return a promise with the response data
     */
    static runProcess(process: Process): Promise<any>;
}
