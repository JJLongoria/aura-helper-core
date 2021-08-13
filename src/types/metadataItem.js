const Utils = require('../utils/utils');

class MetadataItem {
    constructor(nameOrObject, checked, path){
        if (Utils.isObject(nameOrObject)) {
            this.name = nameOrObject.name;
            this.checked = nameOrObject.checked;
            this.path = nameOrObject.path;
        } else {
            this.name = nameOrObject;
            this.checked = (checked !== undefined) ? checked : false;
            this.path = path;
        }
    }
}
module.exports = MetadataItem;