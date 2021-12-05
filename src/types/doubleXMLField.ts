import { XMLDataControlledField, XMLDependencyField } from ".";
import { Utils } from "../utils";
import { Datatypes } from "../values";
import { NumberXMLField } from "./numberXMLField";

/**
 * Class to represent XML Double Fields on XML Metadata files
 */
export class DoubleXMLField extends NumberXMLField {

    /**
     * Create new Double XML Field instance
     * @param {string | DoubleXMLField} keyOrDoubleField XML tag name or DoubleXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrDoubleField: string | DoubleXMLField, label?: string) {
        super(keyOrDoubleField, label, Datatypes.DOUBLE);
        if (keyOrDoubleField instanceof DoubleXMLField) {
            this.default = keyOrDoubleField.default;
        } else {
            this.default = 0.0;
        }
    }

    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...) 
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
     setDefinitionReference(definitionRef: string): DoubleXMLField {
        super.setDefinitionReference(definitionRef);
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setSeparator(separator: string): DoubleXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {number} defaultValue default value
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setDefaultValue(defaultValue: number): DoubleXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setReserved(value?: boolean): DoubleXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setEditable(value?: boolean): DoubleXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setRequired(value?: boolean): DoubleXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setMergeable(value?: boolean): DoubleXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setUnique(value?: boolean): DoubleXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setCompress(value?: boolean): DoubleXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setMinApi(minApi: number | string): DoubleXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setMaxApi(maxApi: number | string): DoubleXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setMetadataType(metadataType: string): DoubleXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    setValidationMessage(validationMessage: string): DoubleXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): DoubleXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): DoubleXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): DoubleXMLField {
        super.addControlledField(controlledField);
        return this;
    }

    /**
     * Method to prepare value to transform or show
     * @param {any} value value to prepare 
     * @returns {string} Returns the prepared value
     */
    prepareValue(value: any): string {
        value = super.prepareValue(value);
        let strVal = '' + value;
        if (strVal.indexOf('.') === -1) {
            strVal += '.0';
        }
        return strVal;
    }

    /**
     * Method to transform value to number
     * @param {any} value value to transform 
     * @returns {number} Returns the transformed value
     */
    transformValue(value: any): number {
        value = this.prepareValue(value);
        if (value && Utils.isString(value)) {
            value = parseFloat(value);
        }
        return value;
    }
}