import { XMLDataControlledField, XMLDependencyField } from ".";
import { Utils } from "../utils";
import { Datatypes } from "../values";
import { NumberXMLField } from "./numberXMLField";

/**
 * Class to represent XML Integer Fields on XML Metadata files
 */
export class IntegerXMLField extends NumberXMLField {

    /**
     * Create new Integer XML Field instance
     * @param {string | IntegerXMLField} keyOrIntegerField XML tag name or IntegerXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrIntegerField: string | IntegerXMLField, label?: string) {
        super(keyOrIntegerField, label, Datatypes.INTEGER);
    }

    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...) 
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
     setDefinitionReference(definitionRef: string): IntegerXMLField {
        super.setDefinitionReference(definitionRef);
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setSeparator(separator: string): IntegerXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {number} defaultValue default value
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setDefaultValue(defaultValue: number): IntegerXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setReserved(value?: boolean): IntegerXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setEditable(value?: boolean): IntegerXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setRequired(value?: boolean): IntegerXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setMergeable(value?: boolean): IntegerXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setUnique(value?: boolean): IntegerXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setCompress(value?: boolean): IntegerXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setMinApi(minApi: number | string): IntegerXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setMaxApi(maxApi: number | string): IntegerXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setMetadataType(metadataType: string): IntegerXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    setValidationMessage(validationMessage: string): IntegerXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): IntegerXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): IntegerXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {IntegerXMLField} Return the IntegerXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): IntegerXMLField {
        super.addControlledField(controlledField);
        return this;
    }

    /**
     * Method to transform value to number
     * @param {any} value value to transform 
     * @returns {number} Returns the transformed value
     */
    transformValue(value: any): number {
        value = super.prepareValue(value);
        if (value && Utils.isString(value)) {
            value = parseInt(value);
        }
        return value;
    }
}