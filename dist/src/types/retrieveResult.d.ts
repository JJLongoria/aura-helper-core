import { RetrieveInboundFile } from "./retrieveInboundFile";
import { RetrievePackage } from "./retrievePackage";
import { RetrieveWarning } from "./retrieveWarning";
/**
 * Class to represent a Retrieve Result JSON response
 */
export declare class RetrieveResult {
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
    constructor(idOrResult: string | RetrieveResult, status?: string, done?: boolean, success?: boolean);
    /**
     * Method to get the Retrieve inbound file data on specified index
     * @param {number} index Index to get the value
     * @returns {RetrieveInboundFile | undefined} Returns the selected inbound file data
     */
    getInboundFile(index: number): RetrieveInboundFile | undefined;
    /**
     * Method to get the Retrieve package data on specified index
     * @param {number} index Index to get the value
     * @returns {RetrievePackage | undefined} Returns the selected package data
     */
    getPackage(index: number): RetrievePackage | undefined;
    /**
     * Method to get the Retrieve Warning data on specified index
     * @param {number} index Index to get the value
     * @returns {RetrieveWarning | undefined} Returns the selected warning data
     */
    getWarning(index: number): RetrieveWarning | undefined;
}
