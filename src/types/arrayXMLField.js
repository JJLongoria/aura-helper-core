const ObjectXMLField = require('./objectXMLField');
const DataTypes = require('../values/datatypes');

class ArrayXMLField extends ObjectXMLField {
    constructor(key, label) {
        super(key, label);
        if(typeof key === 'object'){
            this.maxItems = key.maxItems;
            this.allowedValues = key.allowedValues;
        }
        this.datatype = DataTypes.ARRAY;
    }

    setMaxItems(maxItems) {
        this.maxItems = maxItems;
        return this;
    }

    addAllowedValue(label, value, minApi, maxApi) {
        if (this.allowedValues === undefined)
            this.allowedValues = [];
        this.allowedValues.push({
            label: label,
            value: value,
            minApi: (minApi !== undefined) ? minApi : this.minApi,
            maxApi: (maxApi !== undefined) ? maxApi : this.maxApi
        });
        return this;
    }
}
module.exports = ArrayXMLField;