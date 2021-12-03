"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUtils = void 0;
const exceptions_1 = require("../exceptions");
const fileSystem_1 = require("../fileSystem");
const projectConfig_1 = require("../types/projectConfig");
const httpConnection_1 = require("./httpConnection");
const validator_1 = require("./validator");
const PROJECT_FILE = 'sfdx-project.json';
const CONFIG_FILE = 'sfdx-config.json';
let projectConfig;
/**
 * Class with util methods to work with a Salesforce Project
 */
class ProjectUtils {
    /**
     * Method to get the Salesforce project config file
     * @param {string} projectFolder Root project folder
     *
     * @returns {ProjectConfig | undefined} Returns an object with the project config or undefined if not exists config file
     */
    static getProjectConfig(projectFolder) {
        projectFolder = validator_1.Validator.validateFolderPath(projectFolder, 'projectFolder');
        const filePath = projectFolder + '/' + PROJECT_FILE;
        if (fileSystem_1.FileChecker.isExists(filePath)) {
            projectConfig = new projectConfig_1.ProjectConfig(JSON.parse(fileSystem_1.FileReader.readFileSync(filePath)));
            return projectConfig;
        }
        return undefined;
    }
    /**
     * Method to get the available version on a salesforce org
     * @param {string} instance Salesforce URL Instance
     *
     * @returns {Promise<OrgAvailableVersion[]>}
     */
    static getOrgAvailableVersions(instance) {
        return new Promise(async function (resolve) {
            let data = await httpConnection_1.HTTPConnection.getRequest(instance + '/services/data');
            resolve(JSON.parse(data));
        });
    }
    /**
     * Method to get the las available version from the org available versions
     * @param {OrgAvailableVersion[]} orgAvailableVersions Salesforce org available versions
     *
     * @returns {number | undefined} Returns the last available version
     */
    static getLastVersion(orgAvailableVersions) {
        let lastVersion = (orgAvailableVersions && orgAvailableVersions.length > 0) ? orgAvailableVersions[orgAvailableVersions.length - 1].version : undefined;
        return (lastVersion !== undefined) ? parseInt(lastVersion) : lastVersion;
    }
    /**
     * Method to get the Auth Org Alias from a project
     * @param {string} projectFolder Root project folder
     *
     * @returns {string | undefined} Returns the Org Alias
     */
    static getOrgAlias(projectFolder) {
        projectFolder = validator_1.Validator.validateFolderPath(projectFolder, 'projectFolder');
        if (fileSystem_1.FileChecker.isExists(projectFolder + '/.sfdx/' + CONFIG_FILE)) {
            return JSON.parse(fileSystem_1.FileReader.readFileSync(projectFolder + '/.sfdx/' + CONFIG_FILE)).defaultusername;
        }
        return undefined;
    }
    /**
     * Method to get the Project Org Namespace
     * @param {string} projectFolder Root project folder
     *
     * @returns Returns the Org Namespace
     */
    static getOrgNamespace(projectFolder) {
        const config = ProjectUtils.getProjectConfig(projectFolder);
        if (config) {
            return config.namespace;
        }
        return '';
    }
    /**
     * Method to get the apiVersion as String and correct format
     * @param {string | number} apiVersion Api version to transform
     *
     * @returns {string} Returns the Api Version like i.0 as String
     *
     * @throws {WrongDatatypeException} If the api version is not a Number or String
     */
    static getApiAsString(apiVersion) {
        if (typeof apiVersion === 'string') {
            apiVersion = parseFloat(apiVersion);
            apiVersion = Math.trunc(apiVersion);
            return apiVersion + '.0';
        }
        else if (typeof apiVersion === 'number') {
            apiVersion = Math.trunc(apiVersion);
            return apiVersion + '.0';
        }
        else {
            throw new exceptions_1.WrongDatatypeException('Wrong API Version Datatype. Expect string or number but get ' + typeof apiVersion + '. Value: ' + apiVersion);
        }
    }
    /**
     * Method to get the apiVersion as Number and correct format
     * @param {string | number} apiVersion Api version to transform
     *
     * @returns {number} Returns the Api Version like i.0 as Number
     *
     * @throws {WrongDatatypeException} If the api version is not a Number or String
     */
    static getApiAsNumber(apiVersion) {
        if (typeof apiVersion === 'string') {
            apiVersion = parseFloat(apiVersion);
            return Math.trunc(apiVersion);
        }
        else if (typeof apiVersion === 'number') {
            return Math.trunc(apiVersion);
        }
        else {
            throw new exceptions_1.WrongDatatypeException('Wrong API Version Datatype. Expect string or number but get ' + typeof apiVersion + '. Value: ' + apiVersion);
        }
    }
}
exports.ProjectUtils = ProjectUtils;
//# sourceMappingURL=projectUtils.js.map