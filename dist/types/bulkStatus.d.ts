/**
 * Class to represent a Salesforce Bulk operation status
 */
export declare class BulkStatus {
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
     * @param {string | BulkStatus} idOrBulkStatus Bulk Job Id or Bulk Status instance
     * @param {string} [jobId] Job Id
     * @param {string} [state] Bulk state
     */
    constructor(idOrBulkStatus: string | BulkStatus, jobId?: string, state?: string);
}
