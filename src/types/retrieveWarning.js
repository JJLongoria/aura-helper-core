class RetrieveWarning {

    constructor(fileNameOrObject, problem){
        if(typeof fileNameOrObject === 'object'){
            this.fileName = fileNameOrObject.fileName;
            this.problem = fileNameOrObject.problem;
        } else {
            this.fileName = fileNameOrObject;
            this.problem = problem;
        }
    }
}
module.exports = RetrieveWarning;