const XMLField = require('./xmlField');
const DataTypes = require('../values/datatypes');
const DataValues = require('../values/dataValues');
const Utils = require('../utils/utils');

class StringXMLField extends XMLField {
    constructor(keyOrObject, label) {
        super(keyOrObject, label, DataTypes.STRING);
        if (Utils.isObject(keyOrObject)) {
            this.default = keyOrObject.default;
            this.minLength = keyOrObject.minLength;
        } else {
            this.default = DataValues.DEFAULT_TEXT;
            this.minLength = 0;
        }
    }

    setBase64(value) {
        this.isBase64 = (value !== undefined) ? value : true;
        return this;
    }

    setCSV(value) {
        this.isCSV = (value !== undefined) ? value : true;
        return this;
    }

    setJSON(value) {
        this.isJSON = (value !== undefined) ? value : true;
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

    transformValue(value) {
        super.prepareValue(value);
    }

    validate(value, fieldName) {
        if (this.required && !value)
            return 'The field ' + fieldName + ' is required';
        value = this.prepareValue(value);
        if (this.matchPatterns && this.matchPatterns.length > 0 && value) {
            let pass = false;
            for (const pattern of this.matchPatterns) {
                if (pattern.test(value)) {
                    pass = true;
                    break;
                }
            }
            if(!pass){
                return this.patternValidationMessage;
            }
        }
        if (this.minLength && this.minLength >= 0 && this.maxLength && this.maxLength >= 0 && value) {
            if (value.length < this.minLength || value.length > this.maxLength)
                return 'Wrong value length. The value length must be between ' + this.minLength + ' and ' + this.maxLength;
        } else if (this.minLength && this.minLength >= 0 && value) {
            if (value.length < this.minLength)
                return 'Wrong value length. The value length must be higher than ' + this.minLength + '. (Remains ' + (this.minLength - value.length) + ' characters)';
        } else if (this.maxLength && this.maxLength >= 0 && value) {
            if (value.length > this.maxLength)
                return 'Wrong value length. The value length must be lower than ' + this.maxLength + '. (' + (this.maxLength - value.length) + ' characters left)';
        }
        return undefined;
    }
}
module.exports = StringXMLField;