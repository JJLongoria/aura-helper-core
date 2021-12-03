/**
 * Class to represent Aura Helper CLI Response JSON Object
 */
export declare class AuraHelperCLIResponse {
    status: number;
    message?: string;
    result: any;
    /**
     * Create new Aura Helper CLI Response
     * @param {string | AuraHelperCLIResponse} statusOrResponse Response status or Response instance
     * @param {string} [message] Response message
     * @param {any} [result] Response result data
     */
    constructor(statusOrResponse: number | AuraHelperCLIResponse, message?: string, result?: any);
}
