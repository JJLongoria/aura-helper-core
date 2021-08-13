const XMLField = require('./xmlField');
const DataTypes = require('../values/datatypes');
const Utils = require('../utils/utils');

class DateTimeXMLField extends XMLField {
    constructor(keyOrObject, label) {
        super(keyOrObject, label, DataTypes.DATE_TIME);
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
module.exports = DateTimeXMLField;