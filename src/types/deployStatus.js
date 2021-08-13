const Utils = require('../utils/utils');

class DeployStatus {

    constructor(objectOrId, status, done, success, zipFilePath){
        if(Utils.isObject(objectOrId)){
            this.id = objectOrId.id;
            this.status = objectOrId.status;
            this.done = objectOrId.done;
            this.success = objectOrId.success;
            this.zipFilePath = objectOrId.zipFilePath;
            this.checkOnly = objectOrId.checkOnly;
            this.numberComponentErrors = objectOrId.numberComponentErrors;
            this.numberComponentsDeployed = objectOrId.numberComponentsDeployed;
            this.numberComponentsTotal = objectOrId.numberComponentsTotal;
            this.numberTestErrors = objectOrId.numberTestErrors;
            this.numberTestsCompleted = objectOrId.numberTestsCompleted;
            this.numberTestsTotal = objectOrId.numberTestsTotal;
            this.runTestsEnabled = objectOrId.runTestsEnabled;
        } else {
            this.id = objectOrId;
            this.status = status;
            this.done = done;
            this.success = success;
            this.zipFilePath = zipFilePath;
        }
    }

}
module.exports = DeployStatus;