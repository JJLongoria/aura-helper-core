/**
 * Class to handle and throw errors when folder paths are invalid
 */
export declare class InvalidDirectoryPathException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} folderPath Invalid folder path
     * @param {string} [folderName] Optional folder name to show
     */
    constructor(folderPath: string, folderName?: string);
}
