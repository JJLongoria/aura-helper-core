import { DataRequiredException, DirectoryNotFoundException, FileNotFoundException, InvalidDirectoryPathException, InvalidFilePathException, WrongDirectoryPathException, WrongFilePathException, WrongFormatException } from "../exceptions";
import { FileChecker, FileReader, PathUtils } from "../fileSystem";
import { Utils } from "./utils";

const IPV4_REGEXP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const IPV6_REGEXP = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/gm;
const INTEGER_REGEXP = /^[0-9]+$/;

/**
 * Class with methods to validate inputs and data
 */
export class Validator {

    /**
     * Method to validate if the value is an integer
     * @param {string} value Value to check
     * 
     * @returns {boolean} Returns true if the value is an integer 
     */
    static isInteger(value: string): boolean {
        return INTEGER_REGEXP.test(value);
    }

    /**
     * Method to get the IPv4 regexp
     * 
     * @returns {RegExp} Returns the IPv4 Regexp
     */
    static getIpv4Regexp(): RegExp {
        return IPV4_REGEXP;
    }

    /**
     * Method to get the IPv6 regexp
     * 
     * @returns {RegExp} Returns the IPv6 Regexp
     */
    static getIpv6Regexp(): RegExp {
        return IPV6_REGEXP;
    }

    /**
     * Method to validate if a String is a IPv4
     * @param {string} value value to check
     * 
     * @returns {boolean} Returns true if is IPv4, false in otherwise
     */
    static isIPv4(value: string): boolean {
        return IPV4_REGEXP.test(value);
    }

    /**
     * Method to validate if a String is a IPv6
     * @param {string} value value to check
     * 
     * @returns {boolean} Returns true if is IPv6, false in otherwise
     */
    static isIPv6(value: string): boolean {
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
    static validateFolderPath(folderPath?: string, folderName?: string): string {
        if(folderPath){
            try {
                folderPath = PathUtils.getAbsolutePath(folderPath);
            } catch (error) {
                throw new WrongDirectoryPathException(folderPath, folderName);
            }
        } else {
            throw new WrongDirectoryPathException(folderPath, folderName);
        }
        if (!FileChecker.isExists(folderPath)) {
            throw new DirectoryNotFoundException(folderPath, folderName);
        }
        if (!FileChecker.isDirectory(folderPath)) {
            throw new InvalidDirectoryPathException(folderPath, folderName);
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
    static validateFilePath(filePath?: string, fileName?: string): string {
        if(filePath){
            try {
                filePath = PathUtils.getAbsolutePath(filePath);
            } catch (error) {
                throw new WrongFilePathException(filePath, fileName);
            }
        } else {
            throw new WrongFilePathException(filePath, fileName);
        }
        if (!FileChecker.isExists(filePath)) {
            throw new FileNotFoundException(filePath, fileName);
        }
        if (!FileChecker.isFile(filePath)) {
            throw new InvalidFilePathException(filePath, fileName);
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
    static validateJSONFile(filePath: string, fileName?: string): any {
        let content;
        try {
            filePath = PathUtils.getAbsolutePath(filePath);
        } catch (error) {
            throw new WrongFilePathException(filePath, fileName);
        }
        if (!FileChecker.isExists(filePath)) {
            throw new FileNotFoundException(filePath, fileName);
        }
        if (!FileChecker.isFile(filePath)) {
            throw new InvalidFilePathException(filePath, fileName);
        }
        try {
            content = JSON.parse(FileReader.readFileSync(filePath));
        } catch (error) {
            const errData = error as Error;
            throw new WrongFormatException(((fileName) ? (fileName + ' file') : 'File') + ' ' + filePath + ' does not have a valid JSON content. ' + errData.message);
        }
        return content;
    }

    /**
     * Method to validate a Metadata JSON File or Object
     * @param {string | any} metadataOrPath Metadata file path or JSON Object to validate
     * 
     * @returns {any} Returns the validated Metadata object
     * 
     * @throws {WrongFilePathException} If the filePath is not a String or can't convert to absolute path
     * @throws {FileNotFoundException} If the file not exists or not have access to it
     * @throws {InvalidFilePathException} If the path is not a file
     * @throws {WrongFormatException} If file is not a JSON file or not have the correct Metadata JSON format
     */
    static validateMetadataJSON(metadataOrPath: string | any): any {
        let metadata: any;
        try {
            if (Utils.isString(metadataOrPath)) {
                metadataOrPath = metadataOrPath as string;
                metadata = Validator.validateJSONFile(metadataOrPath);
            } else {
                metadata = metadataOrPath;
            }
        } catch (error) {
            const errData = error as Error;
            throw new WrongFormatException("Wrong JSON Format file: " + errData.message);
        }

        if (Utils.isNull(metadata)) {
            throw new DataRequiredException("You must to provied a Metadata JSON file path or Metadata JSON Object");
        }
        if (Utils.isArray(metadata)) {
            throw new WrongFormatException("Wrong JSON Format file. The main object must be a JSON Object not an Array");
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

function validateMetadataType(metadataType: any, key: string): void {
    if (Utils.isNull(metadataType.name)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". Missing name field");
    }
    if (!Utils.isString(metadataType.name)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". name field must be a string, not a " + typeof metadataType.name);
    }
    if (Utils.isNull(metadataType.checked)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". Missing checked field");
    }
    if (!Utils.isBoolean(metadataType.checked)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". checked field must be a boolean, not a " + typeof metadataType.checked);
    }
    if (metadataType.path && !Utils.isString(metadataType.path)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". path field must be a string, not a " + typeof metadataType.path);
    }
    if (metadataType.suffix && !Utils.isString(metadataType.suffix)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". suffix field must be a string, not a " + typeof metadataType.suffix);
    }
    if (Utils.isNull(metadataType.childs)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". Missing childs field");
    }
    if (Utils.isArray(metadataType.childs)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". childs field must be a JSON Object, not an Array");
    }
    if (!Utils.isObject(metadataType.childs)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Type with key " + key + ". childs field must be a JSON Object, not a " + typeof metadataType.childs);
    }
}

