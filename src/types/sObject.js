const SObjectField = require("./sObjectField");
const RecordType = require("./recordType");
const Utils = require('../utils/utils');

class SObject {
    constructor(nameOrObject, label, labelPlural, keyPrefix, custom) {
        if (Utils.isObject(nameOrObject)) {
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
            this.recordTypes = {};
        }
    }

    setName(name) {
        let splits = name.split('__');
        let namespace = undefined;
        if (splits.length > 2) {
            namespace = splits[0].trim();
        }
        if(namespace)
            this.namespace = namespace;
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

    addRecordType(devName, recordType) {
        this.recordTypes[devName] = recordType;
        return this;
    }

    getRecordType(devName) {
        return new RecordType(this.recordTypes[devName]);
    }
}
module.exports = SObject;