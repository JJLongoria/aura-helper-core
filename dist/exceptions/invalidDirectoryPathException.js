"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDirectoryPathException = void 0;
/**
 * Class to handle and throw errors when folder paths are invalid
 */
class InvalidDirectoryPathException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} folderPath Invalid folder path
     * @param {string} [folderName] Optional folder name to show
     */
    constructor(folderPath, folderName) {
        super(((folderName) ? (folderName + ' folder') : 'Folder') + ' ' + folderPath + ' is not a valid directory path');
        this.name = "InvalidDirectoryPathException";
    }
}
exports.InvalidDirectoryPathException = InvalidDirectoryPathException;
//# sourceMappingURL=invalidDirectoryPathException.js.map