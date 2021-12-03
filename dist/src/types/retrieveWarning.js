"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveWarning = void 0;
/**
 * Class to represent a Retrieve Warning section on Retriieve Result JSON Response
 */
class RetrieveWarning {
    /**
     * Create new Retrieve Warning instance
     * @param {string | RetrieveWarning} fileNameOrWarning Retrieve file name or Warning instance
     * @param {string} [problem] Problem description
     */
    constructor(fileNameOrWarning, problem) {
        if (fileNameOrWarning instanceof RetrieveWarning) {
            this.fileName = fileNameOrWarning.fileName;
            this.problem = fileNameOrWarning.problem;
        }
        else {
            this.fileName = fileNameOrWarning;
            this.problem = problem;
        }
    }
}
exports.RetrieveWarning = RetrieveWarning;
//# sourceMappingURL=retrieveWarning.js.map