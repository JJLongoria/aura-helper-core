const DateTimeXMLField = require('./dateTimeXMLField');
const DataTypes = require('../values/datatypes');

class TimeXMLField extends DateTimeXMLField {
    constructor(key, label) {
        super(key, label);
        this.datatype = DataTypes.TIME;
        if(typeof key === 'object'){
            this.format = key.format;
        }
    }

    setFormat(format) {
        this.format = format;
        return this;
    }
}
module.exports = TimeXMLField;