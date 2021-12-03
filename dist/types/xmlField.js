"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLField = void 0;
const utils_1 = require("../utils/utils");
const values_1 = require("../values");
/**
 * Class to represent XML Fields on XML Metadata files
 */
class XMLField {
    /**
     * Create new XML Field instance
     * @param {string | XMLField} keyOrXMLField XML Key (tag name) value or XML Field instance
     * @param {string} [label] XML Field label to the tag
     * @param {string} [datatype] XML Field datatype
     */
    constructor(keyOrXMLField, label, datatype) {
        if (keyOrXMLField instanceof XMLField) {
            this.key = keyOrXMLField.key;
            this.label = keyOrXMLField.label;
            this.datatype = keyOrXMLField.datatype;
            this.minApi = keyOrXMLField.minApi;
            this.maxApi = keyOrXMLField.maxApi;
            this.creatable = keyOrXMLField.creatable;
            this.editable = keyOrXMLField.editable;
            this.merge = keyOrXMLField.merge;
            this.unique = keyOrXMLField.unique;
            this.required = keyOrXMLField.required;
            this.reserved = keyOrXMLField.reserved;
            this.separator = keyOrXMLField.separator;
            this.defaultValue = keyOrXMLField.defaultValue;
            this.metadataType = keyOrXMLField.metadataType;
            this.linkToSObjects = keyOrXMLField.linkToSObjects;
            this.fieldDependencies = keyOrXMLField.fieldDependencies;
            this.controlledFields = keyOrXMLField.controlledFields;
            this.compress = keyOrXMLField.compress;
            this.validationMessage = keyOrXMLField.validationMessage;
        }
        else {
            this.key = keyOrXMLField;
            this.label = label || this.key;
            this.datatype = datatype || values_1.Datatypes.STRING;
            this.minApi = 1;
            this.maxApi = -1;
            this.creatable = true;
            this.editable = false;
            this.merge = false;
            this.unique = false;
            this.required = false;
            this.reserved = false;
            this.compress = false;
            this.validationMessage = 'Validation failed';
        }
    }
    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...)
     * @returns {XMLField} Return the XML Field instance
     */
    setDefinitionReference(definitionRef) {
        this.definitionRef = definitionRef;
        return this;
    }
    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {XMLField} Return the XML Field instance
     */
    setSeparator(separator) {
        this.separator = separator;
        return this;
    }
    /**
     * Method to set the XML Field default value
     * @param {any} defaultValue default value
     * @returns {XMLField} Return the XML Field instance
     */
    setDefaultValue(defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    /**
     * Method to set XML field as reserved
     * @param {boolean} value true to set XML field as reserved
     * @returns {XMLField} Return the XML Field instance
     */
    setReserved(value) {
        this.reserved = (value !== undefined) ? value : true;
        return this;
    }
    /**
     * Method to set XML field as editable
     * @param {boolean} value true to set XML field as editable
     * @returns {XMLField} Return the XML Field instance
     */
    setEditable(value) {
        this.editable = (value !== undefined) ? value : true;
        return this;
    }
    /**
     * Method to set XML field as required
     * @param {boolean} value true to set XML field as required
     * @returns {XMLField} Return the XML Field instance
     */
    setRequired(value) {
        this.required = (value !== undefined) ? value : true;
        return this;
    }
    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} value true to set XML field as mergeable
     * @returns {XMLField} Return the XML Field instance
     */
    setMergeable(value) {
        this.merge = (value !== undefined) ? value : true;
        return this;
    }
    /**
     * Method to set XML field as unique
     * @param {boolean} value true to set XML field as unique
     * @returns {XMLField} Return the XML Field instance
     */
    setUnique(value) {
        this.unique = (value !== undefined) ? value : true;
        return this;
    }
    /**
     * Method to set if this XML must to compress
     * @param {boolean} value true to set field to compress
     * @returns {XMLField} Return the XML Field instance
     */
    setCompress(value) {
        this.compress = (value !== undefined) ? value : true;
        return this;
    }
    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number} minApi API Version minimum value
     * @returns {XMLField} Return the XML Field instance
     */
    setMinApi(minApi) {
        this.minApi = (minApi !== undefined && minApi >= 1) ? minApi : 1;
        return this;
    }
    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number} maxApi API Version maximum value
     * @returns {XMLField} Return the XML Field instance
     */
    setMaxApi(maxApi) {
        this.maxApi = (maxApi !== undefined && maxApi >= 1) ? maxApi : -1;
        return this;
    }
    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {XMLField} Return the XML Field instance
     */
    setMetadataType(metadataType) {
        this.metadataType = metadataType;
        return this;
    }
    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {XMLField} Return the XML Field instance
     */
    setValidationMessage(validationMessage) {
        this.validationMessage = validationMessage;
        return this;
    }
    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {XMLField} Return the XML Field instance
     */
    linkFieldToSObject(sObject, field) {
        if (this.linkToSObjects === undefined) {
            this.linkToSObjects = [];
        }
        this.linkToSObjects.push({
            sObject: sObject,
            field: (field === undefined) ? 'Id' : field
        });
        return this;
    }
    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {XMLField} Return the XML Field instance
     */
    addDependencyField(fieldDependency) {
        if (this.fieldDependencies === undefined) {
            this.fieldDependencies = [];
        }
        if (fieldDependency.minApi < this.minApi) {
            fieldDependency.minApi = this.minApi;
        }
        if (this.maxApi !== -1 && !fieldDependency.maxApi) {
            fieldDependency.maxApi = this.maxApi;
        }
        this.fieldDependencies.push(fieldDependency);
        return this;
    }
    addControlledField(controlledField) {
        if (this.controlledFields === undefined) {
            this.controlledFields = [];
        }
        if (controlledField.minApi < this.minApi) {
            controlledField.minApi = this.minApi;
        }
        if (this.maxApi !== -1 && !controlledField.maxApi) {
            controlledField.maxApi = this.maxApi;
        }
        this.controlledFields.push(controlledField);
        return this;
    }
    prepareValue(value, originalValue) {
        let empty = value === undefined || value === null || value === '';
        if (!empty) {
            value = utils_1.Utils.clone(value);
        }
        if (!empty && value['#text'] !== undefined) {
            value = value['#text'];
        }
        if (!empty && value !== undefined && value['@attrs'] !== undefined) {
            delete value['@attrs'];
        }
        if (value && !Array.isArray(value) && typeof value === 'object' && Object.keys(value).length === 0) {
            value = '';
        }
        if (value && !originalValue) {
            return value.toString();
        }
        return value;
    }
    transformValue(value) {
        return this.prepareValue(value, true);
    }
    validate(_value) {
        return undefined;
    }
}
exports.XMLField = XMLField;
//# sourceMappingURL=xmlField.js.map