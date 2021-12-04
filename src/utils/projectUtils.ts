import { WrongDatatypeException } from "../exceptions";
import { FileChecker, FileReader } from "../fileSystem";
import { OrgAvailableVersion } from "../types/orgAvailableVersion";
import { ProjectConfig } from "../types/projectConfig";
import { HTTPConnection } from "./httpConnection";
import { Validator } from "./validator";

const PROJECT_FILE = 'sfdx-project.json';
const CONFIG_FILE = 'sfdx-config.json';

/**
 * Class with util methods to work with a Salesforce Project
 */
export class ProjectUtils {

    /**
     * Method to get the Salesforce project config file
     * @param {string} projectFolder Root project folder
     * 
     * @returns {ProjectConfig | undefined} Returns an object with the project config or undefined if not exists config file
     */
    static getProjectConfig(projectFolder: string): ProjectConfig | undefined {
        projectFolder = Validator.validateFolderPath(projectFolder, 'projectFolder');
        const filePath = projectFolder + '/' + PROJECT_FILE;
        if (FileChecker.isExists(filePath)) {
            return new ProjectConfig(JSON.parse(FileReader.readFileSync(filePath)));
        }
        return undefined;
    }

    /**
     * Method to get the available version on a salesforce org
     * @param {string} instance Salesforce URL Instance
     * 
     * @returns {Promise<OrgAvailableVersion[]>} 
     */
    static getOrgAvailableVersions(instance: string): Promise<OrgAvailableVersion[]> {
        return new Promise<OrgAvailableVersion[]>(async function (resolve) {
            let data = await HTTPConnection.getRequest(instance + '/services/data');
            resolve(JSON.parse(data));
        });
    }

    /**
     * Method to get the las available version from the org available versions
     * @param {OrgAvailableVersion[]} orgAvailableVersions Salesforce org available versions
     * 
     * @returns {number | undefined} Returns the last available version
     */
    static getLastVersion(orgAvailableVersions: OrgAvailableVersion[]): number | undefined {
        let lastVersion = (orgAvailableVersions && orgAvailableVersions.length > 0) ? orgAvailableVersions[orgAvailableVersions.length - 1].version : undefined;
        return (lastVersion !== undefined) ? parseInt(lastVersion) : lastVersion;
    }

    /**
     * Method to get the Auth Org Alias from a project
     * @param {string} projectFolder Root project folder
     * 
     * @returns {string | undefined} Returns the Org Alias
     */
    static getOrgAlias(projectFolder: string): string | undefined {
        projectFolder = Validator.validateFolderPath(projectFolder, 'projectFolder');
        if (FileChecker.isExists(projectFolder + '/.sfdx/' + CONFIG_FILE)) {
            return JSON.parse(FileReader.readFileSync(projectFolder + '/.sfdx/' + CONFIG_FILE)).defaultusername;
        }
        return undefined;
    }

    /**
     * Method to get the Project Org Namespace
     * @param {string} projectFolder Root project folder
     * 
     * @returns Returns the Org Namespace
     */
    static getOrgNamespace(projectFolder: string): string {
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
    static getApiAsString(apiVersion: string | number): string {
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
     * @param {string | number} apiVersion Api version to transform
     * 
     * @returns {number} Returns the Api Version like i.0 as Number
     * 
     * @throws {WrongDatatypeException} If the api version is not a Number or String
     */
    static getApiAsNumber(apiVersion: string | number): number {
        if (typeof apiVersion === 'string') {
            apiVersion = parseFloat(apiVersion);
            return Math.trunc(apiVersion);
        } else if (typeof apiVersion === 'number') {
            return Math.trunc(apiVersion);
        } else {
            throw new WrongDatatypeException('Wrong API Version Datatype. Expect string or number but get ' + typeof apiVersion + '. Value: ' + apiVersion);
        }
    }

}