/**
 * Class to handle and throw errors when not found or cant access to a system directory
 */
class DirectoryNotFoundException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} folderPath Not found folder path
     * @param {String} folderName Optional folder name to show
     */
    constructor(folderPath, folderName) {
        super(((folderName) ? (folderName + ' folder') : 'Folder') + ' ' + folderPath + ' does not exists or not have access to it');
        this.name = "DirectoryNotFoundException";
    }
}
module.exports = DirectoryNotFoundException;