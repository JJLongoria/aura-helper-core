import { PicklistValue } from "./picklistValue";
/**
 * Class to represent a SObject field
 */
export declare class SObjectField {
    name: string;
    label: string;
    type: string;
    custom: boolean;
    length?: number;
    relationshipName?: string;
    nillable?: boolean;
    picklistValues?: PicklistValue[];
    referenceTo: string[];
    namespace?: string;
    description?: string;
    inlineHelpText?: string;
    /**
     * Create a SObject Field instance
     * @param {string | SObjectField} nameOrSObjectField SObject field name or SObject Field instance
     * @param {string} [label] SObject field label
     * @param {string} [type] SObject field datatype
     * @param {boolean} [custom] true to check as custom field
     */
    constructor(nameOrSObjectField: string | SObjectField, label?: string, type?: string, custom?: boolean);
    /**
     * Method to set field API name
     * @param {string} name Field API Name value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setName(name: string): SObjectField;
    /**
     * Method to set field label
     * @param {string} label Field label value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setLabel(label: string): SObjectField;
    /**
     * Method to set field datatype
     * @param {string} type Field datatype value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setType(type: string): SObjectField;
    /**
     * Method to set field as custom
     * @param {boolean} custom true tu set field as custom
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setCustom(custom: boolean): SObjectField;
    /**
     * Method to set field length
     * @param {number} length field length value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setLenght(length: number): SObjectField;
    /**
     * Method to set field as nillable
     * @param {boolean} nillable true tu set field as nillable
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setNillable(nillable: boolean): SObjectField;
    /**
     * Method to set the relationship name
     * @param {string} relationshipName Relationship name value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setRelationshipName(relationshipName: string): SObjectField;
    /**
     * Method to set the field namespace
     * @param {string} namespace Field namespace value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setNamespace(namespace: string): SObjectField;
    /**
     * Method add picklist value
     * @param {PicklistValue} pickVal Picklist value to add
     *
     * @returns {SObjectField} Return sobject field instance
     */
    addPicklistValue(pickVal: PicklistValue): SObjectField;
    /**
     * Method to add new SObject as reference
     * @param {string} ref SObject API Name as reference
     *
     * @returns {SObjectField} Return sobject field instance
     */
    addReferenceTo(ref: string): SObjectField;
}
