import { AuraHelperCLIResponse } from "./auraHelperCLIResponse";

export class AuraHelperCLIError extends AuraHelperCLIResponse {

    code?: string;
    name?: string;

    /**
     * Create new Aura Helper CLI Error JSON Object
     * @param {number | AuraHelperCLIError} statusOrError Error status or Error instance
     * @param {string} [name] Error name
     * @param {string} [code] Error code
     * @param {string} [message] Error message
     */
    constructor(statusOrError: number | AuraHelperCLIError, name?: string, code?: string, message?: string) {
        super(statusOrError, message, undefined);
        if (statusOrError instanceof AuraHelperCLIError) {
            this.code = statusOrError.code;
            this.name = statusOrError.name;
        } else {
            this.code = code || 'ERR_CODE';
            this.name = name || 'AuraHelperCLIError';
        }
    }

}