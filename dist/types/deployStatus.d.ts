/**
 * Class to represent a Deplot Status JSON Response
 */
export declare class DeployStatus {
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
    constructor(idOrDeployStatus: string | DeployStatus, status?: string, done?: boolean, success?: boolean, zipFilePath?: string);
}
