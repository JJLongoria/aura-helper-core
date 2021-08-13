const Utils = require('../utils/utils');

class XMLDependencyField {

    constructor(fieldOrObject, valueToCompare, allowedValues, forbidenValues) {
        if (Utils.isObject(fieldOrObject)) {
            this.field = fieldOrObject.field;
            this.valueToCompare = fieldOrObject.valueToCompare;
            this.allowedValues = fieldOrObject.allowedValues;
            this.forbidenValues = fieldOrObject.forbidenValues;
            this.minApi = fieldOrObject.minApi;
            this.maxApi = fieldOrObject.maxApi;
        } else {
            this.field = fieldOrObject;
            this.valueToCompare = Utils.forceArray(valueToCompare);
            this.allowedValues = Utils.forceArray(allowedValues);
            this.forbidenValues = Utils.forceArray(forbidenValues);
            this.minApi = undefined;
            this.maxApi = undefined;
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