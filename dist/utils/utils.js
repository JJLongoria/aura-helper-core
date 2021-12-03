"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
/**
 * Class with util methods to work with JS Objects, functions...
 */
class Utils {
    /**
     * Method to force to put the data into an array if the data must be an array
     * @param {any} data Data to force be an array
     *
     * @returns {Array<any>} Returns an array with the data or undefined if data is undefined
     */
    static forceArray(data) {
        if (data === undefined) {
            return data;
        }
        return (Array.isArray(data)) ? data : [data];
    }
    /**
     * Method to clone an object
     * @param {any} obj Object to clone
     *
     * @returns {any} Returns the cloned object
     */
    static clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /**
     * Method to check if the value is an object
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is an object, false in otherwise
     */
    static isObject(value) {
        return !Utils.isArray(value) && typeof value === 'object';
    }
    /**
     * Method to check if the value is a string
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a string, false in otherwise
     */
    static isString(value) {
        return !Utils.isNull(value) && typeof value === 'string';
    }
    /**
     * Method to check if the value is a number
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a number, false in otherwise
     */
    static isNumber(value) {
        return !Utils.isNull(value) && typeof value === 'number';
    }
    /**
     * Method to check if the value is a BigInt
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a BigInt, false in otherwise
     */
    static isBigInt(value) {
        return !Utils.isNull(value) && typeof value === 'bigint';
    }
    /**
     * Method to check if the value is a symbol
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a symbol, false in otherwise
     */
    static isSymbol(value) {
        return !Utils.isNull(value) && typeof value === 'symbol';
    }
    /**
     * Method to check if the value is a boolean
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a boolean, false in otherwise
     */
    static isBoolean(value) {
        return !Utils.isNull(value) && typeof value === 'boolean';
    }
    /**
     * Method to check if the value is a function
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is a function, false in otherwise
     */
    static isFunction(value) {
        return !Utils.isNull(value) && typeof value === 'function';
    }
    /**
     * Method to check if the value is an array
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is an array, false in otherwise
     */
    static isArray(value) {
        return !Utils.isNull(value) && Array.isArray(value);
    }
    /**
     * Method to check if the value is null or undefined
     * @param {any} value Value to check
     *
     * @returns {boolean} true if the value is null or undefined, false in otherwise
     */
    static isNull(value) {
        return value === undefined || value === null;
    }
    /**
     * Method to check if an object has keys
     * @param {any} value Object to check
     *
     * @returns {boolean} true if the object has keys, false in otherwise
     */
    static hasKeys(value) {
        return !Utils.isNull(value) && Utils.isObject(value) && Object.keys(value).length > 0;
    }
    /**
     * Method to count the keys from an object
     * @param {any} value Object to get the keys
     *
     * @returns {number} Returns the keys from the object
     */
    static countKeys(value) {
        return (Utils.hasKeys(value)) ? Object.keys(value).length : 0;
    }
    /**
     * Method to get the first element from an object
     * @param {any} value Object to get the first element
     *
     * @returns {any} Returns the first element data
     */
    static getFirstElement(value) {
        return (Utils.hasKeys(value)) ? value[Object.keys(value)[0]] : 0;
    }
    /**
     * Method to get the last element from an object
     * @param {any} value Object to get the last element
     *
     * @returns {any} Returns the last element data
     */
    static getLastElement(value) {
        return (Utils.hasKeys(value)) ? value[Object.keys(value)[Object.keys(value).length - 1]] : 0;
    }
    /**
     * Method to get the callback function from function arguments
     * @param {arguments} args function arguments to get the callback
     *
     * @returns {Function | undefined} Returns a function if exists, or undefined if not exists.
     */
    static getCallbackFunction(args) {
        if (args.length === 0) {
            return undefined;
        }
        for (let i = 0; i < args.length; i++) {
            if (Utils.isFunction(args[i])) {
                return args[i];
            }
        }
        return undefined;
    }
    /**
     * Method to sort an Array. You can use fields from elements to sort and sort with case sensitive or insensitive
     * @param {Array<any>} elements Array with the elements to sort
     * @param {Array<string>} [fields] fields from child to sort
     * @param {boolean} [caseSensitive] true if want sort data with case sensitive
     *
     * @returns {Array<any>} Returns the array sorted
     */
    static sort(elements, fields, caseSensitive) {
        if (Array.isArray(elements) && elements.length > 0) {
            elements.sort(function (a, b) {
                if (fields && fields.length > 0) {
                    let nameA = '';
                    let nameB = '';
                    let counter = 0;
                    for (const field of fields) {
                        let valA = (a[field] !== undefined) ? a[field] : "";
                        let valB = (b[field] !== undefined) ? b[field] : "";
                        if (counter === 0) {
                            nameA = valA;
                            nameB = valB;
                        }
                        else {
                            nameA += '_' + valA;
                            nameB += '_' + valB;
                        }
                        counter++;
                    }
                    if (Utils.isNumber(nameA) && Utils.isNumber(nameB)) {
                        if (nameA > nameB) {
                            return 1;
                        }
                        else if (nameA < nameB) {
                            return -1;
                        }
                        else {
                            return 0;
                        }
                    }
                    else {
                        nameA = '' + nameA;
                        nameB = '' + nameB;
                        if (caseSensitive) {
                            return nameA.localeCompare(nameB);
                        }
                        else {
                            return nameA.toLowerCase().localeCompare(nameB.toLowerCase());
                        }
                    }
                }
                else {
                    if (caseSensitive) {
                        return a.localeCompare(b);
                    }
                    else {
                        return a.toLowerCase().localeCompare(b.toLowerCase());
                    }
                }
            });
        }
        return elements;
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map