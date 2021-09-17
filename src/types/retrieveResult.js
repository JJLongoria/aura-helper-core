const RetrieveInboundFile = require('./retrieveInboundFile');
const RetrievePackage = require('./retrievePackage');
const RetrieveWarning = require('./retrieveWarning');
const Utils = require('../utils/utils');

class RetrieveResult {

    constructor(objectOrId, status, done, success){
        if(Utils.isObject(objectOrId)){
            this.id = objectOrId.id;
            this.status = objectOrId.status;
            this.done = objectOrId.done;
            this.success = objectOrId.success;
            this.inboundFiles = objectOrId.inboundFiles;
            this.packages = objectOrId.packages;
            this.warnings = objectOrId.warnings;
        } else {
            this.id = objectOrId;
            this.status = status;
            this.done = done;
            this.success = success;
            this.inboundFiles = undefined;
            this.packages = undefined;
            this.warnings = undefined;
        }
    }

    getInboundFile(index){
        return new RetrieveInboundFile(this.inboundFiles[index]);
    }

    getPackage(index){
        return new RetrievePackage(this.packages[index]);
    }

    getWarning(index){
        return new RetrieveWarning(this.warnings[index]);
    }
}
module.exports = RetrieveResult;