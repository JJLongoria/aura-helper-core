"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongFilePathException = void 0;
/**
 * Class to handle and throw errors when file paths are wrong
 */
class WrongFilePathException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} filePath Wrong file path
     * @param {string} [fileName] Optional file name to show
     */
    constructor(filePath, fileName) {
        super('Wrong ' + ((fileName) ? (fileName + ' ') : '') + 'file path. Expect a file path and receive ' + filePath);
        this.name = "WrongFilePathException";
    }
}
exports.WrongFilePathException = WrongFilePathException;
//# sourceMappingURL=wrongFilePathException.js.map