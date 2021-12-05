import { XMLDataControlledField, XMLDependencyField } from ".";
import { Utils } from "../utils";
import { Datatypes } from "../values";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML Boolean Fields on XML Metadata files
 */
export class BooleanXMLField extends XMLField {

    default: boolean;

    /**
     * Create new Boolean XML field instance
     * @param {string | BooleanXMLField} keyOrBooleanField XML tag name or BooleanXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrBooleanField: string | BooleanXMLField, label?: string) {
        super(keyOrBooleanField, label, Datatypes.BOOLEAN);
        if(keyOrBooleanField instanceof BooleanXMLField){
            this.default = keyOrBooleanField.default;
        } else {
            this.default = false;
        }
    }

    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...) 
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
     setDefinitionReference(definitionRef: string): BooleanXMLField {
        super.setDefinitionReference(definitionRef);
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setSeparator(separator: string): BooleanXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {boolean} defaultValue default value
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setDefaultValue(defaultValue: boolean): BooleanXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setReserved(value?: boolean): BooleanXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setEditable(value?: boolean): BooleanXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setRequired(value?: boolean): BooleanXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setMergeable(value?: boolean): BooleanXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setUnique(value?: boolean): BooleanXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setCompress(value?: boolean): BooleanXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setMinApi(minApi?: number | string): BooleanXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setMaxApi(maxApi?: number | string): BooleanXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setMetadataType(metadataType: string): BooleanXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    setValidationMessage(validationMessage: string): BooleanXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): BooleanXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): BooleanXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {BooleanXMLField} Return the BooleanXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): BooleanXMLField {
        super.addControlledField(controlledField);
        return this;
    }

    /**
     * Method to transform value to boolean
     * @param {any} value value to transform 
     * @returns {boolean} Returns the transformed value
     */
    transformValue(value?: any): boolean {
        if (value !== undefined && !Utils.isBoolean(value)){
            value = value === 'true';
        }
        return value;
    }
}