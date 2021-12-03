import { EnumXMLFieldValue } from "./enumXMLFieldValue";
import { ObjectXMLField } from "./objectXMLField";
/**
 * Class to represent XML Array Fields on XML Metadata files, that is, a XML filed with inner fields like and Object XML Field but allow repeat
 */
export declare class ArrayXMLField extends ObjectXMLField {
    maxItems?: number;
    allowedValues?: EnumXMLFieldValue[];
    /**
     * Create new Array XML Field instance
     * @param {string | ArrayXMLField} keyOrArrayField XML tag name or ArrayXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrArrayField: string | ArrayXMLField, label?: string);
    /**
     * Method to set the maximum allowed items into the array
     * @param maxItems Max allowed items
     * @returns {ArrayXMLField} Returns the ArrayXMLField instance
     */
    setMaxItems(maxItems: number): ArrayXMLField;
    /**
     * Method to add enum values
     * @param {string} label Enum value label
     * @param {string} value Enum value
     * @param {number} [minApi] Minimum API Version
     * @param {number} [maxApi] Maximum API Version
     * @returns {ArrayXMLField} Returns the ArrayXMLField instance
     */
    addAllowedValue(label: string, value: string, minApi?: number, maxApi?: number): this;
}
