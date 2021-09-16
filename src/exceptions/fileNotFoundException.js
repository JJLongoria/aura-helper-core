/**
 * Class to handle and throw errors when not found or cant access to a system file
 */
class FileNotFoundException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} filePath Not found file path
     * @param {String} fileName Optional file name to show
     */
    constructor(filePath, fileName) {
        super(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' does not exists or not have access to it');
        this.name = "FileNotFoundException";
    }
}
module.exports = FileNotFoundException;