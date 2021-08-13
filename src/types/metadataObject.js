const MetadataItem = require("./metadataItem");
const Utils = require('../utils/utils');

class MetadataObject {
    constructor(nameOrObject, checked, path, childs) {
        if (Utils.isObject(nameOrObject)) {
            this.name = nameOrObject.name;
            this.checked = nameOrObject.checked;
            this.path = nameOrObject.path;
            this.childs = (nameOrObject.childs !== undefined) ? nameOrObject.childs : {};
        } else {
            this.name = nameOrObject;
            this.checked = (checked !== undefined) ? checked : false;
            this.path = path;
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
            return new MetadataItem(this.childs[name]);
        return undefined;
    }

    getChilds(){
        return this.childs;
    }

    getChildKeys(){
        return (this.haveChilds()) ? Object.keys(this.childs) : [];
    }

    childsCount() {
        return Object.keys(this.childs).length;
    }

    haveChilds() {
        return Object.keys(this.childs).length > 0;
    }

    allChildsChecked() {
        let nChecked = 0;
        const keys =  Object.keys(this.childs);
        keys.forEach((key) => {
            if (this.childs[key].checked)
                nChecked++;
        });
        return keys.length === nChecked;
    }
}
module.exports = MetadataObject;