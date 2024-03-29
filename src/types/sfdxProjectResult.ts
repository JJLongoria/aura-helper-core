/**
 * Class to represent a SFDX Create Project Result JSON
 */
export class SFDXProjectResult {

    outputDir: string;
    created: string[];
    rawOutput?: string;

    /**
     * 
     * @param {string | { [key: string]: any }} outputDirOrResult Output directory or Project Result instance
     * @param {string[]} [created] List with created files
     * @param {string} [rawOutput] Project Raw Output
     */
    constructor(outputDirOrResult: string | { [key: string]: any }, created?: string[], rawOutput?: string) {
        if (outputDirOrResult && typeof outputDirOrResult !== 'string') {
            this.outputDir = outputDirOrResult.outputDir;
            this.created = outputDirOrResult.created;
            this.rawOutput = outputDirOrResult.rawOutput;
        } else {
            this.outputDir = outputDirOrResult;
            this.created = created || [];
            this.rawOutput = rawOutput;
        }
    }
}