"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const exceptions_1 = require("../exceptions");
const fileSystem_1 = require("../fileSystem");
const utils_1 = require("./utils");
const IPV4_REGEXP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const IPV6_REGEXP = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/gm;
const INTEGER_REGEXP = /^[0-9]+$/;
/**
 * Class with methods to validate inputs and data
 */
class Validator {
    /**
     * Method to validate if the value is an integer
     * @param {string} value Value to check
     *
     * @returns {boolean} Returns true if the value is an integer
     */
    static isInteger(value) {
        return INTEGER_REGEXP.test(value);
    }
    /**
     * Method to get the IPv4 regexp
     *
     * @returns {RegExp} Returns the IPv4 Regexp
     */
    static getIpv4Regexp() {
        return IPV4_REGEXP;
    }
    /**
     * Method to get the IPv6 regexp
     *
     * @returns {RegExp} Returns the IPv6 Regexp
     */
    static getIpv6Regexp() {
        return IPV6_REGEXP;
    }
    /**
     * Method to validate if a String is a IPv4
     * @param {string} value value to check
     *
     * @returns {boolean} Returns true if is IPv4, false in otherwise
     */
    static isIPv4(value) {
        return IPV4_REGEXP.test(value);
    }
    /**
     * Method to validate if a String is a IPv6
     * @param {string} value value to check
     *
     * @returns {boolean} Returns true if is IPv6, false in otherwise
     */
    static isIPv6(value) {
        return IPV6_REGEXP.test(value);
    }
    /**
     * Method to validate a folder path
     * @param {string} folderPath folder path to validate (Required)
     * @param {string} [folderName] folder name to show on errors (optional)
     *
     * @returns {string} Returns the absolute path of the folder
     *
     * @throws {WrongDirectoryPathException} If the folderPath is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the directory not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the path is not a directory
     */
    static validateFolderPath(folderPath, folderName) {
        try {
            folderPath = fileSystem_1.PathUtils.getAbsolutePath(folderPath);
        }
        catch (error) {
            throw new exceptions_1.WrongDirectoryPathException(folderPath, folderName);
        }
        if (!fileSystem_1.FileChecker.isExists(folderPath)) {
            throw new exceptions_1.DirectoryNotFoundException(folderPath, folderName);
        }
        if (!fileSystem_1.FileChecker.isDirectory(folderPath)) {
            throw new exceptions_1.InvalidDirectoryPathException(folderPath, folderName);
        }
        return folderPath;
    }
    /**
     * Method to validate a file path
     * @param {string} filePath file path to validate (Required)
     * @param {string} [fileName] file name to show on errors (optional)
     *
     * @returns {string} Returns the absolute path of the file
     *
     * @throws {WrongFilePathException} If the filePath is not a String or can't convert to absolute path
     * @throws {FileNotFoundException} If the file not exists or not have access to it
     * @throws {InvalidFilePathException} If the path is not a file
     */
    static validateFilePath(filePath, fileName) {
        try {
            filePath = fileSystem_1.PathUtils.getAbsolutePath(filePath);
        }
        catch (error) {
            throw new exceptions_1.WrongFilePathException(filePath, fileName);
        }
        if (!fileSystem_1.FileChecker.isExists(filePath)) {
            throw new exceptions_1.FileNotFoundException(filePath, fileName);
        }
        if (!fileSystem_1.FileChecker.isFile(filePath)) {
            throw new exceptions_1.InvalidFilePathException(filePath, fileName);
        }
        return filePath;
    }
    /**
     * Method to validate a JSON file
     * @param {string} filePath file path to validate (Required)
     * @param {string} [fileName] file name to show on errors (optional)
     *
     * @returns {any} Returns the file JSON content validated
     *
     * @throws {WrongFilePathException} If the filePath is not a String or can't convert to absolute path
     * @throws {FileNotFoundException} If the file not exists or not have access to it
     * @throws {InvalidFilePathException} If the path is not a file
     * @throws {WrongFormatException} If file is not a JSON file
     */
    static validateJSONFile(filePath, fileName) {
        let content;
        try {
            filePath = fileSystem_1.PathUtils.getAbsolutePath(filePath);
        }
        catch (error) {
            throw new exceptions_1.WrongFilePathException(filePath, fileName);
        }
        if (!fileSystem_1.FileChecker.isExists(filePath)) {
            throw new exceptions_1.FileNotFoundException(filePath, fileName);
        }
        if (!fileSystem_1.FileChecker.isFile(filePath)) {
            throw new exceptions_1.InvalidFilePathException(filePath, fileName);
        }
        try {
            content = JSON.parse(fileSystem_1.FileReader.readFileSync(filePath));
        }
        catch (error) {
            const errData = error;
            throw new exceptions_1.WrongFormatException(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' does not have a valid JSON content. ' + errData.message);
        }
        return content;
    }
    /**
     * Method to validate a Metadata JSON File or Object
     * @param {string | { [key: string]: MetadataType }} metadataOrPath Metadata file path or JSON Object to validate
     *
     * @returns {{ [key: string]: MetadataType }} Returns the validated Metadata object
     *
     * @throws {WrongFilePathException} If the filePath is not a String or can't convert to absolute path
     * @throws {FileNotFoundException} If the file not exists or not have access to it
     * @throws {InvalidFilePathException} If the path is not a file
     * @throws {WrongFormatException} If file is not a JSON file or not have the correct Metadata JSON format
     */
    static validateMetadataJSON(metadataOrPath) {
        let metadata;
        try {
            if (utils_1.Utils.isString(metadataOrPath)) {
                metadataOrPath = metadataOrPath;
                metadata = Validator.validateJSONFile(metadataOrPath);
            }
            else {
                metadataOrPath = metadataOrPath;
                metadata = metadataOrPath;
            }
        }
        catch (error) {
            const errData = error;
            throw new exceptions_1.WrongFormatException("Wrong JSON Format file: " + errData.message);
        }
        if (utils_1.Utils.isNull(metadata)) {
            throw new exceptions_1.DataRequiredException("You must to provied a Metadata JSON file path or Metadata JSON Object");
        }
        if (utils_1.Utils.isArray(metadata)) {
            throw new exceptions_1.WrongFormatException("Wrong JSON Format file. The main object must be a JSON Object not an Array");
        }
        Object.keys(metadata).forEach(function (key) {
            let metadataType = metadata[key];
            validateMetadataType(metadataType, key);
            if (metadataType.childs && Object.keys(metadataType.childs).length > 0) {
                Object.keys(metadataType.childs).forEach(function (childKey) {
                    let metadataObject = metadataType.childs[childKey];
                    validateMetadataObject(metadataObject, childKey, key);
                    if (metadataObject.childs && Object.keys(metadataObject.childs).length > 0) {
                        Object.keys(metadataObject.childs).forEach(function (grandChildKey) {
                            let metadataItem = metadataObject.childs[grandChildKey];
                            validateMetadataItem(metadataItem, grandChildKey, childKey, key);
                        });
                    }
                });
            }
        });
        return metadata;
    }
}
exports.Validator = Validator;
function validateMetadataType(metadataType, key) {
    if (utils_1.Utils.isNull(metadataType.name)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". Missing name field");
    }
    if (!utils_1.Utils.isString(metadataType.name)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". name field must be a string, not a " + typeof metadataType.name);
    }
    if (utils_1.Utils.isNull(metadataType.checked)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". Missing checked field");
    }
    if (!utils_1.Utils.isBoolean(metadataType.checked)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". checked field must be a boolean, not a " + typeof metadataType.checked);
    }
    if (metadataType.path && !utils_1.Utils.isString(metadataType.path)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". path field must be a string, not a " + typeof metadataType.path);
    }
    if (metadataType.suffix && !utils_1.Utils.isString(metadataType.suffix)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". suffix field must be a string, not a " + typeof metadataType.suffix);
    }
    if (utils_1.Utils.isNull(metadataType.childs)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". Missing childs field");
    }
    if (utils_1.Utils.isArray(metadataType.childs)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". childs field must be a JSON Object, not an Array");
    }
    if (!utils_1.Utils.isObject(metadataType.childs)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". childs field must be a JSON Object, not a " + typeof metadataType.childs);
    }
}
function validateMetadataObject(metadataObject, key, type) {
    if (utils_1.Utils.isNull(metadataObject.name)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing name field");
    }
    if (!utils_1.Utils.isString(metadataObject.name)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). name field must be a string, not a " + typeof metadataObject.name);
    }
    if (utils_1.Utils.isNull(metadataObject.checked)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing checked field");
    }
    if (!utils_1.Utils.isBoolean(metadataObject.checked)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). checked field must be a boolean, not a " + typeof metadataObject.checked);
    }
    if (metadataObject.path && !utils_1.Utils.isString(metadataObject.path)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). path field must be a string, not a " + typeof metadataObject.path);
    }
    if (utils_1.Utils.isNull(metadataObject.childs)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing childs field");
    }
    if (utils_1.Utils.isArray(metadataObject.childs)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). childs field must be a JSON Object, not an Array");
    }
    if (!utils_1.Utils.isObject(metadataObject.childs)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). childs field must be a JSON Object, not a " + typeof metadataObject.childs);
    }
}
function validateMetadataItem(metadataItem, key, object, type) {
    if (utils_1.Utils.isNull(metadataItem.name)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). Missing name field");
    }
    if (!utils_1.Utils.isString(metadataItem.name)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). name field must be a string, not a " + typeof metadataItem.name);
    }
    if (metadataItem.path && !utils_1.Utils.isString(metadataItem.path)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). path field must be a string, not a " + typeof metadataItem.path);
    }
    if (utils_1.Utils.isNull(metadataItem.checked)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). Missing checked field");
    }
    if (!utils_1.Utils.isBoolean(metadataItem.checked)) {
        throw new exceptions_1.WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). checked field must be a boolean, not a " + typeof metadataItem.checked);
    }
}
//# sourceMappingURL=validator.js.map