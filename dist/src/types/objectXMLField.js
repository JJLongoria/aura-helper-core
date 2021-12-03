"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectXMLField = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
const xmlField_1 = require("./xmlField");
/**
 * Class to represent XML Object Fields on XML Metadata files, that is, a XML filed with inner fields
 */
class ObjectXMLField extends xmlField_1.XMLField {
    /**
     * Create new Object XML Field instance
     * @param {string | ObjectXMLField} keyOrObjectField XML tag name or ObjectXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrObjectField, label) {
        super(keyOrObjectField, label, values_1.Datatypes.OBJECT);
        if (keyOrObjectField instanceof ObjectXMLField) {
            this.fieldKey = keyOrObjectField.fieldKey;
            this.sortOrder = keyOrObjectField.sortOrder;
            this.fields = keyOrObjectField.fields;
        }
        else {
            this.fieldKey = keyOrObjectField;
            this.sortOrder = undefined;
            this.fields = {};
        }
    }
    /**
     * Method to set the field key of the object, that is, the main object field
     * @param {string} fieldKey Field key tag name
     * @returns {ObjectXMLField} Returns the ObjectXMLField instance
     */
    setFieldKey(fieldKey) {
        this.fieldKey = fieldKey;
        if (this.sortOrder === undefined) {
            this.sortOrder = utils_1.Utils.forceArray(this.fieldKey);
        }
        return this;
    }
    /**
     * Method to set the sort order field(s) to sort fields on XML
     * @param {string | string[]} sortOrder Sort order field(s)
     * @returns {ObjectXMLField} Returns the ObjectXMLField instance
     */
    setSortOrder(sortOrder) {
        this.sortOrder = utils_1.Utils.forceArray(sortOrder);
        return this;
    }
    /**
     * Method to set the XML Object fields
     * @param {{ [key: string]: XMLField }} fields fields to set
     * @returns {ObjectXMLField} Returns the ObjectXMLField instance
     */
    setFields(fields) {
        this.fields = fields;
        return this;
    }
    /**
     * Method to add field to XML Object field
     * @param {string} fieldName Field tag name
     * @param {XMLField} xmlField XML Field to add
     * @returns {ObjectXMLField} Returns the ObjectXMLField instance
     */
    addField(fieldName, xmlField) {
        if (this.fields === undefined) {
            this.fields = {};
        }
        if (xmlField.minApi < this.minApi) {
            xmlField.minApi = this.minApi;
        }
        if (this.maxApi !== -1 && xmlField.maxApi === -1) {
            xmlField.maxApi = this.maxApi;
        }
        this.fields[fieldName] = xmlField;
        return this;
    }
}
exports.ObjectXMLField = ObjectXMLField;
//# sourceMappingURL=objectXMLField.js.map