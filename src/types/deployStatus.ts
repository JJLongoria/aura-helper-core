/**
 * Class to represent a Deplot Status JSON Response
 */
export class DeployStatus {

    id: string;
    status?: string;
    done: boolean;
    success: boolean;
    zipFilePath?: string;
    checkOnly: boolean;
    numberComponentErrors?: number;
    numberComponentsDeployed?: number;
    numberComponentsTotal?: number;
    numberTestErrors?: number;
    numberTestsCompleted?: number;
    numberTestsTotal?: number;
    runTestsEnabled: boolean;

    /**
     * Create new Deploy Status instance
     * @param {string | DeployStatus} idOrDeployStatus Deploy Id or Deploy Status instance
     * @param {string} [status] Deploy status value
     * @param {boolean} [done] true if deploy is done
     * @param {boolean} [success] true if deploy is success
     * @param {string} [zipFilePath] deployed zip file path 
     */
    constructor(idOrDeployStatus: string | DeployStatus, status?: string, done?: boolean, success?: boolean, zipFilePath?: string){
        if(idOrDeployStatus instanceof DeployStatus){
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
        } else {
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