const XMLField = require('./xmlField');
const DataTypes = require('../values/datatypes');
const Utils = require('../utils/utils');

class ObjectXMLField extends XMLField {
    constructor(key, label) {
        super(key, label, DataTypes.OBJECT);
    }

    setFieldKey(fieldKey) {
        this.fieldKey = fieldKey;
        if (this.sortOrder == undefined)
            this.sortOrder = Utils.forceArray(this.fieldKey);
        return this;
    }

    setSortOrder(sortOrder) {
        this.sortOrder = Utils.forceArray(sortOrder);
        return this;
    }

    setFields(fields) {
        this.fields = fields;
        return this;
    }

    addField(fieldName, xmlField) {
        if (this.fields === undefined)
            this.fields = {};
        if (xmlField.minApi < this.minApi)
            xmlField.minApi = this.minApi;
        if (this.maxApi != -1 && xmlField.maxApi == -1)
            xmlField.maxApi = this.maxApi;
        this.fields[fieldName] = xmlField;
        return this;
    }
}
module.exports = ObjectXMLField;