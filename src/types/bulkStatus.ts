/**
 * Class to represent a Salesforce Bulk operation status 
 */
export class BulkStatus {

    id: string;
    jobId?: string;
    state?: string;
    createdDate?: string;
    numberRecordsProcessed?: number;
    numberRecordsFailed?: number;
    totalProcessingTime?: number;
    apiActiveProcessingTime?: number;
    apexProcessingTime?: number;

    /**
     * Create new Bulk Status instance
     * @param {string | { [key: string]: any }} idOrBulkStatus Bulk Job Id or Bulk Status instance
     * @param {string} [jobId] Job Id
     * @param {string} [state] Bulk state
     */
    constructor(idOrBulkStatus: string | { [key: string]: any }, jobId?: string, state?: string){
        if(idOrBulkStatus && typeof idOrBulkStatus !== 'string'){
            this.id = idOrBulkStatus.id;
            this.jobId = idOrBulkStatus.jobId;
            this.state = idOrBulkStatus.state;
            this.createdDate = idOrBulkStatus.createdDate;
            this.numberRecordsProcessed = idOrBulkStatus.numberRecordsProcessed;
            this.numberRecordsFailed = idOrBulkStatus.numberRecordsFailed;
            this.totalProcessingTime = idOrBulkStatus.totalProcessingTime;
            this.apiActiveProcessingTime = idOrBulkStatus.apiActiveProcessingTime;
            this.apexProcessingTime = idOrBulkStatus.apexProcessingTime;
        } else {
            this.id = idOrBulkStatus;
            this.jobId = jobId;
            this.state = state;
        }
    }
}