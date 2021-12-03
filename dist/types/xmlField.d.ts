import { XMLDataControlledField } from "./xmlDataControlledField";
import { XMLDependencyField } from "./xmlDependencyField";
import { XMLFieldSObjectRelationship } from "./xmlFieldSObjectRelationship";
/**
 * Class to represent XML Fields on XML Metadata files
 */
export declare class XMLField {
    key: string;
    label: string;
    datatype: string;
    minApi: number;
    maxApi: number;
    creatable: boolean;
    editable: boolean;
    merge: boolean;
    unique: boolean;
    required: boolean;
    reserved: boolean;
    separator?: string;
    defaultValue: any;
    metadataType?: string;
    linkToSObjects?: XMLFieldSObjectRelationship[];
    fieldDependencies?: any;
    controlledFields?: any;
    compress: boolean;
    validationMessage: string;
    definitionRef?: string;
    /**
     * Create new XML Field instance
     * @param {string | XMLField} keyOrXMLField XML Key (tag name) value or XML Field instance
     * @param {string} [label] XML Field label to the tag
     * @param {string} [datatype] XML Field datatype
     */
    constructor(keyOrXMLField: string | XMLField, label?: string, datatype?: string);
    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...)
     * @returns {XMLField} Return the XML Field instance
     */
    setDefinitionReference(definitionRef: string): XMLField;
    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {XMLField} Return the XML Field instance
     */
    setSeparator(separator: string): XMLField;
    /**
     * Method to set the XML Field default value
     * @param {any} defaultValue default value
     * @returns {XMLField} Return the XML Field instance
     */
    setDefaultValue(defaultValue: any): XMLField;
    /**
     * Method to set XML field as reserved
     * @param {boolean} value true to set XML field as reserved
     * @returns {XMLField} Return the XML Field instance
     */
    setReserved(value: boolean): XMLField;
    /**
     * Method to set XML field as editable
     * @param {boolean} value true to set XML field as editable
     * @returns {XMLField} Return the XML Field instance
     */
    setEditable(value: boolean): XMLField;
    /**
     * Method to set XML field as required
     * @param {boolean} value true to set XML field as required
     * @returns {XMLField} Return the XML Field instance
     */
    setRequired(value: boolean): XMLField;
    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} value true to set XML field as mergeable
     * @returns {XMLField} Return the XML Field instance
     */
    setMergeable(value: boolean): XMLField;
    /**
     * Method to set XML field as unique
     * @param {boolean} value true to set XML field as unique
     * @returns {XMLField} Return the XML Field instance
     */
    setUnique(value: boolean): XMLField;
    /**
     * Method to set if this XML must to compress
     * @param {boolean} value true to set field to compress
     * @returns {XMLField} Return the XML Field instance
     */
    setCompress(value: boolean): XMLField;
    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number} minApi API Version minimum value
     * @returns {XMLField} Return the XML Field instance
     */
    setMinApi(minApi: number): XMLField;
    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number} maxApi API Version maximum value
     * @returns {XMLField} Return the XML Field instance
     */
    setMaxApi(maxApi: number): XMLField;
    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {XMLField} Return the XML Field instance
     */
    setMetadataType(metadataType: string): XMLField;
    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {XMLField} Return the XML Field instance
     */
    setValidationMessage(validationMessage: string): XMLField;
    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {XMLField} Return the XML Field instance
     */
    linkFieldToSObject(sObject: string, field?: string): XMLField;
    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {XMLField} Return the XML Field instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): XMLField;
    addControlledField(controlledField: XMLDataControlledField): XMLField;
    prepareValue(value: any, originalValue?: any): any;
    transformValue(value: any): any;
    validate(_value: any): any;
}
