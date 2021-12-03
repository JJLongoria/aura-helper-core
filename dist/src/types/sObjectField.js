"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SObjectField = void 0;
/**
 * Class to represent a SObject field
 */
class SObjectField {
    /**
     * Create a SObject Field instance
     * @param {string | SObjectField} nameOrSObjectField SObject field name or SObject Field instance
     * @param {string} [label] SObject field label
     * @param {string} [type] SObject field datatype
     * @param {boolean} [custom] true to check as custom field
     */
    constructor(nameOrSObjectField, label, type, custom) {
        if (typeof nameOrSObjectField === 'object') {
            this.name = nameOrSObjectField.name;
            this.label = nameOrSObjectField.label;
            this.type = nameOrSObjectField.type;
            this.custom = (nameOrSObjectField.custom !== undefined) ? nameOrSObjectField.custom : false;
            this.length = nameOrSObjectField.length;
            this.relationshipName = nameOrSObjectField.relationshipName;
            this.nillable = nameOrSObjectField.nillable;
            this.picklistValues = nameOrSObjectField.picklistValues;
            this.referenceTo = nameOrSObjectField.referenceTo;
            this.namespace = nameOrSObjectField.namespace;
            this.description = nameOrSObjectField.description;
            this.inlineHelpText = nameOrSObjectField.inlineHelpText;
        }
        else {
            this.namespace = undefined;
            this.name = nameOrSObjectField;
            if (this.name) {
                let splits = this.name.split('__');
                if (splits.length > 2) {
                    this.namespace = splits[0].trim();
                }
            }
            this.label = label || this.name;
            this.type = type || 'string';
            this.custom = (custom !== undefined) ? custom : false;
            this.length = undefined;
            this.relationshipName = undefined;
            this.nillable = true;
            this.picklistValues = [];
            this.referenceTo = [];
            this.description = '';
            this.inlineHelpText = '';
        }
    }
    /**
     * Method to set field API name
     * @param {string} name Field API Name value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setName(name) {
        let splits = name.split('__');
        let namespace = undefined;
        if (splits.length > 2) {
            namespace = splits[0].trim();
        }
        if (namespace !== undefined) {
            this.namespace = namespace;
        }
        this.name = name;
        return this;
    }
    /**
     * Method to set field label
     * @param {string} label Field label value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setLabel(label) {
        this.label = label;
        return this;
    }
    /**
     * Method to set field datatype
     * @param {string} type Field datatype value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setType(type) {
        this.type = type;
        return this;
    }
    /**
     * Method to set field as custom
     * @param {boolean} custom true tu set field as custom
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setCustom(custom) {
        this.custom = (custom !== undefined) ? custom : false;
        return this;
    }
    /**
     * Method to set field length
     * @param {number} length field length value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setLenght(length) {
        this.length = length;
        return this;
    }
    /**
     * Method to set field as nillable
     * @param {boolean} nillable true tu set field as nillable
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setNillable(nillable) {
        this.nillable = (nillable !== undefined) ? nillable : false;
        return this;
    }
    /**
     * Method to set the relationship name
     * @param {string} relationshipName Relationship name value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setRelationshipName(relationshipName) {
        this.relationshipName = relationshipName;
        return this;
    }
    /**
     * Method to set the field namespace
     * @param {string} namespace Field namespace value
     *
     * @returns {SObjectField} Return sobject field instance
     */
    setNamespace(namespace) {
        this.namespace = namespace;
        return this;
    }
    /**
     * Method add picklist value
     * @param {PicklistValue} pickVal Picklist value to add
     *
     * @returns {SObjectField} Return sobject field instance
     */
    addPicklistValue(pickVal) {
        if (!this.picklistValues) {
            this.picklistValues = [];
        }
        this.picklistValues.push(pickVal);
        return this;
    }
    /**
     * Method to add new SObject as reference
     * @param {string} ref SObject API Name as reference
     *
     * @returns {SObjectField} Return sobject field instance
     */
    addReferenceTo(ref) {
        this.referenceTo.push(ref);
        return this;
    }
}
exports.SObjectField = SObjectField;
//# sourceMappingURL=sObjectField.js.map