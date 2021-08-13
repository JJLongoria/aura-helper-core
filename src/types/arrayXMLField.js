const ObjectXMLField = require('./objectXMLField');
const DataTypes = require('../values/datatypes');
const Utils = require('../utils/utils');

class ArrayXMLField extends ObjectXMLField {
    constructor(keyOrObject, label) {
        super(keyOrObject, label);
        if(Utils.isObject(keyOrObject)){
            this.maxItems = keyOrObject.maxItems;
            this.allowedValues = keyOrObject.allowedValues;
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