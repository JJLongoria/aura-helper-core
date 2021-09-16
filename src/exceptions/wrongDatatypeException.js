/**
 * Class to handle and throw errors when the variable datatypes are wrong
 */
class WrongDatatypeException extends Error {

    /**
     * Constructor to create the exception
     * @param {String} message Exception message
     */
    constructor(message) {
        super(message);
        this.name = "WrongDatatypeException";
    }

}
module.exports = WrongDatatypeException;