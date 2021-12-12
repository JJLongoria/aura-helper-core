import { SObjectChildRelationship } from ".";
import { Utils } from "../utils/utils";
import { RecordType } from "./recordType";
import { SObjectField } from "./sObjectField";

/**
 * Class to represent a SObject
 */
export class SObject {

    name: string;
    label: string;
    labelPlural?: string;
    keyPrefix?: string;
    custom: boolean;
    queryable: boolean;
    customSetting: boolean;
    namespace?: string;
    childRelationships: SObjectChildRelationship[];
    fields: { [key: string]: SObjectField };
    recordTypes: { [key: string]: RecordType };
    description: string;

    /**
     * Create a SObject instance
     * @param {string | { [key: string]: any }} nameOrObject SObject API Name or SObject instance
     * @param {string} [label] SObject label
     * @param {string} [labelPlural] SObject plural label
     * @param {string} [keyPrefix] SObject key prefix
     * @param {boolean} [custom] True to set SObject as custom
     */
    constructor(nameOrObject?: string | { [key: string]: any }, label?: string, labelPlural?: string, keyPrefix?: string, custom?: boolean) {
        if (nameOrObject && typeof nameOrObject !== 'string') {
            this.name = nameOrObject.name;
            this.label = nameOrObject.label;
            this.labelPlural = nameOrObject.labelPlural;
            this.keyPrefix = nameOrObject.keyPrefix;
            this.custom = (nameOrObject.custom !== undefined) ? nameOrObject.custom : false;
            this.queryable = (nameOrObject.queryable !== undefined) ? nameOrObject.queryable : true;
            this.customSetting = (nameOrObject.customSetting !== undefined) ? nameOrObject.customSetting : false;
            this.namespace = nameOrObject.namespace;
            this.fields = serializeFields(nameOrObject.fields);
            this.recordTypes = serializeRecordTypes(nameOrObject.recordTypes);
            this.childRelationships = serializeChildRelationships(nameOrObject.childRelationships);
            this.description = nameOrObject.description;
        } else {
            this.namespace = undefined;
            this.name = nameOrObject || '';
            if (this.name) {
                let splits = this.name.split('__');
                if (splits.length > 2) {
                    this.namespace = splits[0].trim();
                }
            }
            this.label = label || this.name;
            this.labelPlural = labelPlural;
            this.keyPrefix = keyPrefix;
            this.custom = (custom !== undefined) ? custom : false;
            this.queryable = true;
            this.customSetting = false;
            this.fields = {};
            this.recordTypes = {};
            this.childRelationships = [];
            this.description = '';
        }
    }

    /**
     * Method to set SObject API Name
     * @param {string} name SObject API Name
     * 
     * @returns {SObject} Return SObject instance
     */
    setName(name: string): SObject {
        let splits = name.split('__');
        let namespace = undefined;
        if (splits.length > 2) {
            namespace = splits[0].trim();
        }
        if (namespace) {
            this.namespace = namespace;
        }
        this.name = name;
        return this;
    }

    /**
     * Method to set SObject label
     * @param {string} label SObject label
     * 
     * @returns {SObject} Return SObject instance
     */
    setLabel(label: string): SObject {
        this.label = label;
        return this;
    }

    /**
     * Method to set SObject plural label
     * @param {string} labelPlural SObject plural label
     * 
     * @returns {SObject} Return SObject instance
     */
    setLabelPlural(labelPlural: string): SObject {
        this.labelPlural = labelPlural;
        return this;
    }

    /**
     * Method to set SObject key preffix
     * @param {string} keyPrefix SObject key preffix
     * 
     * @returns {SObject} Return SObject instance
     */
    setKeyPrefix(keyPrefix: string): SObject {
        this.keyPrefix = keyPrefix;
        return this;
    }

    /**
     * Method to set SObject as queriable
     * @param {boolean} queryable true to set SObject as queriable
     * 
     * @returns {SObject} Return SObject instance
     */
    setQueryable(queryable: boolean): SObject {
        this.queryable = queryable;
        return this;
    }

    /**
     * Method to set SObject as custom
     * @param {boolean} custom true to set SObject as custom
     * 
     * @returns {SObject} Return SObject instance
     */
    setCustom(custom: boolean): SObject {
        this.customSetting = (custom !== undefined) ? custom : false;
        return this;
    }

