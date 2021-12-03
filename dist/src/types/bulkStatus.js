"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkStatus = void 0;
/**
 * Class to represent a Salesforce Bulk operation status
 */
class BulkStatus {
    /**
     * Create new Bulk Status instance
     * @param {string | BulkStatus} idOrBulkStatus Bulk Job Id or Bulk Status instance
     * @param {string} [jobId] Job Id
     * @param {string} [state] Bulk state
     */
    constructor(idOrBulkStatus, jobId, state) {
        if (idOrBulkStatus instanceof BulkStatus) {
            this.id = idOrBulkStatus.id;
            this.jobId = idOrBulkStatus.jobId;
            this.state = idOrBulkStatus.state;
            this.createdDate = idOrBulkStatus.createdDate;
            this.numberRecordsProcessed = idOrBulkStatus.numberRecordsProcessed;
            this.numberRecordsFailed = idOrBulkStatus.numberRecordsFailed;
            this.totalProcessingTime = idOrBulkStatus.totalProcessingTime;
            this.apiActiveProcessingTime = idOrBulkStatus.apiActiveProcessingTime;
            this.apexProcessingTime = idOrBulkStatus.apexProcessingTime;
        }
        else {
            this.id = idOrBulkStatus;
            this.jobId = jobId;
            this.state = state;
        }
    }
}
exports.BulkStatus = BulkStatus;
//# sourceMappingURL=bulkStatus.js.map