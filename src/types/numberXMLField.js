const XMLField = require('./xmlField');
const Utils = require('../utils/utils');


class NumberXMLField extends XMLField {
    constructor(key, label, datatype) {
        super(key, label, datatype);
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