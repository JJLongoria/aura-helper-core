const Utils = require('../utils/utils');

class BulkStatus {

    constructor(idOrObject, jobId, state){
        if(Utils.isObject(idOrObject)){
            this.id = idOrObject.id;
            this.jobId = idOrObject.jobId;
            this.state = idOrObject.state;
            this.createdDate = idOrObject.createdDate;
            this.numberRecordsProcessed = idOrObject.numberRecordsProcessed;
            this.numberRecordsFailed = idOrObject.numberRecordsFailed;
            this.totalProcessingTime = idOrObject.totalProcessingTime;
            this.apiActiveProcessingTime = idOrObject.apiActiveProcessingTime;
            this.apexProcessingTime = idOrObject.apexProcessingTime;
        } else {
            this.id = idOrObject;
            this.jobId = jobId;
            this.state = state;
        }
    }
}
module.exports = BulkStatus;