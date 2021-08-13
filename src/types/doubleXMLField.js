const NumberXMLField = require('./numberXMLField');
const DataTypes = require('../values/datatypes');
const Utils = require('../utils/utils');

class DoubleXMLField extends NumberXMLField {
    constructor(keyOrObject, label) {
        super(keyOrObject, label, DataTypes.DOUBLE);
        if (Utils.isObject(keyOrObject)) {
            this.default = keyOrObject.default;
        } else {
            this.default = 0.0;
        }
    }

    prepareValue(value) {
        let strVal = '' + value;
        if (strVal.indexOf('.') === -1)
            strVal += '.0';
        return strVal;
    }
}
module.exports = DoubleXMLField;