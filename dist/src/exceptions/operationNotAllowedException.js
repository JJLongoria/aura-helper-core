"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationNotAllowedException = void 0;
/**
 * Class to handle and throw errors when exceute not allowed operations
 */
class OperationNotAllowedException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "OperationNotAllowedException";
    }
}
exports.OperationNotAllowedException = OperationNotAllowedException;
//# sourceMappingURL=operationNotAllowedException.js.map