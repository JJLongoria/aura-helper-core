"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidFilePathException = void 0;
/**
 * Class to handle and throw errors when file paths are invalid
 */
class InvalidFilePathException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} filePath Invalid file path
     * @param {string} [fileName] Optional file name to show
     */
    constructor(filePath, fileName) {
        super(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' is not a valid file path');
        this.name = "InvalidFilePathException";
    }
}
exports.InvalidFilePathException = InvalidFilePathException;
//# sourceMappingURL=invalidFilePathException.js.map