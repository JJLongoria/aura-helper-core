"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongDatatypeException = void 0;
/**
 * Class to handle and throw errors when the variable datatypes are wrong
 */
class WrongDatatypeException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "WrongDatatypeException";
    }
}
exports.WrongDatatypeException = WrongDatatypeException;
//# sourceMappingURL=wrongDatatypeException.js.map