"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayXMLField = void 0;
const values_1 = require("../values");
const objectXMLField_1 = require("./objectXMLField");
/**
 * Class to represent XML Array Fields on XML Metadata files, that is, a XML filed with inner fields like and Object XML Field but allow repeat
 */
class ArrayXMLField extends objectXMLField_1.ObjectXMLField {
    /**
     * Create new Array XML Field instance
     * @param {string | ArrayXMLField} keyOrArrayField XML tag name or ArrayXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrArrayField, label) {
        super(keyOrArrayField, label);
        if (keyOrArrayField instanceof ArrayXMLField) {
            this.maxItems = keyOrArrayField.maxItems;
            this.allowedValues = keyOrArrayField.allowedValues;
        }
        this.datatype = values_1.Datatypes.ARRAY;
    }
    /**
     * Method to set the maximum allowed items into the array
     * @param maxItems Max allowed items
     * @returns {ArrayXMLField} Returns the ArrayXMLField instance
     */
    setMaxItems(maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    /**
     * Method to add enum values
     * @param {string} label Enum value label
     * @param {string} value Enum value
     * @param {number} [minApi] Minimum API Version
     * @param {number} [maxApi] Maximum API Version
     * @returns {ArrayXMLField} Returns the ArrayXMLField instance
     */
    addAllowedValue(label, value, minApi, maxApi) {
        if (this.allowedValues === undefined) {
            this.allowedValues = [];
        }
        this.allowedValues.push({
            label: label,
            value: value,
            minApi: (minApi !== undefined) ? minApi : this.minApi,
            maxApi: (maxApi !== undefined) ? maxApi : this.maxApi
        });
        return this;
    }
}
exports.ArrayXMLField = ArrayXMLField;
//# sourceMappingURL=arrayXMLField.js.map