import { ProjectConfigPackageDirectory } from "./projectConfigpackageDirectory";
/**
 * Represent a Salesforce Project Config
 */
export declare class ProjectConfig {
    namespace: string;
    sfdcLoginUrl: string;
    sourceApiVersion: string;
    packageDirectories: ProjectConfigPackageDirectory[];
    /**
     * Create new Project Config
     * @param {string | ProjectConfig} namespaceOrProjectConfig Namespace or ProjectConfig instance
     * @param {string} sfdcLoginUrl Login URL (https://login.salesforce.com by default)
     * @param {string} sourceApiVersion Source API Verion (50.0 by default)
     * @param {ProjectConfigPackageDirectory[]} packageDirectories List of PackageDirectories
     */
    constructor(namespaceOrProjectConfig: string | ProjectConfig, sfdcLoginUrl?: string, sourceApiVersion?: string, packageDirectories?: ProjectConfigPackageDirectory[]);
}
