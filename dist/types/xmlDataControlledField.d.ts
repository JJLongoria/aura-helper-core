/**
 * Class to create XML Controlled fields
 */
export declare class XMLDataControlledField {
    field: string;
    valueToCompare: any;
    valueToSet: any;
    minApi: number;
    maxApi: number;
    /**
     * Create new XML Controlled field
     * @param {string | XMLDataControlledField} fieldOrControlledField XML field name or XML Controled field instance
     * @param {any} [valueToCompare] value to compare
     * @param {any} [valueToSet] value to set
     */
    constructor(fieldOrControlledField: string | XMLDataControlledField, valueToCompare?: any, valueToSet?: any);
    /**
     * Method to set XML controlled field minimum api. Minimum value: 1
     * @param {number} minApi API Version minimum value
     * @returns {XMLDataControlledField} Return the XMLDataControlledField instance
     */
    setMinApi(minApi: number): XMLDataControlledField;
    /**
     * Method to set XML controlled field maximum api. Use -1 to set available to the latest api
     * @param {number} maxApi API Version maximum value
     * @returns {XMLDataControlledField} Return the XMLDataControlledField instance
     */
    setMaxApi(maxApi: number): XMLDataControlledField;
}
