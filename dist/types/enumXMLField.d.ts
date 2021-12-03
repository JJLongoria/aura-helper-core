import { EnumXMLFieldValue } from "./enumXMLFieldValue";
import { XMLField } from "./xmlField";
/**
 * Class to represent XML Enum Fields on XML Metadata files
 */
export declare class EnumXMLField extends XMLField {
    multichoice: boolean;
    values: EnumXMLFieldValue[];
    default: string;
    /**
     * Create new Enum XML Field instance
     * @param {string | EnumXMLField} keyOrEnumField XML tag name or EnumXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrEnumField: string | EnumXMLField, label?: string);
    /**
     * Method to set as mutichoice enum
     * @param {boolean} value True to set as mutichoice, false in otherwise (true by default is param is undefined)
     * @returns {EnumXMLField} Returns the StringXMLField instance
     */
    setMultiChoice(value?: boolean): EnumXMLField;
    /**
     * Method to set enum values
     * @param {EnumXMLFieldValue[]} values Enum values to set
     * @param {number} [minApi] Minimum API Version
     * @param {number} [maxApi] Maximum API Version
     * @returns {EnumXMLField} Returns the StringXMLField instance
     */
    setEnumValues(values: EnumXMLFieldValue[], minApi?: number, maxApi?: number): this;
    /**
     * Method to add enum values
     * @param {string} label Enum value label
     * @param {string} value Enum value
     * @param {number} [minApi] Minimum API Version
     * @param {number} [maxApi] Maximum API Version
     * @returns {EnumXMLField} Returns the StringXMLField instance
     */
    addEnumValue(label: string, value: string, minApi?: number, maxApi?: number): this;
    /**
     * Method to get enum value using label
     * @param {string} label label to get value
     * @returns {string | undefined} Returns the selected value or undefined if not exists
     */
    getValue(label: string): string | undefined;
    /**
     * Method to get enum label using value
     * @param {string} value value to get label
     * @returns {string | undefined} Returns the selected label or undefined if not exists
     */
    getLabel(value: string): string | undefined;
    /**
     * Method to transform value to string
     * @param {any} value value to transform
     * @returns {string} Returns the transformed value
     */
    transformValue(value: any): string;
}
