"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveStatus = void 0;
/**
 * Class to represent a Retrieve Status JSON Response
 */
class RetrieveStatus {
    /**
     * Create new Retrieve Status instance
     * @param {string | RetrieveStatus} idOrStatus Retrieve Id or Retrieve Status instance
     * @param {string} [status] Retrieve Status
     * @param {boolean} [done] True if retrieve is done
     * @param {boolean} [success] True if retrieve is success
     * @param {string} [zipFilePath] Path to the retrieved zip file
     */
    constructor(idOrStatus, status, done, success, zipFilePath) {
        if (idOrStatus instanceof RetrieveStatus) {
            this.id = idOrStatus.id;
            this.status = idOrStatus.status;
            this.done = idOrStatus.done;
            this.success = idOrStatus.success;
            this.zipFilePath = idOrStatus.zipFilePath;
        }
        else {
            this.id = idOrStatus;
            this.status = status;
            this.done = done || false;
            this.success = success || false;
            this.zipFilePath = zipFilePath;
        }
    }
}
exports.RetrieveStatus = RetrieveStatus;
//# sourceMappingURL=retrieveStatus.js.map