import { Datatypes } from "../values";
import { EnumXMLFieldValue } from "./enumXMLFieldValue";
import { ObjectXMLField } from "./objectXMLField";

/**
 * Class to represent XML Array Fields on XML Metadata files, that is, a XML filed with inner fields like and Object XML Field but allow repeat
 */
export class ArrayXMLField extends ObjectXMLField {

    maxItems?: number;
    allowedValues?: EnumXMLFieldValue[];

    /**
     * Create new Array XML Field instance
     * @param {string | ArrayXMLField} keyOrArrayField XML tag name or ArrayXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrArrayField: string | ArrayXMLField, label?: string) {
        super(keyOrArrayField, label);
        if (keyOrArrayField instanceof ArrayXMLField) {
            this.maxItems = keyOrArrayField.maxItems;
            this.allowedValues = keyOrArrayField.allowedValues;
        }
        this.datatype = Datatypes.ARRAY;
    }

    /**
     * Method to set the maximum allowed items into the array
     * @param maxItems Max allowed items
     * @returns {ArrayXMLField} Returns the ArrayXMLField instance
     */
    setMaxItems(maxItems: number): ArrayXMLField {
        this.maxItems = maxItems;
        return this;
    }

    /**
     * Method to add enum values
     * @param {string} label Enum value label
     * @param {string} value Enum value
     * @param {number | string} [minApi] Minimum API Version
     * @param {number | string} [maxApi] Maximum API Version
     * @returns {ArrayXMLField} Returns the ArrayXMLField instance
     */
    addAllowedValue(label: string, value: string, minApi?: number | string, maxApi?: number | string) {
        if (this.allowedValues === undefined) {
            this.allowedValues = [];
        }
        this.allowedValues.push({
            label: label,
            value: value,
            minApi: (minApi !== undefined) ? minApi : this.minApi,
            maxApi: (maxApi !== undefined) ? maxApi : this.maxApi
        });
        return this;
    }
}