/**
 * Class to create XML Dependencies with other fields, with allowed and forbiden values, and the values to compare
 */
export declare class XMLDependencyField {
    field: string;
    valueToCompare: any[];
    allowedValues: any[];
    forbidenValues: any[];
    minApi: number;
    maxApi: number;
    /**
     * Create new XML Field dependency
     * @param {string | XMLDependencyField} fieldOrDependency XML dependant field or XML Dependency instance
     * @param {any[]} [valueToCompare] Values to compare to check dependencies
     * @param {any[]} [allowedValues] Allowed values
     * @param {any[]} [forbidenValues] Forbiden values
     */
    constructor(fieldOrDependency: string | XMLDependencyField, valueToCompare?: any[], allowedValues?: any[], forbidenValues?: any[]);
    /**
     * Method to set XML dependency minimum api. Minimum value: 1
     * @param {number} minApi API Version minimum value
     * @returns {XMLDependencyField} Return the XMLDependencyField instance
     */
    setMinApi(minApi: number): XMLDependencyField;
    /**
     * Method to set XML dependency maximum api. Use -1 to set available to the latest api
     * @param {number} maxApi API Version maximum value
     * @returns {XMLDependencyField} Return the XMLDependencyField instance
     */
    setMaxApi(maxApi: number): XMLDependencyField;
}
