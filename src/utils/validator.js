const IPV4_REGEXP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const IPV6_REGEXP = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/gm;
const FileReader = require('../fileSystem/fileReader');
const FileChecker = require('../fileSystem/fileChecker');
const PathUtils = require('../fileSystem/pathUtils');
const INTEGER_REGEXP = /^[0-9]+$/;

class Validator {

    static isInteger(value){
        return INTEGER_REGEXP.test(value);
    }

    static getIpv4Regexp() {
        return IPV4_REGEXP;
    }

    static getIpv6Regexp() {
        return IPV6_REGEXP;
    }

    static isIPv4(value) {
        return IPV4_REGEXP.test(value);
    }

    static isIPv6(value) {
        return IPV6_REGEXP.test(value);
    }

    static validateMetadataJSON(metadataOrPath) {
        let metadata;
        if (typeof metadataOrPath === 'object') {
            metadata = metadataOrPath;
        } else {
            metadata = Validator.validateJSONFile(metadataOrPath);
        }
        if (Array.isArray(metadata))
            throw new Error("Wrong JSON Format file. The main object must be a JSON Object not an Array");
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
    }

    static validateFolderPath(folderPath, fileName) {
        try {
            folderPath = PathUtils.getAbsolutePath(folderPath);
        } catch (error) {
            throw new Error('Wrong ' + ((fileName) ? (fileName) : 'folder') + ' path. Expect a folder path and receive ' + folderPath);
        }
        if (!FileChecker.isExists(folderPath))
            throw new Error(((fileName) ? (fileName + ' folder') : 'Folder') + ' ' + folderPath + ' does not exists or not have access to it');
        if (!FileChecker.isDirectory(folderPath))
            throw new Error(((fileName) ? (fileName + ' folder') : 'Folder') + ' ' + folderPath + ' is not a valid directory path');
        return folderPath;
    }

    static validateFilePath(filePath, fileName) {
        try {
            filePath = PathUtils.getAbsolutePath(filePath);
        } catch (error) {
            throw new Error('Wrong ' + ((fileName) ? (fileName + ' ') : '') + 'file path. Expect a file path and receive ' + filePath);
        }
        if (!FileChecker.isExists(filePath))
            throw new Error(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' does not exists or not have access to it');
        if (!FileChecker.isFile(filePath))
            throw new Error(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' is not a valid file path');
        return filePath;
    }

    static validateJSONFile(filePath, fileName) {
        let content;
        try {
            filePath = PathUtils.getAbsolutePath(filePath);
        } catch (error) {
            throw new Error('Wrong ' + ((fileName) ? (fileName + ' ') : '') + 'file path. Expect a JSON file path and receive ' + filePath);
        }
        if (!FileChecker.isExists(filePath))
            throw new Error(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' does not exists or not have access to it');
        try {
            content = JSON.parse(FileReader.readFileSync(filePath));
        } catch (error) {
            throw new Error(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' does not have a valid JSON content. ' + error.message);
        }
        return content;
    }
}
module.exports = Validator;

function validateMetadataType(metadataType, key) {
    if (metadataType.name === undefined)
        throw new Error("Wrong JSON Format for Metadata Type with key " + key + ". Missing name field");
    if (typeof metadataType.name !== 'string')
        throw new Error("Wrong JSON Format for Metadata Type with key " + key + ". name field must be a string, not a " + typeof metadataType.name);
    if (metadataType.checked === undefined)
        throw new Error("Wrong JSON Format for Metadata Type with key " + key + ". Missing checked field");
    if (typeof metadataType.checked !== 'boolean')
        throw new Error("Wrong JSON Format for Metadata Type with key " + key + ". checked field must be a boolean, not a " + typeof metadataType.checked);
    if (metadataType.path !== undefined && typeof metadataType.path !== 'string')
        throw new Error("Wrong JSON Format for Metadata Type with key " + key + ". path field must be a string, not a " + typeof metadataType.path);
    if (metadataType.suffix !== undefined && typeof metadataType.suffix !== 'string')
        throw new Error("Wrong JSON Format for Metadata Type with key " + key + ". suffix field must be a string, not a " + typeof metadataType.suffix);
    if (metadataType.childs === undefined)
        throw new Error("Wrong JSON Format for Metadata Type with key " + key + ". Missing childs field");
    if (Array.isArray(metadataType.childs))
        throw new Error("Wrong JSON Format for Metadata Type with key " + key + ". childs field must be a JSON Object, not an Array");
    if (typeof metadataType.childs !== 'object')
        throw new Error("Wrong JSON Format for Metadata Type with key " + key + ". childs field must be a JSON Object, not a " + typeof metadataType.childs);
}

function validateMetadataObject(metadataObject, key, type) {
    if (metadataObject.name === undefined)
        throw new Error("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing name field");
    if (typeof metadataObject.name !== 'string')
        throw new Error("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). name field must be a string, not a " + typeof metadataObject.name);
    if (metadataObject.checked === undefined)
        throw new Error("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing checked field");
    if (typeof metadataObject.checked !== 'boolean')
        throw new Error("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). checked field must be a boolean, not a " + typeof metadataObject.checked);
    if (metadataObject.path !== undefined && typeof metadataObject.path !== 'string')
        throw new Error("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). path field must be a string, not a " + typeof metadataObject.path);
    if (metadataObject.childs === undefined)
        throw new Error("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing childs field");
    if (Array.isArray(metadataObject.childs))
        throw new Error("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). childs field must be a JSON Object, not an Array");
    if (typeof metadataObject.childs !== 'object')
        throw new Error("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). childs field must be a JSON Object, not a " + typeof metadataObject.childs);
}

function validateMetadataItem(metadataItem, key, object, type) {
    if (metadataItem.name === undefined)
        throw new Error("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). Missing name field");
    if (typeof metadataItem.name !== 'string')
        throw new Error("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). name field must be a string, not a " + typeof metadataItem.name);
    if (metadataItem.path !== undefined && typeof metadataItem.path !== 'string')
        throw new Error("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). path field must be a string, not a " + typeof metadataItem.path);
    if (metadataItem.checked === undefined)
        throw new Error("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). Missing checked field");
    if (typeof metadataItem.checked !== 'boolean')
        throw new Error("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). checked field must be a boolean, not a " + typeof metadataItem.checked);
}