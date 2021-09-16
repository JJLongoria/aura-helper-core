const IPV4_REGEXP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const IPV6_REGEXP = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/gm;
const FileReader = require('../fileSystem/fileReader');
const FileChecker = require('../fileSystem/fileChecker');
const PathUtils = require('../fileSystem/pathUtils');
const WrongFormatException = require('../exceptions/wrongFormatException');
const FileNotFoundException = require('../exceptions/fileNotFoundException');
const DirectoryNotFoundException = require('../exceptions/directoryNotFoundException');
const InvalidFilePathException = require('../exceptions/invalidFilePathException');
const InvalidDirectoryPathException = require('../exceptions/invalidDirectoryPathException');
const WrongDirectoryPathException = require('../exceptions/wrongDirectoryPathException');
const WrongFilePathException = require('../exceptions/wrongFilePathException');
const Utils = require('./utils');
const DataRequiredException = require('../exceptions/dataRequiredException');
const INTEGER_REGEXP = /^[0-9]+$/;

/**
 * Class with methods to validate inputs and data
 */
class Validator {

    /**
     * Method to validate if the value is an integer
     * @param {String} value Value to check
     * 
     * @returns {Boolean} Returns true if the value is an integer 
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
     * @param {String} value value to check
     * 
     * @returns {Boolean} Returns true if is IPv4, false in otherwise
     */
    static isIPv4(value) {
        return IPV4_REGEXP.test(value);
    }

    /**
     * Method to validate if a String is a IPv6
     * @param {String} value value to check
     * 
     * @returns {Boolean} Returns true if is IPv6, false in otherwise
     */
    static isIPv6(value) {
        return IPV6_REGEXP.test(value);
    }

    /**
     * Method to validate a folder path
     * @param {String} folderPath folder path to validate (Required)
     * @param {String} [folderName] folder name to show on errors (optional)
     * 
     * @returns {String} Returns the absolute path of the folder
     * 
     * @throws {WrongDirectoryPathException} If the folderPath is not a String or can't convert to absolute path
     * @throws {DirectoryNotFoundException} If the directory not exists or not have access to it
     * @throws {InvalidDirectoryPathException} If the path is not a directory
     */
    static validateFolderPath(folderPath, folderName) {
        try {
            folderPath = PathUtils.getAbsolutePath(folderPath);
        } catch (error) {
            throw new WrongDirectoryPathException(folderPath, folderName);
        }
        if (!FileChecker.isExists(folderPath))
            throw new DirectoryNotFoundException(folderPath, folderName);
        if (!FileChecker.isDirectory(folderPath))
            throw new InvalidDirectoryPathException(folderPath, folderName);
        return folderPath;
    }

    /**
     * Method to validate a file path
     * @param {String} filePath file path to validate (Required)
     * @param {String} [fileName] file name to show on errors (optional)
     * 
     * @returns {String} Returns the absolute path of the file 
     * 
     * @throws {WrongFilePathException} If the filePath is not a String or can't convert to absolute path
     * @throws {FileNotFoundException} If the file not exists or not have access to it
     * @throws {InvalidFilePathException} If the path is not a file
     */
    static validateFilePath(filePath, fileName) {
        try {
            filePath = PathUtils.getAbsolutePath(filePath);
        } catch (error) {
            throw new WrongFilePathException(filePath, fileName);
        }
        if (!FileChecker.isExists(filePath))
            throw new FileNotFoundException(filePath, fileName);
        if (!FileChecker.isFile(filePath))
            throw new InvalidFilePathException(filePath, fileName);
        return filePath;
    }

