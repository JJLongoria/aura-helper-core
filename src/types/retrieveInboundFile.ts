/**
 * Class to represent a Retrieve Inbound File section on Retrieve Result JSON response
 */
export class RetrieveInboundFile {

    fullName: string;
    state?: string;
    type?: string;
    filePath?: string;

    /**
     * Create new Retrieve Inbound File instance
     * @param {string | { [key: string]: any }} nameOrInboundFile Inbound file name or Inbound File instance
     * @param {string} [type] file type
     * @param {string} [state] state value
     * @param {string} [filePath] file path value
     */
    constructor(nameOrInboundFile: string | { [key: string]: any }, type?: string, state?: string, filePath?: string){
        if(nameOrInboundFile && typeof nameOrInboundFile !== 'string'){
            this.fullName = nameOrInboundFile.fullName;
            this.state = nameOrInboundFile.state;
            this.type = nameOrInboundFile.type;
            this.filePath = nameOrInboundFile.filePath;
        } else {
            this.fullName = nameOrInboundFile;
            this.type = type;
            this.state = state;
            this.filePath = filePath;
        }
    }
}