const Utils = require('../utils/utils');

class RetrieveWarning {

    constructor(fileNameOrObject, problem){
        if(Utils.isObject(fileNameOrObject)){
            this.fileName = fileNameOrObject.fileName;
            this.problem = fileNameOrObject.problem;
        } else {
            this.fileName = fileNameOrObject;
            this.problem = problem;
        }
    }
}
module.exports = RetrieveWarning;