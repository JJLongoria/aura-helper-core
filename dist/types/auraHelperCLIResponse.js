"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraHelperCLIResponse = void 0;
/**
 * Class to represent Aura Helper CLI Response JSON Object
 */
class AuraHelperCLIResponse {
    /**
     * Create new Aura Helper CLI Response
     * @param {string | AuraHelperCLIResponse} statusOrResponse Response status or Response instance
     * @param {string} [message] Response message
     * @param {any} [result] Response result data
     */
    constructor(statusOrResponse, message, result) {
        if (statusOrResponse instanceof AuraHelperCLIResponse) {
            this.status = statusOrResponse.status;
            this.message = statusOrResponse.message;
            this.result = statusOrResponse.result;
        }
        else {
            this.status = statusOrResponse;
            this.message = message;
            this.result = result;
        }
    }
}
exports.AuraHelperCLIResponse = AuraHelperCLIResponse;
//# sourceMappingURL=auraHelperCLIResponse.js.map