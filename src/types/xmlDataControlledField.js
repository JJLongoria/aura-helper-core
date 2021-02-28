class XMLDataControlledField {

    constructor(field, valueToCompare, valueToSet) {
        if (typeof field === 'object') {
            this.field = field.field;
            this.valueToCompare = field.valueToCompare;
            this.valueToSet = field.valueToSet;
            this.minApi = field.minApi;
            this.maxApi = field.maxApi;
        } else {
            this.field = field;
            this.valueToCompare = valueToCompare;
            this.valueToSet = valueToSet;
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