"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraHelperCLIProgress = void 0;
const utils_1 = require("../utils");
const auraHelperCLIResponse_1 = require("./auraHelperCLIResponse");
/**
 * Class to represent Aura Helper CLI Progress JSON Object
 */
class AuraHelperCLIProgress extends auraHelperCLIResponse_1.AuraHelperCLIResponse {
    /**
     *
     * @param {number | AuraHelperCLIProgress} statusOrProgress Progress status or Progress instance
     * @param {string} [message] Progress message
     * @param {number} [increment] Progress increment
     * @param {number} [percentage] Progress percentage
     */
    constructor(statusOrProgress, message, increment, percentage) {
        super(statusOrProgress, message, undefined);
        if (!(statusOrProgress instanceof AuraHelperCLIProgress)) {
            percentage = (percentage !== undefined) ? (percentage > 100) ? 100 : utils_1.MathUtils.round(percentage, 2) : -1;
            increment = (increment !== undefined) ? (increment > 100) ? 100 : increment : -1;
            this.result = {
                increment: increment,
                percentage: percentage
            };
        }
        this.isProgress = true;
    }
}
exports.AuraHelperCLIProgress = AuraHelperCLIProgress;
//# sourceMappingURL=auraHelperCLIProgress.js.map