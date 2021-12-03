"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLDependencyField = void 0;
const utils_1 = require("../utils/utils");
/**
 * Class to create XML Dependencies with other fields, with allowed and forbiden values, and the values to compare
 */
class XMLDependencyField {
    /**
     * Create new XML Field dependency
     * @param {string | XMLDependencyField} fieldOrDependency XML dependant field or XML Dependency instance
     * @param {any[]} [valueToCompare] Values to compare to check dependencies
     * @param {any[]} [allowedValues] Allowed values
     * @param {any[]} [forbidenValues] Forbiden values
     */
    constructor(fieldOrDependency, valueToCompare, allowedValues, forbidenValues) {
        if (fieldOrDependency instanceof XMLDependencyField) {
            this.field = fieldOrDependency.field;
            this.valueToCompare = fieldOrDependency.valueToCompare;
            this.allowedValues = fieldOrDependency.allowedValues;
            this.forbidenValues = fieldOrDependency.forbidenValues;
            this.minApi = fieldOrDependency.minApi;
            this.maxApi = fieldOrDependency.maxApi;
        }
        else {
            this.field = fieldOrDependency;
            this.valueToCompare = valueToCompare ? utils_1.Utils.forceArray(valueToCompare) : [];
            this.allowedValues = allowedValues ? utils_1.Utils.forceArray(allowedValues) : [];
            this.forbidenValues = forbidenValues ? utils_1.Utils.forceArray(forbidenValues) : [];
            this.minApi = 1;
            this.maxApi = -1;
        }
    }
    /**
     * Method to set XML dependency minimum api. Minimum value: 1
     * @param {number} minApi API Version minimum value
     * @returns {XMLDependencyField} Return the XMLDependencyField instance
     */
    setMinApi(minApi) {
        this.minApi = (minApi !== undefined && minApi >= 1) ? minApi : 1;
        return this;
    }
    /**
     * Method to set XML dependency maximum api. Use -1 to set available to the latest api
     * @param {number} maxApi API Version maximum value
     * @returns {XMLDependencyField} Return the XMLDependencyField instance
     */
    setMaxApi(maxApi) {
        this.maxApi = (maxApi !== undefined && maxApi >= 1) ? maxApi : -1;
        return this;
    }
}
exports.XMLDependencyField = XMLDependencyField;
//# sourceMappingURL=xmlDependencyField.js.map