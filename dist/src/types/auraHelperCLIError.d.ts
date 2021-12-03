import { AuraHelperCLIResponse } from "./auraHelperCLIResponse";
export declare class AuraHelperCLIError extends AuraHelperCLIResponse {
    code?: string;
    name?: string;
    /**
     * Create new Aura Helper CLI Error JSON Object
     * @param {number | AuraHelperCLIError} statusOrError Error status or Error instance
     * @param {string} [name] Error name
     * @param {string} [code] Error code
     * @param {string} [message] Error message
     */
    constructor(statusOrError: number | AuraHelperCLIError, name?: string, code?: string, message?: string);
}
