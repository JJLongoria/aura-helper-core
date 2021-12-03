"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberXMLField = void 0;
const utils_1 = require("../utils");
const xmlField_1 = require("./xmlField");
/**
 * Class to represent XML Number Fields on XML Metadata files
 */
class NumberXMLField extends xmlField_1.XMLField {
    /**
     * Create new Number XML Field instance
     * @param {string | NumberXMLField} keyOrNumberField XML tag name or NumberXMLField instance
     * @param {string} [label] XML tag label
     * @param {string} [datatype] Field datatype
     */
    constructor(keyOrNumberField, label, datatype) {
        super(keyOrNumberField, label, datatype);
        if (keyOrNumberField instanceof NumberXMLField) {
            this.minValue = keyOrNumberField.minValue;
            this.maxValue = keyOrNumberField.maxValue;
            this.allowedValues = keyOrNumberField.allowedValues;
            this.default = keyOrNumberField.default;
        }
        else {
            this.minValue = undefined;
            this.maxValue = undefined;
            this.allowedValues = undefined;
            this.default = 0;
        }
    }
    /**
     * Method to set the default field value
     * @param defaultValue Default field value
     * @returns Returns the NumberXMLField instance
     */
    setDefaultValue(defaultValue) {
        this.default = defaultValue;
        return this;
    }
    /**
     * Method to set the minimum field value
     * @param minValue Mimimum field value
     * @returns Returns the NumberXMLField instance
     */
    setMinValue(minValue) {
        this.minValue = minValue;
        return this;
    }
    /**
     * Method to set the maximum field value
     * @param minValue Maximum field value
     * @returns Returns the NumberXMLField instance
     */
    setMaxValue(maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    /**
     * Method to set the allowed values to the field
     * @param minValue Allowed field values
     * @returns Returns the NumberXMLField instance
     */
    setAllowedValues(allowedValues) {
        this.allowedValues = utils_1.Utils.forceArray(allowedValues);
        return this;
    }
}
exports.NumberXMLField = NumberXMLField;
//# sourceMappingURL=numberXMLField.js.map