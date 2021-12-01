/**
 * Class to handle and throw errors when the variable datatypes are wrong
 */
export class WrongDatatypeException extends Error {

    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message: string) {
        super(message);
        this.name = "WrongDatatypeException";
    }

}