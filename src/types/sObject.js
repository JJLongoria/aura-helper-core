const SObjectField = require("./sObjectField");

class SObject {
    constructor(nameOrObject, label, labelPlural, keyPrefix, custom) {
        if (typeof nameOrObject === 'object') {
            this.name = nameOrObject.name;
            this.label = nameOrObject.label;
            this.labelPlural = nameOrObject.labelPlural;
            this.keyPrefix = nameOrObject.keyPrefix;
            this.custom = (nameOrObject.custom !== undefined) ? nameOrObject.custom : false;
            this.queryable = (nameOrObject.queryable !== undefined) ? nameOrObject.queryable : true;
            this.customSetting = (nameOrObject.customSetting !== undefined) ? nameOrObject.customSetting : false;
            this.namespace = nameOrObject.namespace;
            this.fields = nameOrObject.fields;
            this.recordTypes = nameOrObject.recordTypes;
        } else {
            this.name = nameOrObject;
            this.label = label;
            this.labelPlural = labelPlural;
            this.keyPrefix = keyPrefix;
            this.custom = (custom !== undefined) ? custom : false;
            this.queryable = true;
            this.customSetting = false;
            this.namespace = '';
            this.fields = {};
            this.recordTypes = [];
        }
    }

    setName(name) {
        this.name = name;
    }

    setLabel(label) {
        this.label = label;
    }

    setLabelPlural(labelPlural) {
        this.labelPlural = labelPlural;
    }

    setKeyPrefix(keyPrefix) {
        this.keyPrefix = keyPrefix;
    }

    setQueryable(queryable) {
        this.queryable = queryable;
    }

    setCustom(custom) {
        this.customSetting = (custom !== undefined) ? custom : false;
    }

    setCustomSetting(customSetting) {
        this.customSetting = (customSetting !== undefined) ? customSetting : false;
        return this;
    }

    setNamespace(namespace) {
        this.namespace = namespace;
        return this;
    }

    addField(name, field) {
        this.fields[name] = field;
        return this;
    }

    getField(name) {
        return new SObjectField(this.fields[name]);
    }

    addRecordType(recordType) {
        this.recordTypes.push(recordType);
        return this;
    }
}
module.exports = SObject;