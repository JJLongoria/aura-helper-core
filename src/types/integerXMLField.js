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
}
module.exports = IntegerXMLField;