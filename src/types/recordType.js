const Utils = require('../utils/utils');


class RecordType {
    constructor(nameOrObject, name, def, isMaster) {
        if (Utils.isObject(nameOrObject)) {
            this.developerName = nameOrObject.developerName;
            this.name = nameOrObject.name;
            this.default = nameOrObject.def;
            this.master = nameOrObject.master;
        } else {
            this.developerName = nameOrObject;
            this.name = name;
            this.default = def;
            this.master = isMaster;
        }
    }

    setDeveloperName(devName){
        this.developerName = devName;
    }

    setName(name){
        this.name = name;
    }

    setDefault(def){
        this.default = (def !== undefined) ? def : false;
    }
}
module.exports = RecordType;