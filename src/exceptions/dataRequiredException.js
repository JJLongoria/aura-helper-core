/**
 * Exception class to handle and throw errors when Required Data is not provided
 */
class DataRequiredException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} dataName data or field name
     */
    constructor(dataName) {
        super(dataName + ' is Required.');
        this.name = "DataRequiredException";
    }
}
module.exports = DataRequiredException;