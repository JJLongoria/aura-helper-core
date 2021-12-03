"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeXMLField = void 0;
const values_1 = require("../values");
const xmlField_1 = require("./xmlField");
/**
 * Class to represent XML Date Time Fields on XML Metadata files
 */
class DateTimeXMLField extends xmlField_1.XMLField {
    /**
     * Create new Date Time XML Field instance
     * @param {string | DateTimeXMLField} keyOrDatetimeField XML tag name or DateTimeXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrDatetimeField, label) {
        super(keyOrDatetimeField, label, values_1.Datatypes.DATE_TIME);
        if (keyOrDatetimeField instanceof DateTimeXMLField) {
            this.format = keyOrDatetimeField.format;
        }
        else {
            this.format = undefined;
        }
    }
    /**
     * Method to set the Date format
     * @param {string} format Date format
     * @returns Returns the DateTimeXMLField instance
     */
    setFormat(format) {
        this.format = format;
        return this;
    }
}
exports.DateTimeXMLField = DateTimeXMLField;
//# sourceMappingURL=dateTimeXMLField.js.map