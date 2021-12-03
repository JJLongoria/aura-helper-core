import { NumberXMLField } from "./numberXMLField";
/**
 * Class to represent XML Double Fields on XML Metadata files
 */
export declare class DoubleXMLField extends NumberXMLField {
    /**
     * Create new Double XML Field instance
     * @param {string | DoubleXMLField} keyOrDoubleField XML tag name or DoubleXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrDoubleField: string | DoubleXMLField, label?: string);
    /**
     * Method to prepare value to transform or show
     * @param {any} value value to prepare
     * @returns {string} Returns the prepared value
     */
    prepareValue(value: any): string;
    /**
     * Method to transform value to number
     * @param {any} value value to transform
     * @returns {number} Returns the transformed value
     */
    transformValue(value: any): number;
}
