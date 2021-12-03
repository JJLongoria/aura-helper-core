"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRequiredException = void 0;
/**
 * Exception class to handle and throw errors when Required Data is not provided
 */
class DataRequiredException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} dataName data or field name
     */
    constructor(dataName) {
        super(dataName + ' is Required.');
        this.name = "DataRequiredException";
    }
}
exports.DataRequiredException = DataRequiredException;
//# sourceMappingURL=dataRequiredException.js.map