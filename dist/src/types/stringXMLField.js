"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringXMLField = void 0;
const values_1 = require("../values");
const xmlField_1 = require("./xmlField");
/**
 * Class to represent XML String Fields on XML Metadata files
 */
class StringXMLField extends xmlField_1.XMLField {
    /**
     * Create new String XML Field instance
     * @param {string | StringXMLField} keyOrStringField XML tag name or StringXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrStringField, label) {
        super(keyOrStringField, label, values_1.Datatypes.STRING);
        if (keyOrStringField instanceof StringXMLField) {
            this.default = keyOrStringField.default;
            this.minLength = keyOrStringField.minLength;
            this.isBase64 = keyOrStringField.isBase64;
            this.isCSV = keyOrStringField.isCSV;
            this.isJSON = keyOrStringField.isJSON;
            this.matchPatterns = keyOrStringField.matchPatterns;
            this.maxLength = keyOrStringField.maxLength;
        }
        else {
            this.default = values_1.DataValues.DEFAULT_TEXT;
            this.minLength = 0;
            this.isBase64 = false;
            this.isCSV = false;
            this.isJSON = false;
            this.matchPatterns = [];
            this.maxLength = undefined;
        }
    }
    /**
     * Method to set as Base64
     * @param {boolean} value True to set as Base64, false in otherwise (true by default is param is undefined)
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setBase64(value) {
        this.isBase64 = (value !== undefined) ? value : true;
        return this;
    }
    /**
     * Method to set as CSV
     * @param {boolean} value True to set as CSV, false in otherwise (true by default is param is undefined)
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setCSV(value) {
        this.isCSV = (value !== undefined) ? value : true;
        return this;
    }
    /**
     * Method to set as JSON
     * @param {boolean} value True to set as JSON, false in otherwise (true by default is param is undefined)
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setJSON(value) {
        this.isJSON = (value !== undefined) ? value : true;
        return this;
    }
    /**
     * Method to add Regexp Match Patterns
     * @param {RegExp} matchPattern
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    addMatchPattern(matchPattern) {
        if (this.matchPatterns === undefined) {
            this.matchPatterns = [];
        }
        this.matchPatterns.push(matchPattern);
        return this;
    }
    /**
     * Method to set the value minimum length
     * @param {number} minLength Value minimum length
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setMinLength(minLength) {
        this.minLength = minLength;
        return this;
    }
    /**
     * Method to set the value maximum length
     * @param {number} maxLength Value maximum length
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setMaxLength(maxLength) {
        this.maxLength = maxLength;
        return this;
    }
    /**
     * Method to transform value to string
     * @param {any} value value to transform
     * @returns {string} Returns the transformed value
     */
    transformValue(value) {
        return super.prepareValue(value);
    }
    /**
     * Method to validate field value
     * @param {any} value value to transform
     * @returns {string | undefined} Return the validation message or undefined if are validation are correct
     */
    validate(value, fieldName) {
        if (this.required && !value) {
            return 'The field ' + fieldName + ' is required';
        }
        value = this.prepareValue(value);
        if (this.matchPatterns && this.matchPatterns.length > 0 && value) {
            let pass = false;
            for (const pattern of this.matchPatterns) {
                if (pattern.test(value)) {
                    pass = true;
                    break;
                }
            }
            if (!pass) {
                return this.validationMessage;
            }
        }
        if (this.minLength && this.minLength >= 0 && this.maxLength && this.maxLength >= 0 && value) {
            if (value.length < this.minLength || value.length > this.maxLength) {
                return 'Wrong value length. The value length must be between ' + this.minLength + ' and ' + this.maxLength;
            }
        }
        else if (this.minLength && this.minLength >= 0 && value) {
            if (value.length < this.minLength) {
                return 'Wrong value length. The value length must be higher than ' + this.minLength + '. (Remains ' + (this.minLength - value.length) + ' characters)';
            }
        }
        else if (this.maxLength && this.maxLength >= 0 && value) {
            if (value.length > this.maxLength) {
                return 'Wrong value length. The value length must be lower than ' + this.maxLength + '. (' + (this.maxLength - value.length) + ' characters left)';
            }
        }
        return undefined;
    }
}
exports.StringXMLField = StringXMLField;
//# sourceMappingURL=stringXMLField.js.map