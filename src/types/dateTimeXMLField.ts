import { Datatypes } from "../values";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML Date Time Fields on XML Metadata files
 */
export class DateTimeXMLField extends XMLField {

    format?: string;

    /**
     * Create new Date Time XML Field instance
     * @param {string | DateTimeXMLField} keyOrDatetimeField XML tag name or DateTimeXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrDatetimeField: string | DateTimeXMLField, label?: string) {
        super(keyOrDatetimeField, label, Datatypes.DATE_TIME);
        if (keyOrDatetimeField instanceof DateTimeXMLField) {
            this.format = keyOrDatetimeField.format;
        } else {
            this.format = undefined;
        }
    }

    /**
     * Method to set the Date format
     * @param {string} format Date format
     * @returns Returns the DateTimeXMLField instance
     */
    setFormat(format: string): DateTimeXMLField {
        this.format = format;
        return this;
    }
}