import { Utils } from "../utils";
import { Datatypes } from "../values";
import { NumberXMLField } from "./numberXMLField";

/**
 * Class to represent XML Double Fields on XML Metadata files
 */
export class DoubleXMLField extends NumberXMLField {

    /**
     * Create new Double XML Field instance
     * @param {string | DoubleXMLField} keyOrObject XML tag name or DoubleXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrObject: string | DoubleXMLField, label?: string) {
        super(keyOrObject, label, Datatypes.DOUBLE);
        if (keyOrObject instanceof DoubleXMLField) {
            this.default = keyOrObject.default;
        } else {
            this.default = 0.0;
        }
    }

    /**
     * Method to prepare value to transform or show
     * @param {any} value value to prepare 
     * @returns {string} Returns the prepared value
     */
    prepareValue(value: any): string {
        value = super.prepareValue(value);
        let strVal = '' + value;
        if (strVal.indexOf('.') === -1) {
            strVal += '.0';
        }
        return strVal;
    }

    /**
     * Method to transform value to number
     * @param {any} value value to transform 
     * @returns {number} Returns the transformed value
     */
    transformValue(value: any): number {
        value = this.prepareValue(value);
        if (value && Utils.isString(value)) {
            value = parseFloat(value);
        }
        return value;
    }
}