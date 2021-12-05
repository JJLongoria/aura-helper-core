import { XMLDataControlledField, XMLDependencyField } from ".";
import { Datatypes } from "../values";
import { EnumXMLFieldValue } from "./enumXMLFieldValue";
import { ObjectXMLField } from "./objectXMLField";

/**
 * Class to represent XML Array Fields on XML Metadata files, that is, a XML filed with inner fields like and Object XML Field but allow repeat
 */
export class ArrayXMLField extends ObjectXMLField {

    maxItems?: number;
    allowedValues?: EnumXMLFieldValue[];

    /**
     * Create new Array XML Field instance
     * @param {string | ArrayXMLField} keyOrArrayField XML tag name or ArrayXMLField instance
     * @param {string} [label] XML tag label
     */
    constructor(keyOrArrayField: string | ArrayXMLField, label?: string) {
        super(keyOrArrayField, label);
        if (keyOrArrayField instanceof ArrayXMLField) {
            this.maxItems = keyOrArrayField.maxItems;
            this.allowedValues = keyOrArrayField.allowedValues;
        }
        this.datatype = Datatypes.ARRAY;
    }

    /**
     * Method to set the maximum allowed items into the array
     * @param maxItems Max allowed items
     * @returns {ArrayXMLField} Returns the ArrayXMLField instance
     */
    setMaxItems(maxItems: number): ArrayXMLField {
        this.maxItems = maxItems;
        return this;
    }

    /**
     * Method to add enum values
     * @param {string} label Enum value label
     * @param {string} value Enum value
     * @param {number | string} [minApi] Minimum API Version
     * @param {number | string} [maxApi] Maximum API Version
     * @returns {ArrayXMLField} Returns the ArrayXMLField instance
     */
    addAllowedValue(label: string, value: string, minApi?: number | string, maxApi?: number | string) {
        if (this.allowedValues === undefined) {
            this.allowedValues = [];
        }
        this.allowedValues.push({
            label: label,
            value: value,
            minApi: (minApi !== undefined) ? minApi : this.minApi,
            maxApi: (maxApi !== undefined) ? maxApi : this.maxApi
        });
        return this;
    }

    /**
     * Method to set the XML Definition Reference when has the Same reference that other type in the same XML file
     * @param {string} definitionRef Definition Reference (formats: keyName || mainKey>definitionToReference || mainKey>childKey>definitionToReference...) 
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
     setDefinitionReference(definitionRef: string): ArrayXMLField {
        super.setDefinitionReference(definitionRef);
        return this;
    }

    /**
     * Method to set the XML Field value separator like name-value or name.value
     * @param {string} separator separator value like - or .
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setSeparator(separator: string): ArrayXMLField {
        super.setSeparator(separator);
        return this;
    }

    /**
     * Method to set the XML Field default value
     * @param {any} defaultValue default value
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setDefaultValue(defaultValue: any): ArrayXMLField {
        super.setDefaultValue(defaultValue);
        return this;
    }

    /**
     * Method to set XML field as reserved
     * @param {boolean} [value] true to set XML field as reserved, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setReserved(value?: boolean): ArrayXMLField {
        super.setReserved(value);
        return this;
    }

    /**
     * Method to set XML field as editable
     * @param {boolean} [value] true to set XML field as editable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setEditable(value?: boolean): ArrayXMLField {
        super.setEditable(value);
        return this;
    }

    /**
     * Method to set XML field as required
     * @param {boolean} [value] true to set XML field as required, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setRequired(value?: boolean): ArrayXMLField {
        super.setRequired(value);
        return this;
    }

    /**
     * Method to set XML field as mergeable (For aura-helper internal porpuses)
     * @param {boolean} [value] true to set XML field as mergeable, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setMergeable(value?: boolean): ArrayXMLField {
        super.setMergeable(value);
        return this;
    }

    /**
     * Method to set XML field as unique
     * @param {boolean} [value] true to set XML field as unique, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setUnique(value?: boolean): ArrayXMLField {
        super.setUnique(value);
        return this;
    }

    /**
     * Method to set if this XML must to compress
     * @param {boolean} [value] true to set field to compress, false in otherwise. If value are undefined or not provided, value set to true.
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setCompress(value?: boolean): ArrayXMLField {
        super.setCompress(value);
        return this;
    }

    /**
     * Method to set XML field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setMinApi(minApi?: number | string): ArrayXMLField {
        super.setMinApi(minApi);
        return this;
    }

    /**
     * Method to set XML field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setMaxApi(maxApi?: number | string): ArrayXMLField {
        super.setMaxApi(maxApi);
        return this;
    }

    /**
     * Method to set the Metadata Type related to the field
     * @param {string} metadataType Metadata Type API Name
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setMetadataType(metadataType: string): ArrayXMLField {
        super.setMetadataType(metadataType);
        return this;
    }

    /**
     * Method to set the validation message
     * @param {string} validationMessage Validation message
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    setValidationMessage(validationMessage: string): ArrayXMLField {
        super.setValidationMessage(validationMessage);
        return this;
    }

    /**
     * Method to link the field with an SObject throght a field
     * @param {string} sObject String API Name
     * @param {string} field Field API Name (Id by default)
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    linkFieldToSObject(sObject: string, field?: string): ArrayXMLField {
        super.linkFieldToSObject(sObject, field);
        return this;
    }

    /**
     * Method to add new XML Field dependency with another field
     * @param {XMLDependencyField} fieldDependency XML field dependency
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    addDependencyField(fieldDependency: XMLDependencyField): ArrayXMLField {
        super.addDependencyField(fieldDependency);
        return this;
    }

    /**
     * Method to add new XML Field controlled field by another field
     * @param {XMLDataControlledField} fieldDependency XML field dependency
     * @returns {ArrayXMLField} Return the ArrayXMLField instance
     */
    addControlledField(controlledField: XMLDataControlledField): ArrayXMLField {
        super.addControlledField(controlledField);
        return this;
    }
}