const NumberXMLField = require('./numberXMLField');
const DataTypes = require('../values/datatypes');

class DoubleXMLField extends NumberXMLField {
    constructor(key, label) {
        super(key, label, DataTypes.DOUBLE);
        if(typeof key === 'object'){
            this.default = key.default;
        } else {
            this.default = 0.0;
        }
    }
}
module.exports = DoubleXMLField;