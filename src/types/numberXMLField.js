const XMLField = require('./xmlField');
const Utils = require('../utils/utils');


class NumberXMLField extends XMLField {
    constructor(keyOrObject, label, datatype) {
        super(keyOrObject, label, datatype);
        if (Utils.isObject(keyOrObject)) {
            this.minValue = keyOrObject.minValue;
            this.maxValue = keyOrObject.maxValue;
            this.allowedValues = keyOrObject.allowedValues;
        } else {
            this.minValue = undefined;
            this.maxValue = undefined;
            this.allowedValues = undefined;
        }
    }

    setMinValue(minValue) {
        this.minValue = minValue;
        return this;
    }

    setMaxValue(maxValue) {
        this.maxValue = maxValue;
        return this;
    }

    setAllowedValues(allowedValues) {
        this.allowedValues = Utils.forceArray(allowedValues);
        return this;
    }
}
module.exports = NumberXMLField;