    /**
     * Method to validate a JSON file
     * @param {String} filePath file path to validate (Required)
     * @param {String} [fileName] file name to show on errors (optional)
     * 
     * @returns {Object} Returns the file JSON content validated
     * 
     * @throws {WrongFilePathException} If the filePath is not a String or can't convert to absolute path
     * @throws {FileNotFoundException} If the file not exists or not have access to it
     * @throws {InvalidFilePathException} If the path is not a file
     * @throws {WrongFormatException} If file is not a JSON file
     */
    static validateJSONFile(filePath, fileName) {
        let content;
        try {
            filePath = PathUtils.getAbsolutePath(filePath);
        } catch (error) {
            throw new WrongFilePathException(filePath, fileName);
        }
        if (!FileChecker.isExists(filePath))
            throw new FileNotFoundException(filePath, fileName);
        if (!FileChecker.isFile(filePath))
            throw new InvalidFilePathException(filePath, fileName);
        try {
            content = JSON.parse(FileReader.readFileSync(filePath));
        } catch (error) {
            throw new WrongFormatException(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' does not have a valid JSON content. ' + error.message);
        }
        return content;
    }

    /**
     * Method to validate a Metadata JSON File or Object
     * @param {String | Object} metadataOrPath Metadata file path or JSON Object to validate
     * 
     * @returns {Object} Returns the validated Metadata object
     * 
     * @throws {WrongFilePathException} If the filePath is not a String or can't convert to absolute path
     * @throws {FileNotFoundException} If the file not exists or not have access to it
     * @throws {InvalidFilePathException} If the path is not a file
     * @throws {WrongFormatException} If file is not a JSON file or not have the correct Metadata JSON format
     */
    static validateMetadataJSON(metadataOrPath) {
        let metadata;
        if (Utils.isString(metadataOrPath)) {
            metadata = Validator.validateJSONFile(metadataOrPath);
        } else {
            metadata = metadataOrPath;
        }
        if (Utils.isNull(metadata))
            throw new DataRequiredException("You must to provied a Metadata JSON file path or Metadata JSON Object");
        if (Utils.isArray(metadata))
            throw new WrongFormatException("Wrong JSON Format file. The main object must be a JSON Object not an Array");
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
module.exports = Validator;

function validateMetadataType(metadataType, key) {
    if (metadataType.name === undefined)
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". Missing name field");
    if (typeof metadataType.name !== 'string')
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". name field must be a string, not a " + typeof metadataType.name);
    if (metadataType.checked === undefined)
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". Missing checked field");
    if (typeof metadataType.checked !== 'boolean')
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". checked field must be a boolean, not a " + typeof metadataType.checked);
    if (metadataType.path !== undefined && typeof metadataType.path !== 'string')
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". path field must be a string, not a " + typeof metadataType.path);
    if (metadataType.suffix !== undefined && typeof metadataType.suffix !== 'string')
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". suffix field must be a string, not a " + typeof metadataType.suffix);
    if (metadataType.childs === undefined)
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". Missing childs field");
    if (Array.isArray(metadataType.childs))
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". childs field must be a JSON Object, not an Array");
    if (typeof metadataType.childs !== 'object')
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". childs field must be a JSON Object, not a " + typeof metadataType.childs);
}

function validateMetadataObject(metadataObject, key, type) {
    if (metadataObject.name === undefined)
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing name field");
    if (typeof metadataObject.name !== 'string')
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). name field must be a string, not a " + typeof metadataObject.name);
    if (metadataObject.checked === undefined)
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing checked field");
    if (typeof metadataObject.checked !== 'boolean')
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). checked field must be a boolean, not a " + typeof metadataObject.checked);
    if (metadataObject.path !== undefined && typeof metadataObject.path !== 'string')
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). path field must be a string, not a " + typeof metadataObject.path);
    if (metadataObject.childs === undefined)
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing childs field");
    if (Array.isArray(metadataObject.childs))
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). childs field must be a JSON Object, not an Array");
    if (typeof metadataObject.childs !== 'object')
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). childs field must be a JSON Object, not a " + typeof metadataObject.childs);
}

function validateMetadataItem(metadataItem, key, object, type) {
    if (metadataItem.name === undefined)
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). Missing name field");
    if (typeof metadataItem.name !== 'string')
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). name field must be a string, not a " + typeof metadataItem.name);
    if (metadataItem.path !== undefined && typeof metadataItem.path !== 'string')
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). path field must be a string, not a " + typeof metadataItem.path);
    if (metadataItem.checked === undefined)
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). Missing checked field");
    if (typeof metadataItem.checked !== 'boolean')
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). checked field must be a boolean, not a " + typeof metadataItem.checked);
}