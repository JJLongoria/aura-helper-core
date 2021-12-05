import { Utils } from "../utils/utils";

/**
 * Class to create XML Dependencies with other fields, with allowed and forbiden values, and the values to compare
 */
export class XMLDependencyField {

    field: string;
    valueToCompare: any[] | any;
    allowedValues: any[] | any;
    forbidenValues: any[] | any;
    minApi: number | string;
    maxApi: number | string;

    /**
     * Create new XML Field dependency
     * @param {string | XMLDependencyField} fieldOrDependency XML dependant field or XML Dependency instance
     * @param {any[]} [valueToCompare] Values to compare to check dependencies
     * @param {any[]} [allowedValues] Allowed values
     * @param {any[]} [forbidenValues] Forbiden values
     */
    constructor(fieldOrDependency: string | XMLDependencyField, valueToCompare?: any[] | any, allowedValues?: any[] | any, forbidenValues?: any[] | any) {
        if (fieldOrDependency instanceof XMLDependencyField) {
            this.field = fieldOrDependency.field;
            this.valueToCompare = fieldOrDependency.valueToCompare;
            this.allowedValues = fieldOrDependency.allowedValues;
            this.forbidenValues = fieldOrDependency.forbidenValues;
            this.minApi = fieldOrDependency.minApi;
            this.maxApi = fieldOrDependency.maxApi;
        } else {
            this.field = fieldOrDependency;
            this.valueToCompare = valueToCompare ? Utils.forceArray(valueToCompare) : [];
            this.allowedValues = allowedValues ? Utils.forceArray(allowedValues) : [];
            this.forbidenValues = forbidenValues ? Utils.forceArray(forbidenValues) : [];
            this.minApi = 1;
            this.maxApi = -1;
        }
    }

    /**
     * Method to set XML dependency minimum api. Minimum value: 1
     * @param {number | string} minApi API Version minimum value
     * @returns {XMLDependencyField} Return the XMLDependencyField instance
     */
     setMinApi(minApi: number | string): XMLDependencyField {
        this.minApi = (minApi !== undefined && minApi >= 1) ? minApi : 1;
        return this;
    }

    /**
     * Method to set XML dependency maximum api. Use -1 to set available to the latest api
     * @param {number | string} maxApi API Version maximum value
     * @returns {XMLDependencyField} Return the XMLDependencyField instance
     */
    setMaxApi(maxApi: number | string): XMLDependencyField {
        this.maxApi = (maxApi !== undefined && maxApi >= 1) ? maxApi : -1;
        return this;
    }
}