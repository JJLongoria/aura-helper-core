class SFDXProjectResult {

    constructor(outputDirOrObject, created, rawOutput){
        if(typeof outputDirOrObject === 'object'){
            this.outputDir = outputDirOrObject.outputDir;
            this.created = outputDirOrObject.created;
            this.rawOutput = outputDirOrObject.rawOutput;
        } else {
            this.outputDir = outputDirOrObject;
            this.created = created;
            this.rawOutput = rawOutput;
        }
    }
}
module.exports = SFDXProjectResult;