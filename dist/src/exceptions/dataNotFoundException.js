"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataNotFoundException = void 0;
/**
 * Exception class to handle and throw errors when not data provided or not data found to execute operations
 */
class DataNotFoundException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "DataNotFoundException";
    }
}
exports.DataNotFoundException = DataNotFoundException;
//# sourceMappingURL=dataNotFoundException.js.map