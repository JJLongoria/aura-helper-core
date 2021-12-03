"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileChecker = void 0;
const fs = require('fs');
/**
 * Class to check all about files. If is Apex Class, Apex Trigger, Aura Component... or check if exists or is a File or Directorty
 */
class FileChecker {
    /**
     * Method to check if the file path is an Apex Class file path (check .cls extension)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Apex Class file, false in otherwise
     */
    static isApexClass(filePath) {
        return filePath.endsWith('.cls');
    }
    /**
     * Method to check if the file path is an Apex Trigger file path (check .trigger extension)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Apex Trigger file, false in otherwise
     */
    static isApexTrigger(filePath) {
        return filePath.endsWith('.trigger');
    }
    /**
     * Method to check if the file path is a JavaScript file path (check .js extension)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is JavaScript file, false in otherwise
     */
    static isJavaScript(filePath) {
        return filePath.endsWith('.js');
    }
    /**
     * Method to check if the file path is an Aura JavaScript Helper file path (check ends with Helper.js)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Aura JavaScript Helper file, false in otherwise
     */
    static isAuraHelperJS(filePath) {
        return filePath.endsWith('Helper.js');
    }
    /**
     * Method to check if the file path is an Aura JavaScript Controller file path (check ends with Controller.js)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Aura JavaScript Controller file, false in otherwise
     */
    static isAuraControllerJS(filePath) {
        return filePath.endsWith('Controller.js');
    }
    /**
     * Method to check if the file path is an Aura Documentation file path (check .auradoc extension)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Aura Documentation file, false in otherwise
     */
    static isAuraDoc(filePath) {
        return filePath.endsWith('.auradoc');
    }
    /**
     * Method to check if the file path is an Aura Component file path (check .cmp extension)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Aura Component file, false in otherwise
     */
    static isAuraComponent(filePath) {
        return filePath.endsWith('.cmp');
    }
    /**
     * Method to check if the file path is an Aura Application file path (check .app extension)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Aura Application file, false in otherwise
     */
    static isAuraApplication(filePath) {
        return filePath.endsWith('.app');
    }
    /**
     * Method to check if the file path is an Aura Event file path (check .evt extension)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Aura Event file, false in otherwise
     */
    static isAuraEvent(filePath) {
        return filePath.endsWith('.evt');
    }
    /**
     * Method to check if the file path is the Aura Components folder
     * @param {string} folderPath path to check
     *
     * @returns {boolean} true if is Aura Components folder, false in otherwise
     */
    static isAuraComponentFolder(folderPath) {
        return folderPath.indexOf('/aura/') !== -1 || folderPath.indexOf('\\aura\\') !== -1;
    }
    /**
     * Method to check if the file path is an Aura file path (Event, Application or Component)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Aura file, false in otherwise
     */
    static isAuraFile(filePath) {
        return FileChecker.isAuraComponentFolder(filePath) && (FileChecker.isAuraComponent(filePath) || FileChecker.isAuraApplication(filePath) || FileChecker.isAuraEvent(filePath));
    }
    /**
     * Method to check if the file path is Salesforce XML File (check ends with -meta.xml)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Salesforce Profile file, false in otherwise
     */
    static isSalesforceXML(filePath) {
        return filePath.endsWith('-meta.xml');
    }
    /**
     * Method to check if the file path is Salesforce Profile file (check .profile-meta.xml extension)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Salesforce Profile file, false in otherwise
     */
    static isProfile(filePath) {
        return filePath.endsWith('.profile-meta.xml');
    }
    /**
     * Method to check if the file path is Salesforce Permission Set file (check .permissionset-meta.xml extension)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is Salesforce Permission Set file, false in otherwise
     */
    static isPermissionSet(filePath) {
        return filePath.endsWith('.permissionset-meta.xml');
    }
    /**
     * Method to check if the file path is the Salesforce Profile folder
     * @param {string} folderPath path to check
     *
     * @returns {boolean} true if is Salesforce Profile folder, false in otherwise
     */
    static isProfileFolder(folderPath) {
        return folderPath.endsWith('/profiles') || folderPath.endsWith('\\profiles');
    }
    /**
     * Method to check if the file path is the Salesforce Permission Set folder
     * @param {string} folderPath path to check
     *
     * @returns {boolean} true if is Salesforce Permission Set folder, false in otherwise
     */
    static isPermissionSetFolder(folderPath) {
        return folderPath.endsWith('/permissionsets') || folderPath.endsWith('\\permissionsets');
    }
    /**
     * Method to check if file or folder exists on the system
     * @param {string} fileOFolderPath path to check
     *
     * @returns {boolean} true if exists, false in otherwise
     */
    static isExists(fileOFolderPath) {
        return fs.existsSync(fileOFolderPath);
    }
    /**
     * Method to check if the path is a Directory path (and exists)
     * @param {string} folderPath path to check
     *
     * @returns {boolean} true if is a directory, false in otherwise
     */
    static isDirectory(folderPath) {
        return FileChecker.isExists(folderPath) && fs.statSync(folderPath).isDirectory();
    }
    /**
     * Method to check if the path is a File path (and exists)
     * @param {string} filePath path to check
     *
     * @returns {boolean} true if is a file, false in otherwise
     */
    static isFile(filePath) {
        return FileChecker.isExists(filePath) && fs.statSync(filePath).isFile();
    }
    /**
     * Method to check if the folder is a SFDX Salesforce project folder (check if sfdx-project.json or /manifest/package.xml exists on folder)
     * @param {string} folderPath path to check
     *
     * @returns {boolean} true if is a SFDX Salesforce project folder, false in otherwise
     */
    static isSFDXRootPath(folderPath) {
        return FileChecker.isExists(folderPath + '/sfdx-project.json') || FileChecker.isExists(folderPath + '/manifest/package.xml');
    }
}
exports.FileChecker = FileChecker;
//# sourceMappingURL=fileChecker.js.map