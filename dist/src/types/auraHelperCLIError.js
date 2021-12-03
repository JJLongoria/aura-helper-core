"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraHelperCLIError = void 0;
const auraHelperCLIResponse_1 = require("./auraHelperCLIResponse");
class AuraHelperCLIError extends auraHelperCLIResponse_1.AuraHelperCLIResponse {
    /**
     * Create new Aura Helper CLI Error JSON Object
     * @param {number | AuraHelperCLIError} statusOrError Error status or Error instance
     * @param {string} [name] Error name
     * @param {string} [code] Error code
     * @param {string} [message] Error message
     */
    constructor(statusOrError, name, code, message) {
        super(statusOrError, message, undefined);
        if (statusOrError instanceof AuraHelperCLIError) {
            this.code = statusOrError.code;
            this.name = statusOrError.name;
        }
        else {
            this.code = code || 'ERR_CODE';
            this.name = name || 'AuraHelperCLIError';
        }
    }
}
exports.AuraHelperCLIError = AuraHelperCLIError;
//# sourceMappingURL=auraHelperCLIError.js.map