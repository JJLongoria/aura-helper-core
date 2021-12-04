import { ProjectConfigPackageDirectory } from "./projectConfigpackageDirectory";

/**
 * Represent a Salesforce Project Config
 */
export class ProjectConfig {

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
    constructor(namespaceOrProjectConfig: string | ProjectConfig | any, sfdcLoginUrl?: string, sourceApiVersion?: string, packageDirectories?: ProjectConfigPackageDirectory[]) {
        if (namespaceOrProjectConfig instanceof ProjectConfig || namespaceOrProjectConfig instanceof Object) {
            this.namespace = namespaceOrProjectConfig.namespace;
            this.sfdcLoginUrl = namespaceOrProjectConfig.sfdcLoginUrl;
            this.sourceApiVersion = namespaceOrProjectConfig.sourceApiVersion;
            this.packageDirectories = namespaceOrProjectConfig.packageDirectories;
        } else {
            this.namespace = namespaceOrProjectConfig;
            this.sfdcLoginUrl = sfdcLoginUrl || 'https://login.salesforce.com';
            this.sourceApiVersion = sourceApiVersion || "50.0";
            this.packageDirectories = packageDirectories || [{ path: "force-app", default: true }];
        }
    }
}