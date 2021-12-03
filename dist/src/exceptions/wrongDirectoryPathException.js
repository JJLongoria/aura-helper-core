"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongDirectoryPathException = void 0;
/**
 * Class to handle and throw errors when folder paths are wrong
 */
class WrongDirectoryPathException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} folderPath Wrong folder path
     * @param {string} [folderName] Optional folder name to show
     */
    constructor(folderPath, folderName) {
        super('Wrong ' + ((folderName) ? (folderName) : 'folder') + ' path. Expect a folder path and receive ' + folderPath);
        this.name = "WrongDirectoryPathException";
    }
}
exports.WrongDirectoryPathException = WrongDirectoryPathException;
//# sourceMappingURL=wrongDirectoryPathException.js.map