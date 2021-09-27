const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const Token = require('./token');
const Utils = require('../utils/utils');

/**
 * Class to represent an Apex Datatype Node when Parsing Apex Code
 */
class ApexDatatype extends ApexNode{

    /**
     * Constructor to create an ApexDatatype instance
     * @param {String | Object} idOrObject Node id or Object with ApexDatatype fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken){
        super(idOrObject, ApexNodeType.DATATYPE, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.type = idOrObject.type;
            this.key = idOrObject.key;
            this.value = idOrObject.value;
        } else {
            this.type = undefined;
            this.key = undefined;
            this.value = undefined;
        }
    }
}
module.exports = ApexDatatype;