    /**
     * Method to set SObject as custom
     * @param {string} customSetting true to set SObject as custom
     * 
     * @returns {SObject} Return SObject instance
     */
    setCustomSetting(customSetting: boolean): SObject {
        this.customSetting = (customSetting !== undefined) ? customSetting : false;
        return this;
    }

    /**
     * Method to set SObject namespace
     * @param {string} namespace true to set SObject as custom
     * 
     * @returns {SObject} Return SObject instance
     */
    setNamespace(namespace: string): SObject {
        this.namespace = namespace;
        return this;
    }

    /**
     * Method to add SObjectField to the SObject
     * @param {string} name SObject field API Name
     * @param {SObjectField} field SObject Field to add
     * 
     * @returns {SObject} Return SObject instance
     */
    addField(name: string, field: SObjectField): SObject {
        if (this.name) {
            if (field.type && field.type.toLowerCase() === 'hierarchy') {
                if (!field.referenceTo.includes(this.name)) {
                    field.referenceTo.push(this.name);
                }
                field.type = 'Lookup';
            } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference') && field.name === 'ParentId') {
                field.type = 'Lookup';
                field.referenceTo.push(this.name);
            } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference') && field.name === 'OwnerId') {
                field.type = 'Lookup';
                if (!field.referenceTo.includes('User')) {
                    field.referenceTo.push('User');
                }
            } else if (field.type && (field.type.toLowerCase() === 'number' || field.type.toLowerCase() === 'currency' || field.type.toLowerCase() === 'percent')) {
                field.type = 'Decimal';
            } else if (field.type && (field.type.toLowerCase() === 'checkbox' || field.type.toLowerCase() === 'boolean')) {
                field.type = 'Boolean';
            } else if (field.type && field.type.toLowerCase() === 'datetime') {
                field.type = 'DateTime';
            } else if (field.type && field.type.toLowerCase() === 'location') {
                field.type = 'Location';
            } else if (field.type && field.type.toLowerCase() === 'date') {
                field.type = 'Date';
            } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference')) {
                field.type = 'Lookup';
                if (field.name.endsWith('Id')) {
                    let obj = field.name.substring(0, field.name.length - 2);
                    if (!field.referenceTo.includes(obj)) {
                        field.referenceTo.push(obj);
                    }
                }
            } else if (field.type && field.type.toLowerCase() === 'id') {
                field.type = 'Id';
            } else if (field.type && field.type.toLowerCase() === 'double') {
                field.type = 'Double';
            } else if (field.type && field.type.toLowerCase() === 'int') {
                field.type = 'Integer';
            } else {
                field.type = 'String';
            }
        }
        this.fields[name.toLowerCase()] = field;
        return this;
    }

    /**
     * Method get a SObjectField from SObject
     * @param {string} name SObject field API Name
     * 
     * @returns {SObjectField | undefined} Return the selected SObjectField or undefined if not exists
     */
    getField(name: string): SObjectField | undefined {
        if (!this.fields[name.toLowerCase()]) {
            return undefined;
        }
        return this.fields[name.toLowerCase()];
    }

    /**
     * Method to add RecordType to the SObject
     * @param {string} devName RecordType Developer Name
     * @param {RecordType} recordType RecordType to add
     * 
     * @returns {SObject} Return SObject instance
     */
    addRecordType(devName: string, recordType: RecordType): SObject {
        this.recordTypes[devName.toLowerCase()] = recordType;
        return this;
    }

    /**
     * Method get a RecordType from SObject
     * @param {string} devName RecordType developer name
     * 
     * @returns {SObjectField | undefined} Return the selected SObjectField or undefined if not exists
     */
    getRecordType(devName: string): RecordType | undefined {
        if (!this.recordTypes[devName.toLowerCase()]) {
            return undefined;
        }
        return this.recordTypes[devName.toLowerCase()];
    }

    /**
     * Method to add all system fields
     */
    addSystemFields(): void {
        addSystemFieldsToSObject(this);
    }

    /**
     * Method to fix all field datatypes
     */
    fixFieldTypes(): void {
        if (this.fields && Utils.hasKeys(this.fields)) {
            for (const fieldKey of Object.keys(this.fields)) {
                const field = this.fields[fieldKey];
                if (field.type && field.type.toLowerCase() === 'hierarchy') {
                    if (!field.referenceTo.includes(this.name)) {
                        field.referenceTo.push(this.name);
                    }
                    this.fields[fieldKey].type = 'Lookup';
                } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference') && field.name === 'ParentId') {
                    this.fields[fieldKey].type = 'Lookup';
                    this.fields[fieldKey].referenceTo.push(this.name);
                } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference') && field.name === 'OwnerId') {
                    this.fields[fieldKey].type = 'Lookup';
                    if (!field.referenceTo.includes('User')) {
                        this.fields[fieldKey].referenceTo.push('User');
                    }
                } else if (field.type && (field.type.toLowerCase() === 'number' || field.type.toLowerCase() === 'currency' || field.type.toLowerCase() === 'percent')) {
                    this.fields[fieldKey].type = 'Decimal';
                } else if (field.type && (field.type.toLowerCase() === 'checkbox' || field.type.toLowerCase() === 'boolean')) {
                    this.fields[fieldKey].type = 'Boolean';
                } else if (field.type && field.type.toLowerCase() === 'datetime') {
                    this.fields[fieldKey].type = 'DateTime';
                } else if (field.type && field.type.toLowerCase() === 'location') {
                    this.fields[fieldKey].type = 'Location';
                } else if (field.type && field.type.toLowerCase() === 'date') {
                    this.fields[fieldKey].type = 'Date';
                } else if (field.type && (field.type.toLowerCase() === 'lookup' || field.type.toLowerCase() === 'reference')) {
                    field.type = 'Lookup';
                    if (field.name.endsWith('Id')) {
                        let obj = field.name.substring(0, field.name.length - 2);
                        if (!field.referenceTo.includes(obj)) {
                            this.fields[fieldKey].referenceTo.push(obj);
                        }
                    }
                } else if (field.type && field.type.toLowerCase() === 'id') {
                    this.fields[fieldKey].type = 'Id';
                } else if (field.type && field.type.toLowerCase() === 'double') {
                    this.fields[fieldKey].type = 'Double';
                } else if (field.type && field.type.toLowerCase() === 'int') {
                    this.fields[fieldKey].type = 'Integer';
                } else {
                    this.fields[fieldKey].type = 'String';
                }
            }
        }
    }
}

