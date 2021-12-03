import { RecordType } from "./recordType";
import { SObjectField } from "./sObjectField";
/**
 * Class to represent a SObject
 */
export declare class SObject {
    name: string;
    label: string;
    labelPlural?: string;
    keyPrefix?: string;
    custom: boolean;
    queryable: boolean;
    customSetting: boolean;
    namespace?: string;
    fields: {
        [key: string]: SObjectField;
    };
    recordTypes: {
        [key: string]: RecordType;
    };
    description: string;
    /**
     * Create a SObject instance
     * @param {string | SObject} nameOrObject SObject API Name or SObject instance
     * @param {string} [label] SObject label
     * @param {string} [labelPlural] SObject plural label
     * @param {string} [keyPrefix] SObject key prefix
     * @param {boolean} [custom] True to set SObject as custom
     */
    constructor(nameOrObject: string | SObject, label?: string, labelPlural?: string, keyPrefix?: string, custom?: boolean);
    /**
     * Method to set SObject API Name
     * @param {string} name SObject API Name
     *
     * @returns {SObject} Return SObject instance
     */
    setName(name: string): SObject;
    /**
     * Method to set SObject label
     * @param {string} label SObject label
     *
     * @returns {SObject} Return SObject instance
     */
    setLabel(label: string): SObject;
    /**
     * Method to set SObject plural label
     * @param {string} labelPlural SObject plural label
     *
     * @returns {SObject} Return SObject instance
     */
    setLabelPlural(labelPlural: string): SObject;
    /**
     * Method to set SObject key preffix
     * @param {string} keyPrefix SObject key preffix
     *
     * @returns {SObject} Return SObject instance
     */
    setKeyPrefix(keyPrefix: string): SObject;
    /**
     * Method to set SObject as queriable
     * @param {boolean} queryable true to set SObject as queriable
     *
     * @returns {SObject} Return SObject instance
     */
    setQueryable(queryable: boolean): SObject;
    /**
     * Method to set SObject as custom
     * @param {boolean} custom true to set SObject as custom
     *
     * @returns {SObject} Return SObject instance
     */
    setCustom(custom: boolean): SObject;
    /**
     * Method to set SObject as custom
     * @param {string} customSetting true to set SObject as custom
     *
     * @returns {SObject} Return SObject instance
     */
    setCustomSetting(customSetting: boolean): SObject;
    /**
     * Method to set SObject namespace
     * @param {string} namespace true to set SObject as custom
     *
     * @returns {SObject} Return SObject instance
     */
    setNamespace(namespace: string): SObject;
    /**
     * Method to add SObjectField to the SObject
     * @param {string} name SObject field API Name
     * @param {SObjectField} field SObject Field to add
     *
     * @returns {SObject} Return SObject instance
     */
    addField(name: string, field: SObjectField): SObject;
    /**
     * Method get a SObjectField from SObject
     * @param {string} name SObject field API Name
     *
     * @returns {SObjectField | undefined} Return the selected SObjectField or undefined if not exists
     */
    getField(name: string): SObjectField | undefined;
    /**
     * Method to add RecordType to the SObject
     * @param {string} devName RecordType Developer Name
     * @param {RecordType} recordType RecordType to add
     *
     * @returns {SObject} Return SObject instance
     */
    addRecordType(devName: string, recordType: RecordType): SObject;
    /**
     * Method get a RecordType from SObject
     * @param {string} devName RecordType developer name
     *
     * @returns {SObjectField | undefined} Return the selected SObjectField or undefined if not exists
     */
    getRecordType(devName: string): RecordType | undefined;
    /**
     * Method to add all system fields
     */
    addSystemFields(): void;
    /**
     * Method to fix all field datatypes
     */
    fixFieldTypes(): void;
}
