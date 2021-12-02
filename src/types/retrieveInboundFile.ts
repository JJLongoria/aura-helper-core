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
     * @param nameOrInboundFile Inbound file name or Inbound File instance
     * @param type file type
     * @param state state value
     * @param filePath file path value
     */
    constructor(nameOrInboundFile: string | RetrieveInboundFile, type?: string, state?: string, filePath?: string){
        if(nameOrInboundFile instanceof RetrieveInboundFile){
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