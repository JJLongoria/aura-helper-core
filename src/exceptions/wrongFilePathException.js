/**
 * Class to handle and throw errors when file paths are wrong
 */
 class WrongFilePathException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} filePath Wrong file path
     * @param {String} fileName Optional file name to show
     */
    constructor(filePath, fileName) {
        super('Wrong ' + ((fileName) ? (fileName + ' ') : '') + 'file path. Expect a file path and receive ' + filePath);
        this.name = "WrongFilePathException";
    }
}
module.exports = WrongFilePathException;