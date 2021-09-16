const NumberXMLField = require('./numberXMLField');
const DataTypes = require('../values/datatypes');
const Utils = require('../utils/utils');

class IntegerXMLField extends NumberXMLField {
    constructor(keyOrObject, label) {
        super(keyOrObject, label, DataTypes.INTEGER);
        if(Utils.isObject(keyOrObject)){
            this.default = keyOrObject.default;
        } else {
            this.default = 0;
        }
    }

    transformValue(value) {
        value = super.prepareValue(value);
        if (value && Utils.isString(value))
            value = parseInt(value);
        return value;
    }
}
module.exports = IntegerXMLField;