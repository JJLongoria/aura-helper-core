/**
 * Class to represent a Retrieve Inbound File section on Retrieve Result JSON response
 */
export declare class RetrieveInboundFile {
    fullName: string;
    state?: string;
    type?: string;
    filePath?: string;
    /**
     * Create new Retrieve Inbound File instance
     * @param {string | RetrieveInboundFile} nameOrInboundFile Inbound file name or Inbound File instance
     * @param {string} [type] file type
     * @param {string} [state] state value
     * @param {string} [filePath] file path value
     */
    constructor(nameOrInboundFile: string | RetrieveInboundFile, type?: string, state?: string, filePath?: string);
}
