"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleXMLField = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
const numberXMLField_1 = require("./numberXMLField");
/**
 * Class to represent XML Double Fields on XML Metadata files
 */
class DoubleXMLField extends numberXMLField_1.NumberXMLField {
    /**
     * Create new Double XML Field instance
     * @param {string | DoubleXMLField} keyOrDoubleField XML tag name or DoubleXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrDoubleField, label) {
        super(keyOrDoubleField, label, values_1.Datatypes.DOUBLE);
        if (keyOrDoubleField instanceof DoubleXMLField) {
            this.default = keyOrDoubleField.default;
        }
        else {
            this.default = 0.0;
        }
    }
    /**
     * Method to prepare value to transform or show
     * @param {any} value value to prepare
     * @returns {string} Returns the prepared value
     */
    prepareValue(value) {
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
    transformValue(value) {
        value = this.prepareValue(value);
        if (value && utils_1.Utils.isString(value)) {
            value = parseFloat(value);
        }
        return value;
    }
}
exports.DoubleXMLField = DoubleXMLField;
//# sourceMappingURL=doubleXMLField.js.map