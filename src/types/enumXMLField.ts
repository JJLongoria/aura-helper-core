import { XMLDataControlledField, XMLDependencyField } from ".";
import { Utils } from "../utils";
import { Datatypes, DataValues } from "../values";
import { EnumXMLFieldValue } from "./enumXMLFieldValue";
import { XMLField } from "./xmlField";

/**
 * Class to represent XML Enum Fields on XML Metadata files
 */
export class EnumXMLField extends XMLField {

    multichoice: boolean;
    values: EnumXMLFieldValue[];
    default: string;

    /**
     * Create new Enum XML Field instance
     * @param {string | EnumXMLField} keyOrEnumField XML tag name or EnumXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrEnumField: string | EnumXMLField, label?: string) {
        super(keyOrEnumField, label, Datatypes.ENUM);
        if (keyOrEnumField instanceof EnumXMLField) {
            this.multichoice = keyOrEnumField.multichoice;
            this.values = keyOrEnumField.values;
            this.default = keyOrEnumField.default;
        } else {
            this.multichoice = false;
            this.values = [];
            this.default = DataValues.DEFAULT_TEXT;
        }
    }

    /**
     * Method to set as mutichoice enum
     * @param {boolean} value True to set as mutichoice, false in otherwise (true by default is param is undefined)
     * @returns {EnumXMLField} Returns the StringXMLField instance
     */
    setMultiChoice(value?: boolean): EnumXMLField {
        this.multichoice = (value !== undefined) ? value : true;
        return this;
    }

    /**
     * Method to set enum values
     * @param {EnumXMLFieldValue[]} values Enum values to set 
     * @param {number} [minApi] Minimum API Version
     * @param {number} [maxApi] Maximum API Version
     * @returns {EnumXMLField} Returns the StringXMLField instance
     */
    setEnumValues(values: EnumXMLFieldValue[], minApi?: number, maxApi?: number) {
        this.values = Utils.forceArray(values) as EnumXMLFieldValue[];
        if (this.values !== undefined) {
            for (let value of this.values) {
                value.minApi = (minApi !== undefined) ? minApi : this.minApi;
                value.maxApi = (maxApi !== undefined) ? maxApi : this.maxApi;
            }
        }
        return this;
    }

    /**
     * Method to add enum values
     * @param {string} label Enum value label
     * @param {string} value Enum value
     * @param {number} [minApi] Minimum API Version
     * @param {number} [maxApi] Maximum API Version
     * @returns {EnumXMLField} Returns the StringXMLField instance
     */
    addEnumValue(label: string, value: string, minApi?: number, maxApi?: number) {
        if (this.values === undefined) {
            this.values = [];
        }
        this.values.push({
            label: label,
            value: value,
            minApi: (minApi !== undefined) ? minApi : this.minApi,
            maxApi: (maxApi !== undefined) ? maxApi : this.maxApi
        });
        return this;
    }

    /**
     * Method to get enum value using label
     * @param {string} label label to get value
     * @returns {string | undefined} Returns the selected value or undefined if not exists
     */
    getValue(label: string): string | undefined {
        for (let enumVal of this.values) {
            if (enumVal.label === label) {
                return enumVal.value;
            }
        }
        return undefined;
    }

    /**
     * Method to get enum label using value
     * @param {string} value value to get label
     * @returns {string | undefined} Returns the selected label or undefined if not exists
     */
    getLabel(value: string): string | undefined {
        for (let enumVal of this.values) {
            if (enumVal.value === value) {
                return enumVal.label;
            }
        }
        return undefined;
    }

    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...) 
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
     setDefinitionReference(definitionRef: string): EnumXMLField {
        super.setDefinitionReference(definitionRef);
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setSeparator(separator: string): EnumXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {any} defaultValue default value
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setDefaultValue(defaultValue: any): EnumXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setReserved(value?: boolean): EnumXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setEditable(value?: boolean): EnumXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setRequired(value?: boolean): EnumXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setMergeable(value?: boolean): EnumXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setUnique(value?: boolean): EnumXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setCompress(value?: boolean): EnumXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setMinApi(minApi: number | string): EnumXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setMaxApi(maxApi: number | string): EnumXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setMetadataType(metadataType: string): EnumXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    setValidationMessage(validationMessage: string): EnumXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): EnumXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): EnumXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {EnumXMLField} Return the EnumXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): EnumXMLField {
        super.addControlledField(controlledField);
        return this;
    }

    /**
     * Method to transform value to string
     * @param {any} value value to transform 
     * @returns {string} Returns the transformed value
     */
    transformValue(value: any): string {
        if (value) {
            value = value.toString();
        }
        return value;
    }

}