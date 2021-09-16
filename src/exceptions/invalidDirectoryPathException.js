/**
 * Class to handle and throw errors when folder paths are invalid
 */
 class InvalidDirectoryPathException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} folderPath Invalid folder path
     * @param {String} folderName Optional folder name to show
     */
    constructor(folderPath, folderName) {
        super(((folderName) ? (folderName + ' folder') : 'Folder') + ' ' + folderPath + ' is not a valid directory path');
        this.name = "InvalidDirectoryPathException";
    }
}
module.exports = InvalidDirectoryPathException;