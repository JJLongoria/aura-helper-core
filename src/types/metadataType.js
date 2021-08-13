const MetadataObject = require("./metadataObject");
const Utils = require('../utils/utils');

class MetadataType {
    constructor(nameOrObject, checked, path, suffix, childs) {
        if (Utils.isObject(nameOrObject)) {
            this.name = nameOrObject.name;
            this.checked = nameOrObject.checked;
            this.path = nameOrObject.path;
            this.suffix = nameOrObject.suffix;
            this.childs = (nameOrObject.childs !== undefined) ? nameOrObject.childs : {};
        } else {
            this.name = nameOrObject;
            this.checked = (checked !== undefined) ? checked : false;
            this.path = path;
            this.suffix = suffix;
            this.childs = (childs !== undefined) ? childs : {};
        }
    }

    addChild(childOrName, child) {
        if(Utils.isObject(childOrName) && !Utils.isNull(childOrName.name)){
            if (!this.childs[childOrName.name])
                this.childs[childOrName.name] = childOrName;
        } else if(Utils.isString(childOrName)){
            if (!this.childs[childOrName])
                this.childs[childOrName] = child;
        }
    }

    getChild(name) {
        if(this.childs[name])
            return new MetadataObject(this.childs[name]);
        return undefined;
    }

    getChilds(){
        return this.childs;
    }

    getChildKeys(){
        return (this.haveChilds()) ? Object.keys(this.childs) : [];
    }

    childsCount() {
        return this.childs && Object.keys(this.childs).length;
    }

    haveChilds() {
        return this.childs && Object.keys(this.childs).length > 0;
    }

    allChildsChecked() {
        let nChecked = 0;
        const keys = Object.keys(this.childs);
        keys.forEach((key) => {
            if (this.childs[key].checked)
                nChecked++;
        });
        return keys.length === nChecked;
    }
}
module.exports = MetadataType;
