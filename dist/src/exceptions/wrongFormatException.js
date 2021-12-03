"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongFormatException = void 0;
/**
 * Class to handle and throw errors when data format are wrong
 */
class WrongFormatException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "WrongFormatException";
    }
}
exports.WrongFormatException = WrongFormatException;
//# sourceMappingURL=wrongFormatException.js.map