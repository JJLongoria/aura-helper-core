import { XMLField } from "./xmlField";
/**
 * Class to represent XML Number Fields on XML Metadata files
 */
export declare class NumberXMLField extends XMLField {
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
    constructor(keyOrNumberField: string | NumberXMLField, label?: string, datatype?: string);
    /**
     * Method to set the default field value
     * @param defaultValue Default field value
     * @returns Returns the NumberXMLField instance
     */
    setDefaultValue(defaultValue: number): NumberXMLField;
    /**
     * Method to set the minimum field value
     * @param minValue Mimimum field value
     * @returns Returns the NumberXMLField instance
     */
    setMinValue(minValue: number): NumberXMLField;
    /**
     * Method to set the maximum field value
     * @param minValue Maximum field value
     * @returns Returns the NumberXMLField instance
     */
    setMaxValue(maxValue: number): NumberXMLField;
    /**
     * Method to set the allowed values to the field
     * @param minValue Allowed field values
     * @returns Returns the NumberXMLField instance
     */
    setAllowedValues(allowedValues: number | number[]): NumberXMLField;
}
