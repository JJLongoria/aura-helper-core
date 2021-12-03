"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectConfig = void 0;
/**
 * Represent a Salesforce Project Config
 */
class ProjectConfig {
    /**
     * Create new Project Config
     * @param {string | ProjectConfig} namespaceOrProjectConfig Namespace or ProjectConfig instance
     * @param {string} sfdcLoginUrl Login URL (https://login.salesforce.com by default)
     * @param {string} sourceApiVersion Source API Verion (50.0 by default)
     * @param {ProjectConfigPackageDirectory[]} packageDirectories List of PackageDirectories
     */
    constructor(namespaceOrProjectConfig, sfdcLoginUrl, sourceApiVersion, packageDirectories) {
        if (namespaceOrProjectConfig instanceof ProjectConfig) {
            this.namespace = namespaceOrProjectConfig.namespace;
            this.sfdcLoginUrl = namespaceOrProjectConfig.sfdcLoginUrl;
            this.sourceApiVersion = namespaceOrProjectConfig.sourceApiVersion;
            this.packageDirectories = namespaceOrProjectConfig.packageDirectories;
        }
        else {
            this.namespace = namespaceOrProjectConfig;
            this.sfdcLoginUrl = sfdcLoginUrl || 'https://login.salesforce.com';
            this.sourceApiVersion = sourceApiVersion || "50.0";
            this.packageDirectories = packageDirectories || [{ path: "force-app", default: true }];
        }
    }
}
exports.ProjectConfig = ProjectConfig;
//# sourceMappingURL=projectConfig.js.map