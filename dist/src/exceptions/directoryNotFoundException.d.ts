/**
 * Class to handle and throw errors when not found or cant access to a system directory
 */
export declare class DirectoryNotFoundException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} folderPath Not found folder path
     * @param {string} [folderName] Optional folder name to show
     */
    constructor(folderPath: string, folderName?: string);
}
