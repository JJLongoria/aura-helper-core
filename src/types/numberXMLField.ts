import { XMLDataControlledField, XMLDependencyField } from ".";
import { Utils } from "../utils";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML Number Fields on XML Metadata files
 */
export class NumberXMLField extends XMLField {

    minValue?: number;
    maxValue?: number;
    allowedValues?: number[];
    default?: number;

    /**
     * Create new Number XML Field instance
     * @param {string | NumberXMLField} keyOrNumberField XML tag name or NumberXMLField instance
     * @param {string} [label] XML tag label
     * @param {string} [datatype] Field datatype
     */
    constructor(keyOrNumberField: string | NumberXMLField, label?: string, datatype?: string) {
        super(keyOrNumberField, label, datatype);
        if (keyOrNumberField instanceof NumberXMLField) {
            this.minValue = keyOrNumberField.minValue;
            this.maxValue = keyOrNumberField.maxValue;
            this.allowedValues = keyOrNumberField.allowedValues;
            this.default = keyOrNumberField.default;
        } else {
            this.minValue = undefined;
            this.maxValue = undefined;
            this.allowedValues = undefined;
            this.default = 0;
        }
    }

    /**
     * Method to set the minimum field value
     * @param minValue Mimimum field value
     * @returns Returns the NumberXMLField instance
     */
    setMinValue(minValue: number): NumberXMLField {
        this.minValue = minValue;
        return this;
    }

    /**
     * Method to set the maximum field value
     * @param minValue Maximum field value
     * @returns Returns the NumberXMLField instance
     */
    setMaxValue(maxValue: number): NumberXMLField {
        this.maxValue = maxValue;
        return this;
    }

    /**
     * Method to set the allowed values to the field
     * @param minValue Allowed field values
     * @returns Returns the NumberXMLField instance
     */
    setAllowedValues(allowedValues: number | number[]): NumberXMLField {
        this.allowedValues = Utils.forceArray(allowedValues) as number[];
        return this;
    }

    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...) 
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
     setDefinitionReference(definitionRef: string): NumberXMLField {
        super.setDefinitionReference(definitionRef);
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setSeparator(separator: string): NumberXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {number} defaultValue default value
     * @returns {DoubleXMLField} Return the DoubleXMLField instance
     */
     setDefaultValue(defaultValue: number): NumberXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setReserved(value?: boolean): NumberXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setEditable(value?: boolean): NumberXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setRequired(value?: boolean): NumberXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setMergeable(value?: boolean): NumberXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setUnique(value?: boolean): NumberXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setCompress(value?: boolean): NumberXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setMinApi(minApi?: number | string): NumberXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setMaxApi(maxApi?: number | string): NumberXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setMetadataType(metadataType: string): NumberXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    setValidationMessage(validationMessage: string): NumberXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): NumberXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): NumberXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {NumberXMLField} Return the NumberXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): NumberXMLField {
        super.addControlledField(controlledField);
        return this;
    }
}