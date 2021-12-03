import { XMLField } from "./xmlField";
/**
 * Class to represent XML String Fields on XML Metadata files
 */
export declare class StringXMLField extends XMLField {
    default: string;
    isBase64: boolean;
    isCSV: boolean;
    isJSON: boolean;
    matchPatterns: RegExp[];
    minLength: number;
    maxLength?: number;
    /**
     * Create new String XML Field instance
     * @param {string | StringXMLField} keyOrStringField XML tag name or StringXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrStringField: string | StringXMLField, label?: string);
    /**
     * Method to set as Base64
     * @param {boolean} value True to set as Base64, false in otherwise (true by default is param is undefined)
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setBase64(value?: boolean): StringXMLField;
    /**
     * Method to set as CSV
     * @param {boolean} value True to set as CSV, false in otherwise (true by default is param is undefined)
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setCSV(value?: boolean): StringXMLField;
    /**
     * Method to set as JSON
     * @param {boolean} value True to set as JSON, false in otherwise (true by default is param is undefined)
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setJSON(value?: boolean): StringXMLField;
    /**
     * Method to add Regexp Match Patterns
     * @param {RegExp} matchPattern
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    addMatchPattern(matchPattern: RegExp): StringXMLField;
    /**
     * Method to set the value minimum length
     * @param {number} minLength Value minimum length
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setMinLength(minLength: number): StringXMLField;
    /**
     * Method to set the value maximum length
     * @param {number} maxLength Value maximum length
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setMaxLength(maxLength: number): StringXMLField;
    /**
     * Method to transform value to string
     * @param {any} value value to transform
     * @returns {string} Returns the transformed value
     */
    transformValue(value: any): string;
    /**
     * Method to validate field value
     * @param {any} value value to transform
     * @returns {string | undefined} Return the validation message or undefined if are validation are correct
     */
    validate(value: any, fieldName?: string): string | undefined;
}
