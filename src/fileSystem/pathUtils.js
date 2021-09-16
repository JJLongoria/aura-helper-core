const path = require('path');
const os = require('os');
const StrUtils = require('../utils/strUtils');
const FileReader = require('./fileReader');

/**
 * Class with Utils methods for handle paths
 */
class PathUtils {

    /**
     * Method to get the file name from a path
     * @param {String} filePath path to process
     * @param {String} [extension] file extension to remove
     * 
     * @returns {String} Returns the file name
     */
    static getBasename(filePath, extension) {
        return path.basename(filePath, extension);
    }

    /**
     * Method to get an absolute path from a file or folder path and replace \\ characters with /
     * @param {String} filePath path to process
     * 
     * @returns {String} Returns the absolute file path
     */
    static getAbsolutePath(filePath) {
        return StrUtils.replace(path.resolve(filePath), '\\', '/');
    }

    /**
     * Method to get the directory name from a path
     * @param {String} filePath path to process
     * 
     * @returns {String} Return the folder name
     */
    static getDirname(filePath) {
        return StrUtils.replace(path.dirname(filePath), '\\', '/');
    }

    /**
     * Method to get the Aura Helper CLI installed path
     * 
     * @returns {Array<String>} return an array with all app paths
     */
    static getAuraHelperCLIAppPath() {
        let result = [];
        let systemPaths = process.env.PATH.split(';');
        for (let systemPath of systemPaths) {
            systemPath = StrUtils.replace(systemPath, "\\", "/");
            try {
                let files = FileReader.readDirSync(systemPath);
                if (files.includes('aura-helper'))
                    result.push(systemPath + '/aura-helper');
                else if (files.includes('aura-helper.exe'))
                    result.push(systemPath + '/aura-helper.exe');
                else if (files.includes('ah'))
                    result.push(systemPath + '/ah');
                else if (files.includes('ah.exe'))
                    result.push(systemPath + '/ah.exe');
            } catch (error) {

            }
        }
        return result;
    }

    /**
     * Method to get the Aura Helper CLI Temp Files path
     * 
     * @returns {String} Returns the Aura Helper CLI Temp files path
     */
    static getAuraHelperCLITempFilesPath() {
        return StrUtils.replace(os.homedir() + '/AuraHelperCLI/TempFiles', "\\", "/");
    }

    /**
     * Method to remove a file extension from file path
     * @param {String} file file to process
     * 
     * @returns {String} Returns the path without extension file
     */
    static removeFileExtension(file) {
        return file.split('.').slice(0, -1).join('.');
    }
}
module.exports = PathUtils;