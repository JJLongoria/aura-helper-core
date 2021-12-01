/**
 * Class to handle and throw errors when not found or cant access to a system directory
 */
export class DirectoryNotFoundException extends Error {

    /**
     * Constructor to create the exception
     * @param {string} folderPath Not found folder path
     * @param {string} folderName Optional folder name to show
     */
    constructor(folderPath: string, folderName: string) {
        super(((folderName) ? (folderName + ' folder') : 'Folder') + ' ' + folderPath + ' does not exists or not have access to it');
        this.name = "DirectoryNotFoundException";
    }
}