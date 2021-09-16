const ApexMethod = require('./apexMethod');
const ApexNodeType = require('../values/apexNodeTypes');
const Token = require('./token');

/**
 * Class to represent an Apex Constructor Node when Parsing Apex Code
 */
class ApexConstructor extends ApexMethod{

    /**
     * Constructor to create an ApexConstructor instance
     * @param {String | Object} idOrObject Node id or Object with ApexConstructor fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken){
        super(idOrObject, name, startToken);
        this.nodeType = ApexNodeType.CONSTRUCTOR;
    }
}
module.exports = ApexConstructor;