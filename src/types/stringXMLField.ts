import { XMLDataControlledField, XMLDependencyField } from ".";
import { Datatypes, DataValues } from "../values";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML String Fields on XML Metadata files
 */
export class StringXMLField extends XMLField {

    default: string;
    isBase64: boolean;
    isCSV: boolean;
    isJSON: boolean;
    matchPatterns: RegExp[];
    minLength: number;
    maxLength?: number;

    /**
     * Create new String XML Field instance
     * @param {string | StringXMLField} keyOrStringField XML tag name or StringXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrStringField: string | StringXMLField, label?: string) {
        super(keyOrStringField, label, Datatypes.STRING);
        if (keyOrStringField instanceof StringXMLField) {
            this.default = keyOrStringField.default;
            this.minLength = keyOrStringField.minLength;
            this.isBase64 = keyOrStringField.isBase64;
            this.isCSV = keyOrStringField.isCSV;
            this.isJSON = keyOrStringField.isJSON;
            this.matchPatterns = keyOrStringField.matchPatterns;
            this.maxLength = keyOrStringField.maxLength;
        } else {
            this.default = DataValues.DEFAULT_TEXT;
            this.minLength = 0;
            this.isBase64 = false;
            this.isCSV = false;
            this.isJSON = false;
            this.matchPatterns = [];
            this.maxLength = undefined;
        }
    }

    /**
     * Method to set as Base64
     * @param {boolean} value True to set as Base64, false in otherwise (true by default is param is undefined)
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setBase64(value?: boolean): StringXMLField {
        this.isBase64 = (value !== undefined) ? value : true;
        return this;
    }

    /**
     * Method to set as CSV
     * @param {boolean} value True to set as CSV, false in otherwise (true by default is param is undefined)
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setCSV(value?: boolean): StringXMLField {
        this.isCSV = (value !== undefined) ? value : true;
        return this;
    }

    /**
     * Method to set as JSON
     * @param {boolean} value True to set as JSON, false in otherwise (true by default is param is undefined)
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setJSON(value?: boolean): StringXMLField {
        this.isJSON = (value !== undefined) ? value : true;
        return this;
    }

    /**
     * Method to add Regexp Match Patterns
     * @param {RegExp} matchPattern 
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    addMatchPattern(matchPattern: RegExp): StringXMLField {
        if (this.matchPatterns === undefined) {
            this.matchPatterns = [];
        }
        this.matchPatterns.push(matchPattern);
        return this;
    }

    /**
     * Method to set the value minimum length
     * @param {number} minLength Value minimum length
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setMinLength(minLength: number): StringXMLField {
        this.minLength = minLength;
        return this;
    }

    /**
     * Method to set the value maximum length
     * @param {number} maxLength Value maximum length
     * @returns {StringXMLField} Returns the StringXMLField instance
     */
    setMaxLength(maxLength: number): StringXMLField {
        this.maxLength = maxLength;
        return this;
    }

    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...) 
     * @returns {StringXMLField} Return the StringXMLField instance
     */
     setDefinitionReference(definitionRef: string): StringXMLField {
        super.setDefinitionReference(definitionRef);
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setSeparator(separator: string): StringXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {any} defaultValue default value
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setDefaultValue(defaultValue: any): StringXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setReserved(value?: boolean): StringXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setEditable(value?: boolean): StringXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setRequired(value?: boolean): StringXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setMergeable(value?: boolean): StringXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setUnique(value?: boolean): StringXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setCompress(value?: boolean): StringXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setMinApi(minApi: number | string): StringXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setMaxApi(maxApi: number | string): StringXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setMetadataType(metadataType: string): StringXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    setValidationMessage(validationMessage: string): StringXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): StringXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): StringXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {StringXMLField} Return the StringXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): StringXMLField {
        super.addControlledField(controlledField);
        return this;
    }

    /**
     * Method to transform value to string
     * @param {any} value value to transform 
     * @returns {string} Returns the transformed value
     */
    transformValue(value: any): string {
        return super.prepareValue(value);
    }

    /**
     * Method to validate field value
     * @param {any} value value to transform 
     * @returns {string | undefined} Return the validation message or undefined if are validation are correct
     */
    validate(value: any, fieldName?: string): string | undefined {
        if (this.required && !value) {
            return 'The field ' + fieldName + ' is required';
        }
        value = this.prepareValue(value);
        if (this.matchPatterns && this.matchPatterns.length > 0 && value) {
            let pass = false;
            for (const pattern of this.matchPatterns) {
                if (pattern.test(value)) {
                    pass = true;
                    break;
                }
            }
            if (!pass) {
                return this.validationMessage;
            }
        }
        if (this.minLength && this.minLength >= 0 && this.maxLength && this.maxLength >= 0 && value) {
            if (value.length < this.minLength || value.length > this.maxLength) {
                return 'Wrong value length. The value length must be between ' + this.minLength + ' and ' + this.maxLength;
            }
        } else if (this.minLength && this.minLength >= 0 && value) {
            if (value.length < this.minLength) {
                return 'Wrong value length. The value length must be higher than ' + this.minLength + '. (Remains ' + (this.minLength - value.length) + ' characters)';
            }
        } else if (this.maxLength && this.maxLength >= 0 && value) {
            if (value.length > this.maxLength) {
                return 'Wrong value length. The value length must be lower than ' + this.maxLength + '. (' + (this.maxLength - value.length) + ' characters left)';
            }
        }
        return undefined;
    }
}