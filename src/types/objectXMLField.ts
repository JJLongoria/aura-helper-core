import { XMLDataControlledField, XMLDependencyField } from ".";
import { Utils } from "../utils";
import { Datatypes } from "../values";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML Object Fields on XML Metadata files, that is, a XML filed with inner fields
 */
export class ObjectXMLField extends XMLField {

    fieldKey: string;
    sortOrder?: string[];
    fields: { [key: string]: XMLField };

    /**
     * Create new Object XML Field instance
     * @param {string | ObjectXMLField} keyOrObjectField XML tag name or ObjectXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrObjectField: string | ObjectXMLField, label?: string) {
        super(keyOrObjectField, label, Datatypes.OBJECT);
        if (keyOrObjectField instanceof ObjectXMLField) {
            this.fieldKey = keyOrObjectField.fieldKey;
            this.sortOrder = keyOrObjectField.sortOrder;
            this.fields = keyOrObjectField.fields;
        } else {
            this.fieldKey = keyOrObjectField;
            this.sortOrder = undefined;
            this.fields = {};
        }
    }

    /**
     * Method to set the field key of the object, that is, the main object field
     * @param {string} fieldKey Field key tag name
     * @returns {ObjectXMLField} Returns the ObjectXMLField instance
     */
    setFieldKey(fieldKey: string): ObjectXMLField {
        this.fieldKey = fieldKey;
        if (this.sortOrder === undefined) {
            this.sortOrder = Utils.forceArray(this.fieldKey) as string[];
        }
        return this;
    }

    /**
     * Method to set the sort order field(s) to sort fields on XML
     * @param {string | string[]} sortOrder Sort order field(s)
     * @returns {ObjectXMLField} Returns the ObjectXMLField instance
     */
    setSortOrder(sortOrder: string | string[]) {
        this.sortOrder = Utils.forceArray(sortOrder) as string[];
        return this;
    }

    /**
     * Method to set the XML Object fields
     * @param {{ [key: string]: XMLField }} fields fields to set
     * @returns {ObjectXMLField} Returns the ObjectXMLField instance
     */
    setFields(fields: { [key: string]: XMLField }) {
        this.fields = fields;
        return this;
    }

    /**
     * Method to add field to XML Object field
     * @param {string} fieldName Field tag name 
     * @param {XMLField} xmlField XML Field to add
     * @returns {ObjectXMLField} Returns the ObjectXMLField instance
     */
    addField(fieldName: string, xmlField: XMLField) {
        if (this.fields === undefined){
            this.fields = {};
        }
        if (xmlField.minApi < this.minApi){
            xmlField.minApi = this.minApi;
        }
        if (this.maxApi !== -1 && xmlField.maxApi === -1){
            xmlField.maxApi = this.maxApi;
        }
        this.fields[fieldName] = xmlField;
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
     setSeparator(separator: string): ObjectXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {any} defaultValue default value
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
     setDefaultValue(defaultValue: any): ObjectXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setReserved(value?: boolean): ObjectXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setEditable(value?: boolean): ObjectXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setRequired(value?: boolean): ObjectXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setMergeable(value?: boolean): ObjectXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setUnique(value?: boolean): ObjectXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setCompress(value?: boolean): ObjectXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setMinApi(minApi?: number | string): ObjectXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setMaxApi(maxApi?: number | string): ObjectXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setMetadataType(metadataType: string): ObjectXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    setValidationMessage(validationMessage: string): ObjectXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): ObjectXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): ObjectXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {ObjectXMLField} Return the ObjectXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): ObjectXMLField {
        super.addControlledField(controlledField);
        return this;
    }
}