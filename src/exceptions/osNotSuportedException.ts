/**
 * Class to handle and throw errors when execute the Framework with not supported operative system
 */
export class OSNotSupportedException extends Error {

    /**
     * Constructor to create the exception
     */
    constructor() {
        super('Operative System Not Supported');
        this.name = "OSNotSupportedException";
    }

}