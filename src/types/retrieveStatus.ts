/**
 * Class to represent a Retrieve Status JSON Response
 */
export class RetrieveStatus {

    id: string;
    status?: string;
    done: boolean;
    success: boolean;
    zipFilePath?: string;

    /**
     * Create new Retrieve Status instance
     * @param {string | { [key: string]: any }} idOrStatus Retrieve Id or Retrieve Status instance
     * @param {string} [status] Retrieve Status
     * @param {boolean} [done] True if retrieve is done
     * @param {boolean} [success] True if retrieve is success
     * @param {string} [zipFilePath] Path to the retrieved zip file
     */
    constructor(idOrStatus: string | { [key: string]: any }, status?: string, done?: boolean, success?: boolean, zipFilePath?: string) {
        if (idOrStatus && typeof idOrStatus !== 'string') {
            this.id = idOrStatus.id;
            this.status = idOrStatus.status;
            this.done = (idOrStatus.done === undefined) ? false : idOrStatus.done;
            this.success = (idOrStatus.done === undefined) ? false : idOrStatus.done;
            this.zipFilePath = idOrStatus.zipFilePath;
        } else {
            this.id = idOrStatus;
            this.status = status;
            this.done = done || false;
            this.success = success || false;
            this.zipFilePath = zipFilePath;
        }
    }

}