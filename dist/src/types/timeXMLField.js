"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeXMLField = void 0;
const values_1 = require("../values");
const dateTimeXMLField_1 = require("./dateTimeXMLField");
/**
 * Class to represent XML Time Fields on XML Metadata files
 */
class TimeXMLField extends dateTimeXMLField_1.DateTimeXMLField {
    /**
     * Create new Time XML Field instance
     * @param {string | DateTimeXMLField} keyOrTimeField XML tag name or TimeXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrTimeField, label) {
        super(keyOrTimeField, label);
        this.datatype = values_1.Datatypes.TIME;
        if (keyOrTimeField instanceof dateTimeXMLField_1.DateTimeXMLField) {
            this.format = keyOrTimeField.format;
        }
        else {
            this.format = undefined;
        }
    }
    /**
     * Method to set the Time format
     * @param {string} format Time format
     * @returns Returns the TimeXMLField instance
     */
    setFormat(format) {
        this.format = format;
        return this;
    }
}
exports.TimeXMLField = TimeXMLField;
//# sourceMappingURL=timeXMLField.js.map