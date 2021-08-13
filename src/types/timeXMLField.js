const DateTimeXMLField = require('./dateTimeXMLField');
const DataTypes = require('../values/datatypes');
const Utils = require('../utils/utils');

class TimeXMLField extends DateTimeXMLField {
    constructor(keyOrObject, label) {
        super(keyOrObject, label);
        this.datatype = DataTypes.TIME;
        if(Utils.isObject(keyOrObject)){
            this.format = keyOrObject.format;
        } else {
            this.format = undefined;
        }
    }

    setFormat(format) {
        this.format = format;
        return this;
    }
}
module.exports = TimeXMLField;