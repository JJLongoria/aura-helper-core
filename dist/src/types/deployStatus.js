"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployStatus = void 0;
/**
 * Class to represent a Deplot Status JSON Response
 */
class DeployStatus {
    /**
     * Create new Deploy Status instance
     * @param {string | DeployStatus} idOrDeployStatus Deploy Id or Deploy Status instance
     * @param {string} [status] Deploy status value
     * @param {boolean} [done] true if deploy is done
     * @param {boolean} [success] true if deploy is success
     * @param {string} [zipFilePath] deployed zip file path
     */
    constructor(idOrDeployStatus, status, done, success, zipFilePath) {
        if (idOrDeployStatus instanceof DeployStatus) {
            this.id = idOrDeployStatus.id;
            this.status = idOrDeployStatus.status;
            this.done = idOrDeployStatus.done;
            this.success = idOrDeployStatus.success;
            this.zipFilePath = idOrDeployStatus.zipFilePath;
            this.checkOnly = idOrDeployStatus.checkOnly;
            this.numberComponentErrors = idOrDeployStatus.numberComponentErrors;
            this.numberComponentsDeployed = idOrDeployStatus.numberComponentsDeployed;
            this.numberComponentsTotal = idOrDeployStatus.numberComponentsTotal;
            this.numberTestErrors = idOrDeployStatus.numberTestErrors;
            this.numberTestsCompleted = idOrDeployStatus.numberTestsCompleted;
            this.numberTestsTotal = idOrDeployStatus.numberTestsTotal;
            this.runTestsEnabled = idOrDeployStatus.runTestsEnabled;
        }
        else {
            this.id = idOrDeployStatus;
            this.status = status;
            this.done = done === undefined ? false : done;
            this.success = success === undefined ? false : success;
            this.zipFilePath = zipFilePath;
            this.checkOnly = false;
            this.runTestsEnabled = false;
        }
    }
}
exports.DeployStatus = DeployStatus;
//# sourceMappingURL=deployStatus.js.map