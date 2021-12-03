/**
 * Class to handle and throw errors when folder paths are wrong
 */
export declare class WrongDirectoryPathException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} folderPath Wrong folder path
     * @param {string} [folderName] Optional folder name to show
     */
    constructor(folderPath: string, folderName?: string);
}
