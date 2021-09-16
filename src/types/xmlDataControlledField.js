const Utils = require('../utils/utils');

class XMLDataControlledField {

    constructor(fieldOrObject, valueToCompare, valueToSet) {
        if (Utils.isObject(fieldOrObject)) {
            this.field = fieldOrObject.field;
            this.valueToCompare = fieldOrObject.valueToCompare;
            this.valueToSet = fieldOrObject.valueToSet;
            this.minApi = fieldOrObject.minApi;
            this.maxApi = fieldOrObject.maxApi;
        } else {
            this.field = fieldOrObject;
            this.valueToCompare = valueToCompare;
            this.valueToSet = valueToSet;
            this.minApi = 1;
            this.maxApi = -1;
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
module.exports = XMLDataControlledField;