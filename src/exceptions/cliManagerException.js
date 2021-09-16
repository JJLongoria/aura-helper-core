/**
 * Exception class to handle and throw errors when has errors with CLI Manager module
 */
 class CLIManagerException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "CLIManagerException";
    }
}
module.exports = CLIManagerException;