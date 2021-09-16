const XMLField = require('./xmlField');
const DataTypes = require('../values/datatypes');
const Utils = require('../utils/utils');

class BooleanXMLField extends XMLField {
    constructor(keyOrObject, label) {
        super(keyOrObject, label, DataTypes.BOOLEAN);
        if(Utils.isObject(keyOrObject)){
            this.default = keyOrObject.default;
        } else {
            this.default = false;
        }
    }

    transformValue(value) {
        if (value !== undefined && !Utils.isBoolean(value))
            value = value === 'true';
        return value;
    }
}
module.exports = BooleanXMLField;