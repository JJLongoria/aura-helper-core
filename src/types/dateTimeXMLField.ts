import { XMLDataControlledField, XMLDependencyField } from ".";
import { Datatypes } from "../values";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML Date Time Fields on XML Metadata files
 */
export class DateTimeXMLField extends XMLField {

    format?: string;

    /**
     * Create new Date Time XML Field instance
     * @param {string | DateTimeXMLField} keyOrDatetimeField XML tag name or DateTimeXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrDatetimeField: string | DateTimeXMLField, label?: string) {
        super(keyOrDatetimeField, label, Datatypes.DATE_TIME);
        if (keyOrDatetimeField instanceof DateTimeXMLField) {
            this.format = keyOrDatetimeField.format;
        } else {
            this.format = undefined;
        }
    }

    /**
     * Method to set the Date format
     * @param {string} format Date format
     * @returns Returns the DateTimeXMLField instance
     */
    setFormat(format: string): DateTimeXMLField {
        this.format = format;
        return this;
    }

    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...) 
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
     setDefinitionReference(definitionRef: string): DateTimeXMLField {
        super.setDefinitionReference(definitionRef);
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setSeparator(separator: string): DateTimeXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {any} defaultValue default value
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setDefaultValue(defaultValue: any): DateTimeXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setReserved(value?: boolean): DateTimeXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setEditable(value?: boolean): DateTimeXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setRequired(value?: boolean): DateTimeXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setMergeable(value?: boolean): DateTimeXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setUnique(value?: boolean): DateTimeXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setCompress(value?: boolean): DateTimeXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setMinApi(minApi: number | string): DateTimeXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setMaxApi(maxApi: number | string): DateTimeXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setMetadataType(metadataType: string): DateTimeXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    setValidationMessage(validationMessage: string): DateTimeXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): DateTimeXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): DateTimeXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {DateTimeXMLField} Return the DateTimeXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): DateTimeXMLField {
        super.addControlledField(controlledField);
        return this;
    }
}