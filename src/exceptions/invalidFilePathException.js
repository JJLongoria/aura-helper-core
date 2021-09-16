/**
 * Class to handle and throw errors when file paths are invalid
 */
 class InvalidFilePathException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} filePath Invalid file path
     * @param {String} [fileName] Optional file name to show
     */
    constructor(filePath, fileName) {
        super(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' is not a valid file path');
        this.name = "InvalidFilePathException";
    }
}
module.exports = InvalidFilePathException;