/**
 * Class to handle and throw errors when file paths are invalid
 */
 export class InvalidFilePathException extends Error {

    /**
     * Constructor to create the exception
     * @param {string} filePath Invalid file path
     * @param {string} [fileName] Optional file name to show
     */
    constructor(filePath: string, fileName?: string) {
        super(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' is not a valid file path');
        this.name = "InvalidFilePathException";
    }
}