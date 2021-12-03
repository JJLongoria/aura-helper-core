/**
 * Class to represent a Retrieve Status JSON Response
 */
export declare class RetrieveStatus {
    id: string;
    status?: string;
    done: boolean;
    success: boolean;
    zipFilePath?: string;
    /**
     * Create new Retrieve Status instance
     * @param {string | RetrieveStatus} idOrStatus Retrieve Id or Retrieve Status instance
     * @param {string} [status] Retrieve Status
     * @param {boolean} [done] True if retrieve is done
     * @param {boolean} [success] True if retrieve is success
     * @param {string} [zipFilePath] Path to the retrieved zip file
     */
    constructor(idOrStatus: string | RetrieveStatus, status?: string, done?: boolean, success?: boolean, zipFilePath?: string);
}
