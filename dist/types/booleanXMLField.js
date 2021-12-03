"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanXMLField = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
const xmlField_1 = require("./xmlField");
/**
 * Class to represent XML Boolean Fields on XML Metadata files
 */
class BooleanXMLField extends xmlField_1.XMLField {
    /**
     * Create new Boolean XML field instance
     * @param {string | BooleanXMLField} keyOrBooleanField XML tag name or BooleanXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrBooleanField, label) {
        super(keyOrBooleanField, label, values_1.Datatypes.BOOLEAN);
        if (keyOrBooleanField instanceof BooleanXMLField) {
            this.default = keyOrBooleanField.default;
        }
        else {
            this.default = false;
        }
    }
    /**
     * Method to transform value to boolean
     * @param {any} value value to transform
     * @returns {boolean} Returns the transformed value
     */
    transformValue(value) {
        if (value !== undefined && !utils_1.Utils.isBoolean(value)) {
            value = value === 'true';
        }
        return value;
    }
}
exports.BooleanXMLField = BooleanXMLField;
//# sourceMappingURL=booleanXMLField.js.map