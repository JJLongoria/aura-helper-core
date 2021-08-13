const Utils = require('../utils/utils');

class GitDiff {

    constructor(pathOrObject, mode, removeChanges, addChanges) {
        if (Utils.isObject(pathOrObject)) {
            this.path = pathOrObject.path;
            this.mode = pathOrObject.mode;
            this.removeChanges = (pathOrObject.removeChanges !== undefined) ? pathOrObject.removeChanges : [];
            this.addChanges = (pathOrObject.addChanges !== undefined) ? pathOrObject.addChanges : [];
        } else {
            this.path = pathOrObject;
            this.mode = mode;
            this.removeChanges = (removeChanges !== undefined) ? removeChanges : [];
            this.addChanges = (addChanges !== undefined) ? addChanges : [];
        }
        if (!this.mode)
            this.mode = 'edit file';
    }
}
module.exports = GitDiff;