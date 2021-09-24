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
        if (namespace)
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
        if (this.name) {
            if (field.type && field.type.toLowerCase() === 'hierarchy') {
                if (!field.referenceTo.includes(this.name))
                    field.referenceTo.push(this.name);
                field.type = 'Lookup';
            } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference') && field.name === 'ParentId') {
                field.type = 'Lookup';
                field.referenceTo.push(this.name);
            } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference') && field.name === 'OwnerId') {
                field.type = 'Lookup';
                if (!field.referenceTo.includes('User'))
                    field.referenceTo.push('User');
            } else if (field.type && (field.type.toLowerCase() === 'number' || field.type.toLowerCase() === 'currency'))
                field.type = 'Decimal';
            else if (field.type && field.type.toLowerCase() === 'checkbox')
                field.type = 'Boolean';
            else if (field.type && field.type.toLowerCase() === 'datetime')
                field.type = 'DateTime';
            else if (field.type && field.type.toLowerCase() === 'location')
                field.type = 'Location';
            else if (field.type && field.type.toLowerCase() === 'date')
                field.type = 'Date';
            else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference'))
                field.type = 'Lookup';
            else if (field.type && field.type.toLowerCase() === 'id')
                field.type = 'Id';
            else
                field.type = 'String';
        }
        this.fields[name.toLowerCase()] = field;
        return this;
    }

    getField(name) {
        return new SObjectField(this.fields[name.toLowerCase()]);
    }

    addRecordType(devName, recordType) {
        this.recordTypes[devName.toLowerCase()] = recordType;
        return this;
    }

    getRecordType(devName) {
        return new RecordType(this.recordTypes[devName.toLowerCase()]);
    }

    addSystemFields() {
        addSystemFieldsToSObject(this);
    }

    fixFieldTypes() {
        if (this.fields && Utils.hasKeys(this.fields)) {
            for (const fieldKey of Object.keys(this.fields)) {
                const field = this.fields[fieldKey];
                if (field.type && field.type.toLowerCase() === 'hierarchy') {
                    if (!field.referenceTo.includes(this.name))
                        field.referenceTo.push(this.name);
                    this.fields[fieldKey].type = 'Lookup';
                } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference') && field.name === 'ParentId') {
                    this.fields[fieldKey].type = 'Lookup';
                    this.fields[fieldKey].referenceTo.push(this.name);
                } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference') && field.name === 'OwnerId') {
                    this.fields[fieldKey].type = 'Lookup';
                    if (!field.referenceTo.includes('User'))
                        this.fields[fieldKey].referenceTo.push('User');
                } else if (field.type && (field.type.toLowerCase() === 'number' || field.type.toLowerCase() === 'currency'))
                    this.fields[fieldKey].type = 'Decimal';
                else if (field.type && field.type.toLowerCase() === 'checkbox')
                    this.fields[fieldKey].type = 'Boolean';
                else if (field.type && field.type.toLowerCase() === 'datetime')
                    this.fields[fieldKey].type = 'DateTime';
                else if (field.type && field.type.toLowerCase() === 'location')
                    this.fields[fieldKey].type = 'Location';
                else if (field.type && field.type.toLowerCase() === 'date')
                    this.fields[fieldKey].type = 'Date';
                else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference'))
                    this.fields[fieldKey].type = 'Lookup';
                else if (field.type && field.type.toLowerCase() === 'id')
                    this.fields[fieldKey].type = 'Id';
                else
                    this.fields[fieldKey].type = 'String';
            }
        }
    }
}
module.exports = SObject;

function addSystemFieldsToSObject(sObject) {
    if (!sObject.fields['id']) {
        sObject.fields['id'] = new SObjectField('Id');
        sObject.fields['id'].label = sObject.name + ' Id';
        sObject.fields['id'].custom = false;
        sObject.fields['id'].length = 18;
        sObject.fields['id'].nillable = true;
        sObject.fields['id'].type = 'Id';
    }
    if (!sObject.fields['isdeleted']) {
        sObject.fields['isdeleted'] = new SObjectField('IsDeleted');
        sObject.fields['isdeleted'].label = 'Is Deleted';
        sObject.fields['isdeleted'].custom = false;
        sObject.fields['isdeleted'].type = 'Boolean';
    }
    if (!sObject.fields['createdbyid']) {
        sObject.fields['createdbyid'] = new SObjectField('CreatedById');
        sObject.fields['createdbyid'].label = 'Created By';
        sObject.fields['createdbyid'].custom = false;
        sObject.fields['createdbyid'].referenceTo = ['User'];
        sObject.fields['createdbyid'].type = 'Lookup';
    }
    if (!sObject.fields['createddate']) {
        sObject.fields['createddate'] = new SObjectField('CreatedDate');
        sObject.fields['createddate'].label = 'Created Date';
        sObject.fields['createddate'].custom = false;
        sObject.fields['createddate'].type = 'DateTime';
    }
    if (!sObject.fields['lastmodifiedbyid']) {
        sObject.fields['lastmodifiedbyid'] = new SObjectField('LastModifiedById');
        sObject.fields['lastmodifiedbyid'].label = 'Last Modified By';
        sObject.fields['lastmodifiedbyid'].custom = false;
        sObject.fields['lastmodifiedbyid'].nillable = true;
        sObject.fields['lastmodifiedbyid'].referenceTo = ['User'];
        sObject.fields['lastmodifiedbyid'].type = 'Lookup';
    }
    if (!sObject.fields['lastmodifieddate']) {
        sObject.fields['lastmodifieddate'] = new SObjectField('LastModifiedDate');
        sObject.fields['lastmodifieddate'].label = 'Last Modified Date';
        sObject.fields['lastmodifieddate'].custom = false;
        sObject.fields['lastmodifieddate'].type = 'DateTime';
    }
    if (!sObject.fields['systemmodstamp']) {
        sObject.fields['systemmodstamp'] = new SObjectField('SystemModStamp');
        sObject.fields['systemmodstamp'].label = 'System Mod Stamp';
        sObject.fields['systemmodstamp'].custom = false;
        sObject.fields['systemmodstamp'].type = 'DateTime';
    }
}