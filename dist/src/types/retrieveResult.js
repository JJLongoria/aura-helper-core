"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveResult = void 0;
const retrieveInboundFile_1 = require("./retrieveInboundFile");
const retrievePackage_1 = require("./retrievePackage");
const retrieveWarning_1 = require("./retrieveWarning");
/**
 * Class to represent a Retrieve Result JSON response
 */
class RetrieveResult {
    /**
     * Create new Retrieve Result intance
     * @param {string | RetrieveResult} idOrResult Retrieve Id or Retrieve Result instance
     * @param {string} [status]
     * @param {boolean} [done]
     * @param {boolean} [success]
     */
    constructor(idOrResult, status, done, success) {
        if (idOrResult instanceof RetrieveResult) {
            this.id = idOrResult.id;
            this.status = idOrResult.status;
            this.done = idOrResult.done;
            this.success = idOrResult.success;
            this.inboundFiles = idOrResult.inboundFiles;
            this.packages = idOrResult.packages;
            this.warnings = idOrResult.warnings;
        }
        else {
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
    getInboundFile(index) {
        if (this.inboundFiles && this.inboundFiles.length < index) {
            return new retrieveInboundFile_1.RetrieveInboundFile(this.inboundFiles[index]);
        }
        return undefined;
    }
    /**
     * Method to get the Retrieve package data on specified index
     * @param {number} index Index to get the value
     * @returns {RetrievePackage | undefined} Returns the selected package data
     */
    getPackage(index) {
        if (this.packages && this.packages.length < index) {
            return new retrievePackage_1.RetrievePackage(this.packages[index]);
        }
        return undefined;
    }
    /**
     * Method to get the Retrieve Warning data on specified index
     * @param {number} index Index to get the value
     * @returns {RetrieveWarning | undefined} Returns the selected warning data
     */
    getWarning(index) {
        if (this.warnings && this.warnings.length < index) {
            return new retrieveWarning_1.RetrieveWarning(this.warnings[index]);
        }
        return undefined;
    }
}
exports.RetrieveResult = RetrieveResult;
//# sourceMappingURL=retrieveResult.js.map