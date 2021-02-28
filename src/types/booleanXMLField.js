const XMLField = require('./xmlField');
const DataTypes = require('../values/datatypes');

class BooleanXMLField extends XMLField {
    constructor(key, label) {
        super(key, label, DataTypes.BOOLEAN);
        if(typeof key === 'object'){
            this.default = key.default;
        } else {
            this.default = false;
        }
    }
}
module.exports = BooleanXMLField;