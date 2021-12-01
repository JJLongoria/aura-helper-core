/**
 * Exception class to handle and throw errors when Required Data is not provided
 */
export class DataRequiredException extends Error {

    /**
     * Constructor to create the exception
     * @param {string} dataName data or field name
     */
    constructor(dataName: string) {
        super(dataName + ' is Required.');
        this.name = "DataRequiredException";
    }
}