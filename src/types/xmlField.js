class XMLField {

    constructor(key, label, datatype) {
        if (typeof key === 'object') {
            this.key = key.key;
            this.label = key.label;
            this.datatype = key.datatype;
            this.minApi = key.minApi;
            this.maxApi = key.maxApi;
            this.editable = key.editable;
            this.merge = key.merge;
            this.unique = key.unique;
            this.required = key.required;
            this.reserved = key.reserved;
            this.separator = key.separator;
            this.defaultValue = key.defaultValue;
            this.metadataType = key.metadataType;
            this.linkToSObjects = key.linkToSObjects;
            this.fieldDependencies = key.fieldDependencies;
            this.controlledFields = key.controlledFields;
        } else {
            this.key = key;
            this.label = label;
            this.datatype = datatype;
            this.minApi = 1;
            this.maxApi = -1;
            this.editable = false;
            this.merge = false;
            this.unique = false;
            this.required = false;
            this.reserved = false;
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
}
module.exports = XMLField;