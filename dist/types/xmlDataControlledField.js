"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLDataControlledField = void 0;
/**
 * Class to create XML Controlled fields
 */
class XMLDataControlledField {
    /**
     * Create new XML Controlled field
     * @param {string | XMLDataControlledField} fieldOrControlledField XML field name or XML Controled field instance
     * @param {any} [valueToCompare] value to compare
     * @param {any} [valueToSet] value to set
     */
    constructor(fieldOrControlledField, valueToCompare, valueToSet) {
        if (fieldOrControlledField instanceof XMLDataControlledField) {
            this.field = fieldOrControlledField.field;
            this.valueToCompare = fieldOrControlledField.valueToCompare;
            this.valueToSet = fieldOrControlledField.valueToSet;
            this.minApi = fieldOrControlledField.minApi;
            this.maxApi = fieldOrControlledField.maxApi;
        }
        else {
            this.field = fieldOrControlledField;
            this.valueToCompare = valueToCompare;
            this.valueToSet = valueToSet;
            this.minApi = 1;
            this.maxApi = -1;
        }
    }
    /**
     * Method to set XML controlled field minimum api. Minimum value: 1
     * @param {number} minApi API Version minimum value
     * @returns {XMLDataControlledField} Return the XMLDataControlledField instance
     */
    setMinApi(minApi) {
        this.minApi = (minApi !== undefined && minApi >= 1) ? minApi : 1;
        return this;
    }
    /**
     * Method to set XML controlled field maximum api. Use -1 to set available to the latest api
     * @param {number} maxApi API Version maximum value
     * @returns {XMLDataControlledField} Return the XMLDataControlledField instance
     */
    setMaxApi(maxApi) {
        this.maxApi = (maxApi !== undefined && maxApi >= 1) ? maxApi : -1;
        return this;
    }
}
exports.XMLDataControlledField = XMLDataControlledField;
//# sourceMappingURL=xmlDataControlledField.js.map