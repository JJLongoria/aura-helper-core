import { MetadataType } from "../types/metadataType";
/**
 * Class with methods to validate inputs and data
 */
export declare class Validator {
    /**
     * Method to validate if the value is an integer
     * @param {string} value Value to check
     *
     * @returns {boolean} Returns true if the value is an integer
     */
    static isInteger(value: string): boolean;
    /**
     * Method to get the IPv4 regexp
     *
     * @returns {RegExp} Returns the IPv4 Regexp
     */
    static getIpv4Regexp(): RegExp;
    /**
     * Method to get the IPv6 regexp
     *
     * @returns {RegExp} Returns the IPv6 Regexp
     */
    static getIpv6Regexp(): RegExp;
    /**
     * Method to validate if a String is a IPv4
     * @param {string} value value to check
     *
     * @returns {boolean} Returns true if is IPv4, false in otherwise
     */
    static isIPv4(value: string): boolean;
    /**
     * Method to validate if a String is a IPv6
     * @param {string} value value to check
     *
     * @returns {boolean} Returns true if is IPv6, false in otherwise
     */
    static isIPv6(value: string): boolean;
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
    static validateFolderPath(folderPath: string, folderName?: string): string;
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
    static validateFilePath(filePath: string, fileName?: string): string;
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
    static validateJSONFile(filePath: string, fileName?: string): any;
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
    static validateMetadataJSON(metadataOrPath: string | {
        [key: string]: MetadataType;
    }): {
        [key: string]: MetadataType;
    };
}
