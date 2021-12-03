"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionException = void 0;
/**
 * Exception class to handle and throw errors when has errors with Connector module
 */
class ConnectionException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "ConnectionException";
    }
}
exports.ConnectionException = ConnectionException;
//# sourceMappingURL=connectionException.js.map