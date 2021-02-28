const XMLField = require('./xmlField');
const DataTypes = require('../values/datatypes');

class DateTimeXMLField extends XMLField {
    constructor(key, label) {
        super(key, label, DataTypes.DATE_TIME);
        if(typeof key === 'object'){
            this.format = key.format;
        }
    }

    setFormat(format) {
        this.format = format;
        return this;
    }
}
module.exports = DateTimeXMLField;