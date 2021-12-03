import { Utils } from "../utils";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML Number Fields on XML Metadata files
 */
export class NumberXMLField extends XMLField {

    minValue?: number;
    maxValue?: number;
    allowedValues?: number[];

    constructor(keyOrObject: string | NumberXMLField, label?: string, datatype?: string) {
        super(keyOrObject, label, datatype);
        if (keyOrObject instanceof NumberXMLField) {
            this.minValue = keyOrObject.minValue;
            this.maxValue = keyOrObject.maxValue;
            this.allowedValues = keyOrObject.allowedValues;
        } else {
            this.minValue = undefined;
            this.maxValue = undefined;
            this.allowedValues = undefined;
        }
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