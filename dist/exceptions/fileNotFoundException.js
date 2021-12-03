"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileNotFoundException = void 0;
/**
 * Class to handle and throw errors when not found or cant access to a system file
 */
class FileNotFoundException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} filePath Not found file path
     * @param {string} [fileName] Optional file name to show
     */
    constructor(filePath, fileName) {
        super(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' does not exists or not have access to it');
        this.name = "FileNotFoundException";
    }
}
exports.FileNotFoundException = FileNotFoundException;
//# sourceMappingURL=fileNotFoundException.js.map