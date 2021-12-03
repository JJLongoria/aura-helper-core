"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerXMLField = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
const numberXMLField_1 = require("./numberXMLField");
/**
 * Class to represent XML Integer Fields on XML Metadata files
 */
class IntegerXMLField extends numberXMLField_1.NumberXMLField {
    /**
     * Create new Integer XML Field instance
     * @param {string | IntegerXMLField} keyOrIntegerField XML tag name or IntegerXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrIntegerField, label) {
        super(keyOrIntegerField, label, values_1.Datatypes.INTEGER);
    }
    /**
     * Method to transform value to number
     * @param {any} value value to transform
     * @returns {number} Returns the transformed value
     */
    transformValue(value) {
        value = super.prepareValue(value);
        if (value && utils_1.Utils.isString(value)) {
            value = parseInt(value);
        }
        return value;
    }
}
exports.IntegerXMLField = IntegerXMLField;
//# sourceMappingURL=integerXMLField.js.map