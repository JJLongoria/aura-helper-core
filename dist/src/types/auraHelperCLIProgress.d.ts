import { AuraHelperCLIResponse } from "./auraHelperCLIResponse";
/**
 * Class to represent Aura Helper CLI Progress JSON Object
 */
export declare class AuraHelperCLIProgress extends AuraHelperCLIResponse {
    isProgress: boolean;
    /**
     *
     * @param {number | AuraHelperCLIProgress} statusOrProgress Progress status or Progress instance
     * @param {string} [message] Progress message
     * @param {number} [increment] Progress increment
     * @param {number} [percentage] Progress percentage
     */
    constructor(statusOrProgress: number | AuraHelperCLIProgress, message?: string, increment?: number, percentage?: number);
}
