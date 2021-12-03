"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathUtils = void 0;
const strUtils_1 = require("../utils/strUtils");
const fileReader_1 = require("./fileReader");
const path = require('path');
const os = require('os');
/**
 * Class with Utils methods for handle paths
 */
class PathUtils {
    /**
     * Method to get the file name from a path
     * @param {string} filePath path to process
     * @param {string} [extension] file extension to remove
     *
     * @returns {string} Returns the file name
     */
    static getBasename(filePath, extension) {
        return path.basename(filePath, extension);
    }
    /**
     * Method to get an absolute path from a file or folder path and replace \\ characters with /
     * @param {string} filePath path to process
     *
     * @returns {string} Returns the absolute file path
     */
    static getAbsolutePath(filePath) {
        return strUtils_1.StrUtils.replace(path.resolve(filePath), '\\', '/');
    }
    /**
     * Method to get the directory name from a path
     * @param {string} filePath path to process
     *
     * @returns {string} Return the folder name
     */
    static getDirname(filePath) {
        return strUtils_1.StrUtils.replace(path.dirname(filePath), '\\', '/');
    }
    /**
     * Method to get the Aura Helper CLI installed path
     *
     * @returns {string[]} return an array with all app paths
     */
    static getAuraHelperCLIAppPath() {
        const result = [];
        const systemPaths = process.env.PATH.split(';');
        if (systemPaths) {
            for (let systemPath of systemPaths) {
                systemPath = strUtils_1.StrUtils.replace(systemPath, "\\", "/");
                try {
                    let files = fileReader_1.FileReader.readDirSync(systemPath);
                    if (files.includes('aura-helper')) {
                        result.push(systemPath + '/aura-helper');
                    }
                    else if (files.includes('aura-helper.exe')) {
                        result.push(systemPath + '/aura-helper.exe');
                    }
                    else if (files.includes('ah')) {
                        result.push(systemPath + '/ah');
                    }
                    else if (files.includes('ah.exe')) {
                        result.push(systemPath + '/ah.exe');
                    }
                }
                catch (error) {
                }
            }
        }
        return result;
    }
    /**
     * Method to get the Aura Helper CLI Temp Files path
     *
     * @returns {string} Returns the Aura Helper CLI Temp files path
     */
    static getAuraHelperCLITempFilesPath() {
        return strUtils_1.StrUtils.replace(os.homedir() + '/AuraHelperCLI/TempFiles', "\\", "/");
    }
    /**
     * Method to remove a file extension from file path
     * @param {string} file file to process
     *
     * @returns {string} Returns the path without extension file
     */
    static removeFileExtension(file) {
        return file.split('.').slice(0, -1).join('.');
    }
}
exports.PathUtils = PathUtils;
//# sourceMappingURL=pathUtils.js.map