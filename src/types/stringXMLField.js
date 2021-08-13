const XMLField = require('./xmlField');
const DataTypes = require('../values/datatypes');
const DataValues = require('../values/dataValues');
const Utils = require('../utils/utils');

class StringXMLField extends XMLField {
    constructor(keyOrObject, label) {
        super(keyOrObject, label, DataTypes.STRING);
        if(Utils.isObject(keyOrObject)){
            this.default = keyOrObject.default;
            this.minLength = keyOrObject.minLength;
        } else {
            this.default = DataValues.DEFAULT_TEXT;
            this.minLength = 0;
        }
    }

    setBase64(value) {
        this.base64 = (value !== undefined) ? value : true;
        return this;
    }

    setCSV(value) {
        this.csv = (value !== undefined) ? value : true;
        return this;
    }

    setJSON(value) {
        this.json = (value !== undefined) ? value : true;
        return this;
    }

    addMatchPattern(matchPattern) {
        if (this.matchPatterns === undefined)
            this.matchPatterns = [];
        this.matchPatterns.push(matchPattern);
        return this;
    }

    setMinLength(minLength) {
        this.minLength = minLength;
        return this;
    }

    setMaxLength(maxLength) {
        this.maxLength = maxLength;
        return this;
    }
}
module.exports = StringXMLField;