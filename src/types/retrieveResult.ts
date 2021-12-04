import { RetrieveInboundFile } from "./retrieveInboundFile";
import { RetrievePackage } from "./retrievePackage";
import { RetrieveWarning } from "./retrieveWarning";

/**
 * Class to represent a Retrieve Result JSON response
 */
export class RetrieveResult {

    id: string;
    status?: string;
    done: boolean;
    success: boolean;
    inboundFiles?: RetrieveInboundFile[];
    packages?: RetrievePackage[];
    warnings?: RetrieveWarning[];

    /**
     * Create new Retrieve Result intance
     * @param {string | RetrieveResult} idOrResult Retrieve Id or Retrieve Result instance
     * @param {string} [status] 
     * @param {boolean} [done] 
     * @param {boolean} [success] 
     */
    constructor(idOrResult: string | RetrieveResult, status?: string, done?: boolean, success?: boolean) {
        if (idOrResult instanceof RetrieveResult) {
            this.id = idOrResult.id;
            this.status = idOrResult.status;
            this.done = idOrResult.done;
            this.success = idOrResult.success;
            this.inboundFiles = idOrResult.inboundFiles;
            this.packages = idOrResult.packages;
            this.warnings = idOrResult.warnings;
        } else {
            this.id = idOrResult;
            this.status = status;
            this.done = done || false;
            this.success = success || false;
            this.inboundFiles = undefined;
            this.packages = undefined;
            this.warnings = undefined;
        }
    }

    /**
     * Method to get the Retrieve inbound file data on specified index
     * @param {number} index Index to get the value 
     * @returns {RetrieveInboundFile | undefined} Returns the selected inbound file data
     */
    getInboundFile(index: number): RetrieveInboundFile | undefined {
        if (this.inboundFiles && this.inboundFiles.length > index) {
            return new RetrieveInboundFile(this.inboundFiles[index]);
        }
        return undefined;
    }

    /**
     * Method to get the Retrieve package data on specified index
     * @param {number} index Index to get the value 
     * @returns {RetrievePackage | undefined} Returns the selected package data
     */
    getPackage(index: number): RetrievePackage | undefined {
        if (this.packages && this.packages.length > index) {
            return new RetrievePackage(this.packages[index]);
        }
        return undefined;
    }

    /**
     * Method to get the Retrieve Warning data on specified index
     * @param {number} index Index to get the value 
     * @returns {RetrieveWarning | undefined} Returns the selected warning data
     */
    getWarning(index: number): RetrieveWarning | undefined {
        if (this.warnings && this.warnings.length > index) {
            return new RetrieveWarning(this.warnings[index]);
        }
        return undefined;
    }
}