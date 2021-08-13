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
}
module.exports = BooleanXMLField;