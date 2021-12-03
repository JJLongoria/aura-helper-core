import { Datatypes } from "../values";
import { DateTimeXMLField } from "./dateTimeXMLField";

/**
 * Class to represent XML Time Fields on XML Metadata files
 */
export class TimeXMLField extends DateTimeXMLField {

    /**
     * Create new Time XML Field instance
     * @param {string | DateTimeXMLField} keyOrTimeField XML tag name or TimeXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrTimeField: string | DateTimeXMLField, label?: string) {
        super(keyOrTimeField, label);
        this.datatype = Datatypes.TIME;
        if (keyOrTimeField instanceof DateTimeXMLField) {
            this.format = keyOrTimeField.format;
        } else {
            this.format = undefined;
        }
    }

    /**
     * Method to set the Time format
     * @param {string} format Time format
     * @returns Returns the TimeXMLField instance
     */
    setFormat(format: string): TimeXMLField {
        this.format = format;
        return this;
    }
}