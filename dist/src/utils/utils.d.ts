/**
 * Class with util methods to work with JS Objects, functions...
 */
export declare class Utils {
    /**
     * Method to force to put the data into an array if the data must be an array
     * @param {any} data Data to force be an array
     *
     * @returns {Array<any>} Returns an array with the data or undefined if data is undefined
     */
    static forceArray(data: any): any[];
    /**
     * Method to clone an object
     * @param {any} obj Object to clone
     *
     * @returns {any} Returns the cloned object
     */
    static clone(obj: any): any;
    /**
     * Method to check if the value is an object
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is an object, false in otherwise
     */
    static isObject(value: any): boolean;
    /**
     * Method to check if the value is a string
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a string, false in otherwise
     */
    static isString(value: any): boolean;
    /**
     * Method to check if the value is a number
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a number, false in otherwise
     */
    static isNumber(value: any): boolean;
    /**
     * Method to check if the value is a BigInt
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a BigInt, false in otherwise
     */
    static isBigInt(value: any): boolean;
    /**
     * Method to check if the value is a symbol
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a symbol, false in otherwise
     */
    static isSymbol(value: any): boolean;
    /**
     * Method to check if the value is a boolean
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a boolean, false in otherwise
     */
    static isBoolean(value: any): boolean;
    /**
     * Method to check if the value is a function
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a function, false in otherwise
     */
    static isFunction(value: any): boolean;
    /**
     * Method to check if the value is an array
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is an array, false in otherwise
     */
    static isArray(value: any): boolean;
    /**
     * Method to check if the value is null or undefined
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is null or undefined, false in otherwise
     */
    static isNull(value: any): boolean;
    /**
     * Method to check if an object has keys
     * @param {any} value Object to check
     *
     * @returns {boolean} true if the object has keys, false in otherwise
     */
    static hasKeys(value: any): boolean;
    /**
     * Method to count the keys from an object
     * @param {any} value Object to get the keys
     *
     * @returns {number} Returns the keys from the object
     */
    static countKeys(value: any): number;
    /**
     * Method to get the first element from an object
     * @param {any} value Object to get the first element
     *
     * @returns {any} Returns the first element data
     */
    static getFirstElement(value: any): any;
    /**
     * Method to get the last element from an object
     * @param {any} value Object to get the last element
     *
     * @returns {any} Returns the last element data
     */
    static getLastElement(value: any): any;
    /**
     * Method to get the callback function from function arguments
     * @param {arguments} args function arguments to get the callback
     *
     * @returns {Function | undefined} Returns a function if exists, or undefined if not exists.
     */
    static getCallbackFunction(args: any[]): Function | undefined;
    /**
     * Method to sort an Array. You can use fields from elements to sort and sort with case sensitive or insensitive
     * @param {Array<any>} elements Array with the elements to sort
     * @param {Array<string>} [fields] fields from child to sort
     * @param {boolean} [caseSensitive] true if want sort data with case sensitive
     *
     * @returns {Array<any>} Returns the array sorted
     */
    static sort(elements: any[], fields?: string[], caseSensitive?: boolean): any[];
}
