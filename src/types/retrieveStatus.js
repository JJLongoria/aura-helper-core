class RetrieveStatus {

    constructor(objectOrId, status, done, success, zipFilePath){
        if(typeof objectOrId === 'object'){
            this.id = objectOrId.id;
            this.status = objectOrId.status;
            this.done = objectOrId.done;
            this.success = objectOrId.success;
            this.zipFilePath = objectOrId.zipFilePath;
        } else {
            this.id = objectOrId;
            this.status = status;
            this.done = done;
            this.success = success;
            this.zipFilePath = zipFilePath;
        }
    }

}
module.exports = RetrieveStatus;