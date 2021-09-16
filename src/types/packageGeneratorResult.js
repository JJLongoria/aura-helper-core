const Utils = require('../utils/utils');

class PackageGeneratorResult {
    constructor(packageOrObject, destructiveChanges, destructiveChangesPost) {
        if(Utils.isObject(packageOrObject)){
            this.package = packageOrObject.package;
            this.destructiveChanges = packageOrObject.destructiveChanges;
            this.destructiveChangesPost = packageOrObject.destructiveChangesPost;
        } else {
            this.package = packageOrObject;
            this.destructiveChanges = destructiveChanges;
            this.destructiveChangesPost = destructiveChangesPost;
        }
    }
}
module.exports = PackageGeneratorResult;