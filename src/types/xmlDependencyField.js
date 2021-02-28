const Utils = require('../utils/utils');

class XMLDependencyField {

    constructor(field, valueToCompare, allowedValues, forbidenValues) {
        if (typeof field === 'object') {
            this.field = field.field;
            this.valueToCompare = field.valueToCompare;
            this.allowedValues = field.allowedValues;
            this.forbidenValues = field.forbidenValues;
            this.minApi = field.minApi;
            this.maxApi = field.maxApi;
        } else {
            this.field = field;
            this.valueToCompare = Utils.forceArray(valueToCompare);
            this.allowedValues = Utils.forceArray(allowedValues);
            this.forbidenValues = Utils.forceArray(forbidenValues);
        }
    }

    setMinApi(minApi) {
        this.minApi = (minApi !== undefined) ? minApi : this.minApi;
        return this;
    }

    setMaxApi(maxApi) {
        this.maxApi = (maxApi !== undefined) ? maxApi : this.maxApi;
        return this;
    }
}
module.exports = XMLDependencyField;