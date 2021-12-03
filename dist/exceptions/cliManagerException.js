"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIManagerException = void 0;
/**
 * Exception class to handle and throw errors when has errors with CLI Manager module
 */
class CLIManagerException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "CLIManagerException";
    }
}
exports.CLIManagerException = CLIManagerException;
//# sourceMappingURL=cliManagerException.js.map