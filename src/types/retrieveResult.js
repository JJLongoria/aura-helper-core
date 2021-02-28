const RetrieveInboundFile = require('./retrieveInboundFile');
const RetrievePackage = require('./retrievePackage');
const RetrieveWarning = require('./retrieveWarning');

class RetrieveResult {

    constructor(inboundFilesOrObject, packages, warnings){
        if(typeof inboundFilesOrObject === 'object' && !Array.isArray(inboundFilesOrObject)){
            this.inboundFiles = inboundFilesOrObject.inboundFiles;
            this.packages = inboundFilesOrObject.packages;
            this.warnings = inboundFilesOrObject.warnings;
        } else {
            this.inboundFiles = inboundFilesOrObject;
            this.packages = packages;
            this.warnings = warnings;
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