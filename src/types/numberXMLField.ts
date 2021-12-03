import { Utils } from "../utils";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML Number Fields on XML Metadata files
 */
export class NumberXMLField extends XMLField {

    minValue?: number;
    maxValue?: number;
    allowedValues?: number[];
    default?: number;

    /**
     * Create new Number XML Field instance
     * @param {string | NumberXMLField} keyOrNumberField XML tag name or NumberXMLField instance
     * @param {string} [label] XML tag label
     * @param {string} [datatype] Field datatype
     */
    constructor(keyOrNumberField: string | NumberXMLField, label?: string, datatype?: string) {
        super(keyOrNumberField, label, datatype);
        if (keyOrNumberField instanceof NumberXMLField) {
            this.minValue = keyOrNumberField.minValue;
            this.maxValue = keyOrNumberField.maxValue;
            this.allowedValues = keyOrNumberField.allowedValues;
            this.default = keyOrNumberField.default;
        } else {
            this.minValue = undefined;
            this.maxValue = undefined;
            this.allowedValues = undefined;
            this.default = 0;
        }
    }

    /**
     * Method to set the default field value
     * @param defaultValue Default field value
     * @returns Returns the NmberXMLField instance
     */
    setDefaultValue(defaultValue: number): NumberXMLField {
        this.default = defaultValue;
        return this;
    }

    /**
     * Method to set the minimum field value
     * @param minValue Mimimum field value
     * @returns Returns the NmberXMLField instance
     */
    setMinValue(minValue: number): NumberXMLField {
        this.minValue = minValue;
        return this;
    }

    /**
     * Method to set the maximum field value
     * @param minValue Maximum field value
     * @returns Returns the NmberXMLField instance
     */
    setMaxValue(maxValue: number): NumberXMLField {
        this.maxValue = maxValue;
        return this;
    }

    /**
     * Method to set the allowed values to the field
     * @param minValue Allowed field values
     * @returns Returns the NmberXMLField instance
     */
    setAllowedValues(allowedValues: number | number[]): NumberXMLField {
        this.allowedValues = Utils.forceArray(allowedValues) as number[];
        return this;
    }
}