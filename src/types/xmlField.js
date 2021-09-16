const Utils = require('../utils/utils');

class XMLField {

    constructor(keyOrObject, label, datatype) {
        if (Utils.isObject(keyOrObject)) {
            this.key = keyOrObject.key;
            this.label = keyOrObject.label;
            this.datatype = keyOrObject.datatype;
            this.minApi = keyOrObject.minApi;
            this.maxApi = keyOrObject.maxApi;
            this.creatable = keyOrObject.creatable;
            this.editable = keyOrObject.editable;
            this.merge = keyOrObject.merge;
            this.unique = keyOrObject.unique;
            this.required = keyOrObject.required;
            this.reserved = keyOrObject.reserved;
            this.separator = keyOrObject.separator;
            this.defaultValue = keyOrObject.defaultValue;
            this.metadataType = keyOrObject.metadataType;
            this.linkToSObjects = keyOrObject.linkToSObjects;
            this.fieldDependencies = keyOrObject.fieldDependencies;
            this.controlledFields = keyOrObject.controlledFields;
            this.compress = keyOrObject.compress;
            this.validationMessage = keyOrObject.validationMessage;
        } else {
            this.key = keyOrObject;
            this.label = label;
            this.datatype = datatype;
            this.minApi = 1;
            this.maxApi = -1;
            this.creatable = true;
            this.editable = false;
            this.merge = false;
            this.unique = false;
            this.required = false;
            this.reserved = false;
            this.compress = false;
            this.patternValidationMessage = 'Validation failed';
        }
    }

    setDefinitionReference(definitionRef) {
        this.definitionRef = definitionRef;
        return this;
    }

    setSeparator(separator) {
        this.separator = separator;
        return this;
    }

    setDefaultValue(defaultValue) {
        this.default = defaultValue;
        return this;
    }

    setReserved(value) {
        this.reserved = (value !== undefined) ? value : true;
        return this;
    }

    setEditable(value) {
        this.editable = (value !== undefined) ? value : true;
        return this;
    }

    setRequired(value) {
        this.required = (value !== undefined) ? value : true;
        return this;
    }

    setMergeable(value) {
        this.merge = (value !== undefined) ? value : true;
        return this;
    }

    setUnique(value) {
        this.unique = (value !== undefined) ? value : true;
        return this;
    }

    setMinApi(minApi) {
        this.minApi = (minApi != undefined) ? minApi : 1;
        return this;
    }

    setMaxApi(maxApi) {
        this.maxApi = (maxApi != undefined) ? maxApi : -1;
        return this;
    }

    setMetadataType(metadataType) {
        this.metadataType = metadataType;
        return this;
    }

    setPatternValidationMessage() {
        this.patternValidationMessage = this.patternValidationMessage;
        return this;
    }

    linkFieldToSObject(sObject, field) {
        if (this.linkToSObjects === undefined)
            this.linkToSObjects = [];
        this.linkToSObjects.push({
            sObject: sObject,
            field: (field === undefined) ? 'Id' : field
        })
        return this;
    }

    addDependencyField(fieldDependency) {
        if (this.fieldDependencies === undefined)
            this.fieldDependencies = [];
        if (fieldDependency.minApi < this.minApi)
            fieldDependency.minApi = this.minApi;
        if (this.maxApi != -1 && !fieldDependency.maxApi)
            fieldDependency.maxApi = this.maxApi;
        this.fieldDependencies.push(fieldDependency);
        return this;
    }

    addControlledField(controlledField) {
        if (this.controlledFields === undefined)
            this.controlledFields = [];
        if (controlledField.minApi < this.minApi)
            controlledField.minApi = this.minApi;
        if (this.maxApi != -1 && !controlledField.maxApi)
            controlledField.maxApi = this.maxApi;
        this.controlledFields.push(controlledField);
        return this;
    }

    prepareValue(value, originalValue) {
        let empty = value === undefined || value === null || value === '';
        if (!empty)
            value = Utils.clone(value);
        if (!empty && value['#text'] !== undefined) {
            value = value['#text'];
        }
        if (!empty && value !== undefined && value['@attrs'] !== undefined) {
            delete value['@attrs'];
        }
        if (value && !Array.isArray(value) && typeof value === 'object' && Object.keys(value).length === 0) {
            value = '';
        }
        if (value && !originalValue)
            return value.toString();
        return value
    }

    transformValue(value){
        return this.prepareValue(value, true);
    }

    setCompress(value) {
        this.compress = (value !== undefined) ? value : true;
        return this;
    }

    validate(value) {
        return undefined;
    }
}
module.exports = XMLField;