function addSystemFieldsToSObject(sObject: SObject): void {
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
    if (!sObject.fields['recordtypeid']) {
        sObject.fields['recordtypeid'] = new SObjectField('RecordTypeId');
        sObject.fields['recordtypeid'].label = 'Record Type';
        sObject.fields['recordtypeid'].custom = false;
        sObject.fields['recordtypeid'].type = 'Lookup';
        sObject.fields['recordtypeid'].referenceTo = ['RecordType'];
        sObject.fields['recordtypeid'].nillable = false;
    }
    if (!sObject.fields['ownerid']) {
        sObject.fields['ownerid'] = new SObjectField('OwnerId');
        sObject.fields['ownerid'].label = 'Owner';
        sObject.fields['ownerid'].custom = false;
        sObject.fields['ownerid'].nillable = false;
        sObject.fields['ownerid'].referenceTo = ['User'];
        sObject.fields['ownerid'].type = 'Lookup';
    }
}

function serializeFields(objects: any): { [key: string]: SObjectField } {
    const result: { [key: string]: SObjectField } = {};
    if (objects) {
        if (Utils.isObject(objects)) {
            for (const objKey of Object.keys(objects)) {
                const item = new SObjectField(objects[objKey]);
                result[item.name.toLowerCase()] = item;
            }
        } else if (Utils.isArray(objects)) {
            for (const obj of objects) {
                const item = new SObjectField(obj);
                result[item.name.toLowerCase()] = item;
            }
        }
    }
    return result;
}

function serializeRecordTypes(objects: any): { [key: string]: RecordType } {
    const result: { [key: string]: RecordType } = {};
    if (objects) {
        if (Utils.isObject(objects)) {
            for (const objKey of Object.keys(objects)) {
                const item = new RecordType(objects[objKey]);
                result[item.developerName.toLowerCase()] = item;
            }
        } else if (Utils.isArray(objects)) {
            for (const obj of objects) {
                const item = new RecordType(obj);
                result[item.developerName.toLowerCase()] = item;
            }
        }
    }
    return result;
}

function serializeChildRelationships(objects: any): SObjectChildRelationship[] {
    const result: SObjectChildRelationship[] = [];
    if (objects) {
        for (const obj of objects) {
            const item = new SObjectChildRelationship(obj);
            result.push(item);
        }
    }
    return result;
}