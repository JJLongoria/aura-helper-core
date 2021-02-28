const NumberXMLField = require('./numberXMLField');
const DataTypes = require('../values/datatypes');

class IntegerXMLField extends NumberXMLField {
    constructor(key, label) {
        super(key, label, DataTypes.INTEGER);
        this.default = 0;
    }
}
module.exports = IntegerXMLField;