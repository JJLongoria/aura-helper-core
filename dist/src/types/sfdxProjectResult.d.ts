/**
 * Class to represent a SFDX Create Project Result JSON
 */
export declare class SFDXProjectResult {
    outputDir: string;
    created: boolean;
    rawOutput?: string;
    /**
     *
     * @param {string | SFDXProjectResult} outputDirOrResult Output directory or Project Result instance
     * @param {boolean} [created] True if project are created, false in otherwise
     * @param {string} [rawOutput] Project Raw Output
     */
    constructor(outputDirOrResult: string | SFDXProjectResult, created?: boolean, rawOutput?: string);
}
