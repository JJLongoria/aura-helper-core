/**
 * Exception class to handle and throw errors when has errors with Connector module
 */
 export class ConnectionException extends Error {

    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message: string) {
        super(message);
        this.name = "ConnectionException";
    }
}