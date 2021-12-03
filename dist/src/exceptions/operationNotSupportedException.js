"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationNotSupportedException = void 0;
/**
 * Class to handle and throw errors when execute not supported operations
 */
class OperationNotSupportedException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "OperationNotSupportedException";
    }
}
exports.OperationNotSupportedException = OperationNotSupportedException;
//# sourceMappingURL=operationNotSupportedException.js.map