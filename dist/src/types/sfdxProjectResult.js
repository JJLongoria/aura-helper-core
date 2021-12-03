"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SFDXProjectResult = void 0;
/**
 * Class to represent a SFDX Create Project Result JSON
 */
class SFDXProjectResult {
    /**
     *
     * @param {string | SFDXProjectResult} outputDirOrResult Output directory or Project Result instance
     * @param {boolean} [created] True if project are created, false in otherwise
     * @param {string} [rawOutput] Project Raw Output
     */
    constructor(outputDirOrResult, created, rawOutput) {
        if (outputDirOrResult instanceof SFDXProjectResult) {
            this.outputDir = outputDirOrResult.outputDir;
            this.created = outputDirOrResult.created;
            this.rawOutput = outputDirOrResult.rawOutput;
        }
        else {
            this.outputDir = outputDirOrResult;
            this.created = (created !== undefined) ? created : false;
            this.rawOutput = rawOutput;
        }
    }
}
exports.SFDXProjectResult = SFDXProjectResult;
//# sourceMappingURL=sfdxProjectResult.js.map