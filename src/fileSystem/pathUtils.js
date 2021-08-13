const path = require('path');
const os = require('os');
const StrUtils = require('../utils/strUtils');
const Utils = require('../utils/utils');
const FileReader = require('./fileReader');
const URI_REGEXP = "([A-Za-z][A-Za-z0-9+\\-.]*):(?:(//)(?:((?:[A-Za-z0-9\\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*)@)?((?:\\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\\.[A-Za-z0-9\\-._~!$&'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*))(?::([0-9]*))?((?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|/((?:(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?)|((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:/(?:[A-Za-z0-9\\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)|)(?:\\?((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?(?:\\#((?:[A-Za-z0-9\\-._~!$&'()*+,;=:@/?]|%[0-9A-Fa-f]{2})*))?";

/**
 * Class with Utils methods for handle paths
 */
class PathUtils {

    /**
     * Method to check if an String is an URI
     * @param {String} path path to check 
     * @returns true if have an URI format, false in otherwise
     */
    static isURI(path) {
        if (Utils.isNull(path) || !Utils.isString(path))
            return false;
        if (path.startsWith('.\\') || path.startsWith('./')) {
            path = 'C:/' + path.substr(2);
        } else if (path.startsWith('/') || path.startsWith('\\')) {
            path = 'C:/' + path.substr(1);
        }
        return new RegExp(URI_REGEXP).test(path);
    }

    /**
     * Method to get the file name from a path
     * @param {String} filePath path to process
     * @param {String} extension file extension to remove
     * @returns Returns the file name
     */
    static getBasename(filePath, extension) {
        return path.basename(filePath, extension);
    }

    /**
     * Method to get an absolute path from a file or folder path and replace \\ characters with /
     * @param {String} filePath path to process
     * @returns Returns the absolute file path
     */
    static getAbsolutePath(filePath) {
        return StrUtils.replace(path.resolve(filePath), '\\', '/');
    }

    /**
     * Method to get the directory name from a path
     * @param {String} filePath path to process
     * @returns Return the folder name
     */
    static getDirname(filePath) {
        return StrUtils.replace(path.dirname(filePath), '\\', '/');
    }

    /**
     * Method to get the Aura Helper CLI installed path
     * @returns return an array with all app paths
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
     * @returns Returns the Aura Helper CLI Temp files path
     */
    static getAuraHelperCLITempFilesPath() {
        return StrUtils.replace(os.homedir() + '/AuraHelperCLI/TempFiles', "\\", "/");
    }

    /**
     * Method to remove a file extension from file path
     * @param {String} file file to process
     * @returns Returns the path without extension file
     */
    static removeFileExtension(file) {
        return file.split('.').slice(0, -1).join('.');
    }
}
module.exports = PathUtils;