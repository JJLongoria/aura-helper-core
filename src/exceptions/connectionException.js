/**
 * Exception class to handle and throw errors when has errors with Connector module
 */
 class ConnectionException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "ConnectionException";
    }
}
module.exports = ConnectionException;