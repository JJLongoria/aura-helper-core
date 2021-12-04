import { MathUtils } from "../utils";
import { AuraHelperCLIResponse } from "./auraHelperCLIResponse";

/**
 * Class to represent Aura Helper CLI Progress JSON Object
 */
export class AuraHelperCLIProgress extends AuraHelperCLIResponse {

    isProgress: boolean;

    /**
     * 
     * @param {number | string | AuraHelperCLIProgress} statusOrProgress Progress status or Progress instance
     * @param {string} [message] Progress message
     * @param {number} [increment] Progress increment
     * @param {number} [percentage] Progress percentage
     */
    constructor(statusOrProgress: number | string | AuraHelperCLIProgress, message?: string, increment?: number, percentage?: number) {
        super(statusOrProgress, message, undefined);
        if (!(statusOrProgress instanceof AuraHelperCLIProgress)) {
            percentage = (percentage !== undefined) ? (percentage > 100) ? 100 : MathUtils.round(percentage, 2) : -1;
            increment =  (increment !== undefined) ? (increment > 100) ? 100 : increment : -1;
            this.result = {
                increment: increment,
                percentage: percentage
            };
        }
        this.isProgress = true;
    }

}