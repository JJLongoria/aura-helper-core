/**
 * Class to handle and throw errors when not found or cant access to a system file
 */
export class FileNotFoundException extends Error {

    /**
     * Constructor to create the exception
     * @param {string} filePath Not found file path
     * @param {string} [fileName] Optional file name to show
     */
    constructor(filePath: string, fileName?: string) {
        super(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' does not exists or not have access to it');
        this.name = "FileNotFoundException";
    }
}