/**
 * Class to create XML Controlled fields
 */
export class XMLDataControlledField {

    field: string;
    valueToCompare: any;
    valueToSet: any;
    minApi: number | string;
    maxApi: number | string;

    /**
     * Create new XML Controlled field
     * @param {string | XMLDataControlledField} fieldOrControlledField XML field name or XML Controled field instance
     * @param {any} [valueToCompare] value to compare
     * @param {any} [valueToSet] value to set
     */
    constructor(fieldOrControlledField: string | XMLDataControlledField, valueToCompare?: any, valueToSet?: any) {
        if (fieldOrControlledField instanceof XMLDataControlledField) {
            this.field = fieldOrControlledField.field;
            this.valueToCompare = fieldOrControlledField.valueToCompare;
            this.valueToSet = fieldOrControlledField.valueToSet;
            this.minApi = fieldOrControlledField.minApi;
            this.maxApi = fieldOrControlledField.maxApi;
        } else {
            this.field = fieldOrControlledField;
            this.valueToCompare = valueToCompare;
            this.valueToSet = valueToSet;
            this.minApi = 1;
            this.maxApi = -1;
        }
    }

    /**
     * Method to set XML controlled field minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {XMLDataControlledField} Return the XMLDataControlledField instance
     */
    setMinApi(minApi: number | string): XMLDataControlledField {
        this.minApi = (minApi !== undefined && minApi >= 1) ? minApi : 1;
        return this;
    }

    /**
     * Method to set XML controlled field maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {XMLDataControlledField} Return the XMLDataControlledField instance
     */
    setMaxApi(maxApi: number | string): XMLDataControlledField {
        this.maxApi = (maxApi !== undefined && maxApi >= 1) ? maxApi : -1;
        return this;
    }
}