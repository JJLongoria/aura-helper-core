/**
 * Exception class to handle and throw errors when not data provided or not data found to execute operations
 */
export declare class DataNotFoundException extends Error {
    /**
     * Constructor to create the exception
     * @param {string} message Exception message
     */
    constructor(message: string);
}
