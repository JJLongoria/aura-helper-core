const MetadataItem = require("./metadataItem");

class MetadataObject {
    constructor(nameOrObject, checked, path, childs) {
        if (typeof nameOrObject === 'object') {
            this.name = nameOrObject.name;
            this.checked = nameOrObject.checked;
            this.path = nameOrObject.path;
            this.childs = nameOrObject.childs;
        } else {
            this.name = nameOrObject;
            this.checked = (checked !== undefined) ? checked : false;
            this.path = path;
            this.childs = (childs !== undefined) ? childs : {};
        }
    }

    addChild(name, child) {
        if (!this.childs[name])
            this.childs[name] = child;
    }

    getChild(name) {
        return new MetadataItem(this.childs[name]);
    }

    childsCount(){
        return Object.keys(this.childs).length;
    }

    haveChilds(){
        return Object.keys(this.childs).length > 0;
    }
}
module.exports = MetadataObject;