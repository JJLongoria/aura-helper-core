/**
 * Class to handle and throw errors when exceute not allowed operations
 */
export declare class OperationNotAllowedException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message: string);
}
