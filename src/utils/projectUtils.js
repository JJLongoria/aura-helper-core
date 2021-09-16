const FileReader = require('../fileSystem/fileReader');
const FileChecker = require('../fileSystem/fileChecker');
const Validator = require('../utils/validator');
const HTTPConnection = require('../utils/httpConnection');
const ProjectConfig = require('../types/projectConfig');
const Utils = require('../utils/utils');
const WrongDatatypeException = require('../exceptions/wrongDatatypeException');

const PROJECT_FILE = 'sfdx-project.json';
const CONFIG_FILE = 'sfdx-config.json';
let projectConfig;

/**
 * Class with util methods to work with a Salesforce Project
 */
class ProjectUtils {

    /**
     * Method to get the Salesforce project config file
     * @param {String} projectFolder Root project folder
     * 
     * @returns {ProjectConfig} Returns an object with the project config
     */
    static getProjectConfig(projectFolder) {
        projectFolder = Validator.validateFolderPath(projectFolder, 'projectFolder');
        const filePath = projectFolder + '/' + PROJECT_FILE;
        if (FileChecker.isExists(filePath)) {
            projectConfig = new ProjectConfig(JSON.parse(FileReader.readFileSync(filePath)));
            return projectConfig;
        }
        return undefined;
    }

    /**
     * Method to get the available version on a salesforce org
     * @param {String} instance Salesforce URL Instance
     * 
     * @returns {Promise<Object>} 
     */
    static getOrgAvailableVersions(instance) {
        return new Promise(async function (resolve) {
            let data = await HTTPConnection.getRequest(instance + '/services/data');
            resolve(JSON.parse(data));
        });
    }

    /**
     * Method to get the las available version from the org available versions
     * @param {Object} orgAvailableVersions Salesforce org available versions
     * 
     * @returns {Number} Returns the last available version
     */
    static getLastVersion(orgAvailableVersions) {
        let lastVersion = (orgAvailableVersions && orgAvailableVersions.length > 0) ? orgAvailableVersions[orgAvailableVersions.length - 1].version : undefined;
        return (lastVersion) ? parseInt(lastVersion) : lastVersion;
    }

    /**
     * Method to get the Auth Org Alias from a project
     * @param {String} projectFolder Root project folder
     * 
     * @returns {String} Returns the Org Alias
     */
    static getOrgAlias(projectFolder) {
        projectFolder = Validator.validateFolderPath(projectFolder, 'projectFolder');
        return JSON.parse(FileReader.readFileSync(projectFolder + '/.sfdx/' + CONFIG_FILE)).defaultusername;
    }

    /**
     * Method to get the Project Org Namespace
     * @param {String} projectFolder Root project folder
     * 
     * @returns Returns the Org Namespace
     */
    static getOrgNamespace(projectFolder) {
        return ProjectUtils.getProjectConfig(projectFolder).namespace;
    }

    /**
     * Method to get the apiVersion as String and correct format
     * @param {String | Number} apiVersion Api version to transform
     * 
     * @returns {String} Returns the Api Version like i.0 as String
     * 
     * @throws {WrongDatatypeException} If the api version is not a Number or String
     */
    static getApiAsString(apiVersion) {
        if (typeof apiVersion === 'string') {
            apiVersion = parseFloat(apiVersion);
            apiVersion = Math.trunc(apiVersion);
            return apiVersion + '.0';
        } else if (typeof apiVersion === 'number') {
            apiVersion = Math.trunc(apiVersion);
            return apiVersion + '.0';
        } else {
            throw new WrongDatatypeException('Wrong API Version Datatype. Expect string or number but get ' + typeof apiVersion + '. Value: ' + apiVersion);
        }
    }

    /**
     * Method to get the apiVersion as Number and correct format
     * @param {String | Number} apiVersion Api version to transform
     * 
     * @returns {Number} Returns the Api Version like i.0 as Number
     * 
     * @throws {WrongDatatypeException} If the api version is not a Number or String
     */
    static getApiAsNumber(apiVersion) {
        if (Utils.isString(apiVersion)) {
            apiVersion = parseFloat(apiVersion);
            return Math.trunc(apiVersion);
        } else if (Utils.isNumber(apiVersion)) {
            return Math.trunc(apiVersion);
        } else {
            throw new WrongDatatypeException('Wrong API Version Datatype. Expect string or number but get ' + typeof apiVersion + '. Value: ' + apiVersion);
        }
    }

}
module.exports = ProjectUtils;