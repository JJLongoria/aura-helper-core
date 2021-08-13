const XMLField = require('./xmlField');
const DataValues = require('../values/dataValues');
const DataTypes = require('../values/datatypes');
const Utils = require('../utils/utils');

class EnumXMLField extends XMLField {

    constructor(keyOrObject, label) {
        super(keyOrObject, label, DataTypes.ENUM);
        if(Utils.isObject(keyOrObject)){
            this.multichoice = keyOrObject.multichoice;
            this.values = keyOrObject.values;
            this.default = keyOrObject.default;
        } else {
            this.default = DataValues.DEFAULT_TEXT;
        }
    }

    setMultiChoice(value) {
        this.multichoice = (value !== undefined) ? value : true;
        return this;
    }

    setEnumValues(values, minApi, maxApi) {
        this.values = Utils.forceArray(values);
        if (this.values != undefined) {
            for (let value of this.values) {
                value.minApi = (minApi !== undefined) ? minApi : this.minApi;
                value.maxApi = (maxApi !== undefined) ? maxApi : this.maxApi;
            }
        }
        return this;
    }

    addEnumValue(label, value, minApi, maxApi) {
        if (this.values === undefined)
            this.values = [];
        this.values.push({
            label: label,
            value: value,
            minApi: (minApi !== undefined) ? minApi : this.minApi,
            maxApi: (maxApi !== undefined) ? maxApi : this.maxApi
        });
        return this;
    }

    getValue(label) {
        for (let enumVal of this.values) {
            if (enumVal.label === label)
                return enumVal.value;
        }
        return undefined;
    }

    getLabel(value) {
        for (let enumVal of this.values) {
            if (enumVal.value === value)
                return enumVal.label;
        }
        return undefined;
    }

}
module.exports = EnumXMLField;