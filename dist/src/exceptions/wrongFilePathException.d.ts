/**
 * Class to handle and throw errors when file paths are wrong
 */
export declare class WrongFilePathException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} filePath Wrong file path
     * @param {string} [fileName] Optional file name to show
     */
    constructor(filePath: string, fileName?: string);
}
