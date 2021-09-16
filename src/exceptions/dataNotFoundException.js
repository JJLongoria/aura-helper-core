/**
 * Exception class to handle and throw errors when not data provided or not data found to execute operations
 */
 class DataNotFoundException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "DataNotFoundException";
    }
}
module.exports = DataNotFoundException;