function validateMetadataObject(metadataObject: any, key: string, type: string): void {
    if (Utils.isNull(metadataObject.name)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing name field");
    }
    if (!Utils.isString(metadataObject.name)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). name field must be a string, not a " + typeof metadataObject.name);
    }
    if (Utils.isNull(metadataObject.checked)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing checked field");
    }
    if (!Utils.isBoolean(metadataObject.checked)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). checked field must be a boolean, not a " + typeof metadataObject.checked);
    }
    if (metadataObject.path && !Utils.isString(metadataObject.path)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). path field must be a string, not a " + typeof metadataObject.path);
    }
    if (Utils.isNull(metadataObject.childs)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). Missing childs field");
    }
    if (Utils.isArray(metadataObject.childs)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). childs field must be a JSON Object, not an Array");
    }
    if (!Utils.isObject(metadataObject.childs)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Object with key " + key + " (" + type + "). childs field must be a JSON Object, not a " + typeof metadataObject.childs);
    }
}

function validateMetadataItem(metadataItem: any, key: string, object: string, type: string) {
    if (Utils.isNull(metadataItem.name)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). Missing name field");
    }
    if (!Utils.isString(metadataItem.name)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). name field must be a string, not a " + typeof metadataItem.name);
    }
    if (metadataItem.path && !Utils.isString(metadataItem.path)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). path field must be a string, not a " + typeof metadataItem.path);
    }
    if (Utils.isNull(metadataItem.checked)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). Missing checked field");
    }
    if (!Utils.isBoolean(metadataItem.checked)) {
        throw new WrongFormatException("Wrong JSON Format for Metadata Item with key " + key + " (" + type + ": " + object + "). checked field must be a boolean, not a " + typeof metadataItem.checked);
    }
}