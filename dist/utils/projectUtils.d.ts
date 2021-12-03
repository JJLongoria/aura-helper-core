import { OrgAvailableVersion } from "../types/orgAvailableVersion";
import { ProjectConfig } from "../types/projectConfig";
/**
 * Class with util methods to work with a Salesforce Project
 */
export declare class ProjectUtils {
    /**
     * Method to get the Salesforce project config file
     * @param {string} projectFolder Root project folder
     *
     * @returns {ProjectConfig | undefined} Returns an object with the project config or undefined if not exists config file
     */
    static getProjectConfig(projectFolder: string): ProjectConfig | undefined;
    /**
     * Method to get the available version on a salesforce org
     * @param {string} instance Salesforce URL Instance
     *
     * @returns {Promise<OrgAvailableVersion[]>}
     */
    static getOrgAvailableVersions(instance: string): Promise<OrgAvailableVersion[]>;
    /**
     * Method to get the las available version from the org available versions
     * @param {OrgAvailableVersion[]} orgAvailableVersions Salesforce org available versions
     *
     * @returns {number | undefined} Returns the last available version
     */
    static getLastVersion(orgAvailableVersions: OrgAvailableVersion[]): number | undefined;
    /**
     * Method to get the Auth Org Alias from a project
     * @param {string} projectFolder Root project folder
     *
     * @returns {string | undefined} Returns the Org Alias
     */
    static getOrgAlias(projectFolder: string): string | undefined;
    /**
     * Method to get the Project Org Namespace
     * @param {string} projectFolder Root project folder
     *
     * @returns Returns the Org Namespace
     */
    static getOrgNamespace(projectFolder: string): string;
    /**
     * Method to get the apiVersion as String and correct format
     * @param {string | number} apiVersion Api version to transform
     *
     * @returns {string} Returns the Api Version like i.0 as String
     *
     * @throws {WrongDatatypeException} If the api version is not a Number or String
     */
    static getApiAsString(apiVersion: string | number): string;
    /**
     * Method to get the apiVersion as Number and correct format
     * @param {string | number} apiVersion Api version to transform
     *
     * @returns {number} Returns the Api Version like i.0 as Number
     *
     * @throws {WrongDatatypeException} If the api version is not a Number or String
     */
    static getApiAsNumber(apiVersion: string | number): number;
}
