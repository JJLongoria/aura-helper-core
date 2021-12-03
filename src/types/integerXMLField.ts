import { Utils } from "../utils";
import { Datatypes } from "../values";
import { NumberXMLField } from "./numberXMLField";

/**
 * Class to represent XML Integer Fields on XML Metadata files
 */
export class IntegerXMLField extends NumberXMLField {

    /**
     * Create new Integer XML Field instance
     * @param {string | IntegerXMLField} keyOrIntegerField XML tag name or IntegerXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrIntegerField: string | IntegerXMLField, label?: string) {
        super(keyOrIntegerField, label, Datatypes.INTEGER);
    }

    /**
     * Method to transform value to number
     * @param {any} value value to transform 
     * @returns {number} Returns the transformed value
     */
    transformValue(value: any): number {
        value = super.prepareValue(value);
        if (value && Utils.isString(value)) {
            value = parseInt(value);
        }
        return value;
    }
}