const MetadataObject = require("./metadataObject");

class MetadataType {
    constructor(nameOrObject, checked, path, suffix, childs) {
        if (typeof nameOrObject === 'object') {
            this.name = nameOrObject.name;
            this.checked = nameOrObject.checked;
            this.path = nameOrObject.path;
            this.suffix = nameOrObject.suffix;
            this.childs = nameOrObject.childs;
        } else {
            this.name = nameOrObject;
            this.checked = (checked !== undefined) ? checked : false;
            this.path = path;
            this.suffix = suffix;
            this.childs = (childs !== undefined) ? childs : {};
        }
    }

    addChild(name, child) {
        if (!this.childs[name])
            this.childs[name] = child;
    }

    getChild(name) {
        return new MetadataObject(this.childs[name]);
    }

    childsCount(){
        return Object.keys(this.childs).length;
    }

    haveChilds(){
        return Object.keys(this.childs).length > 0;
    }
}
module.exports = MetadataType;