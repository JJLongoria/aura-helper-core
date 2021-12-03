import { XMLField } from "./xmlField";
/**
 * Class to represent XML Boolean Fields on XML Metadata files
 */
export declare class BooleanXMLField extends XMLField {
    default: boolean;
    /**
     * Create new Boolean XML field instance
     * @param {string | BooleanXMLField} keyOrBooleanField XML tag name or BooleanXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrBooleanField: string | BooleanXMLField, label?: string);
    /**
     * Method to transform value to boolean
     * @param {any} value value to transform
     * @returns {boolean} Returns the transformed value
     */
    transformValue(value: any): boolean;
}
