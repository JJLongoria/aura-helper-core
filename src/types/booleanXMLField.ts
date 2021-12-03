import { Utils } from "../utils";
import { Datatypes } from "../values";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML Boolean Fields on XML Metadata files
 */
export class BooleanXMLField extends XMLField {

    default: boolean;

    /**
     * Create new Boolean XML field instance
     * @param {string | BooleanXMLField} keyOrBooleanField XML tag name or BooleanXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrBooleanField: string | BooleanXMLField, label?: string) {
        super(keyOrBooleanField, label, Datatypes.BOOLEAN);
        if(keyOrBooleanField instanceof BooleanXMLField){
            this.default = keyOrBooleanField.default;
        } else {
            this.default = false;
        }
    }

    /**
     * Method to tranform value to boolean
     * @param {any} value value to transform 
     * @returns {boolean} Returns the transformed value
     */
    transformValue(value: any): boolean {
        if (value !== undefined && !Utils.isBoolean(value)){
            value = value === 'true';
        }
        return value;
    }
}