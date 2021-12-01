/**
 * Exception class to handle and throw errors when has errors with CLI Manager module
 */
 export class CLIManagerException extends Error {

    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message: string) {
        super(message);
        this.name = "CLIManagerException";
    }
}