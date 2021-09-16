/**
 * Class to handle and throw errors when folder paths are wrong
 */
 class WrongDirectoryPathException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} folderPath Wrong folder path
     * @param {String} folderName Optional folder name to show
     */
    constructor(folderPath, folderName) {
        super('Wrong ' + ((folderName) ? (folderName) : 'folder') + ' path. Expect a folder path and receive ' + folderPath);
        this.name = "WrongDirectoryPathException";
    }
}
module.exports = WrongDirectoryPathException;