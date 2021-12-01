/**
 * Class to handle and throw errors when folder paths are invalid
 */
 export class InvalidDirectoryPathException extends Error {

    /**
     * Constructor to create the exception
     * @param {string} folderPath Invalid folder path
     * @param {string} folderName Optional folder name to show
     */
    constructor(folderPath: string, folderName: string) {
        super(((folderName) ? (folderName + ' folder') : 'Folder') + ' ' + folderPath + ' is not a valid directory path');
        this.name = "InvalidDirectoryPathException";
    }
}