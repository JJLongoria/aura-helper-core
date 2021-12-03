import { NumberXMLField } from "./numberXMLField";
/**
 * Class to represent XML Integer Fields on XML Metadata files
 */
export declare class IntegerXMLField extends NumberXMLField {
    /**
     * Create new Integer XML Field instance
     * @param {string | IntegerXMLField} keyOrIntegerField XML tag name or IntegerXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrIntegerField: string | IntegerXMLField, label?: string);
    /**
     * Method to transform value to number
     * @param {any} value value to transform
     * @returns {number} Returns the transformed value
     */
    transformValue(value: any): number;
}
