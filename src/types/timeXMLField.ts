import { XMLDataControlledField, XMLDependencyField } from ".";
import { Datatypes } from "../values";
import { DateTimeXMLField } from "./dateTimeXMLField";

/**
 * Class to represent XML Time Fields on XML Metadata files
 */
export class TimeXMLField extends DateTimeXMLField {

    /**
     * Create new Time XML Field instance
     * @param {string | DateTimeXMLField} keyOrTimeField XML tag name or TimeXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrTimeField: string | DateTimeXMLField, label?: string) {
        super(keyOrTimeField, label);
        this.datatype = Datatypes.TIME;
        if (keyOrTimeField instanceof DateTimeXMLField) {
            this.format = keyOrTimeField.format;
        } else {
            this.format = undefined;
        }
    }

    /**
     * Method to set the Time format
     * @param {string} format Time format
     * @returns Returns the TimeXMLField instance
     */
    setFormat(format: string): TimeXMLField {
        this.format = format;
        return this;
    }

    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...) 
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
     setDefinitionReference(definitionRef: string): TimeXMLField {
        super.setDefinitionReference(definitionRef);
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setSeparator(separator: string): TimeXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {any} defaultValue default value
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setDefaultValue(defaultValue: any): TimeXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setReserved(value?: boolean): TimeXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setEditable(value?: boolean): TimeXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setRequired(value?: boolean): TimeXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setMergeable(value?: boolean): TimeXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setUnique(value?: boolean): TimeXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setCompress(value?: boolean): TimeXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setMinApi(minApi: number | string): TimeXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setMaxApi(maxApi: number | string): TimeXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setMetadataType(metadataType: string): TimeXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    setValidationMessage(validationMessage: string): TimeXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): TimeXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): TimeXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {TimeXMLField} Return the TimeXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): TimeXMLField {
        super.addControlledField(controlledField);
        return this;
    }
}