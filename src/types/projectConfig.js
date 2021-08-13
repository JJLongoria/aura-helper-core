const Utils = require('../utils/utils');

class ProjectConfig {

    constructor(namespaceOrObject, sfdcLoginUrl, sourceApiVersion, packageDirectories){
        if (Utils.isObject(namespaceOrObject)) {
            this.namespace = namespaceOrObject.namespace;
            this.sfdcLoginUrl = namespaceOrObject.sfdcLoginUrl;
            this.sourceApiVersion = namespaceOrObject.sourceApiVersion;
            this.packageDirectories = namespaceOrObject.packageDirectories;
        } else {
            this.namespace = namespaceOrObject;
            this.sfdcLoginUrl = sfdcLoginUrl;
            this.sourceApiVersion = sourceApiVersion;
            this.packageDirectories = packageDirectories;
        }
    }
}

module.exports = ProjectConfig;