const Utils = require('../utils/utils');

class RetrievePackage {

    constructor(nameOrObject){
        if(Utils.isObject(nameOrObject)){
            this.name = nameOrObject.name;
        } else {
            this.name = nameOrObject;
        }
    }
}
module.exports = RetrievePackage;