const ApexConstructor = require('./apexConstructor');
const ApexNodeType = require('../values/apexNodeTypes');

/**
 * Class to represent an Apex Static Constructor Node when Parsing Apex Code
 */
class ApexStaticConstructor extends ApexConstructor{

    /**
     * Constructor to create an ApexStaticConstructor instance
     * @param {String | Object} idOrObject Node id or Object with ApexStaticConstructor fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(id, name, startToken){
        super(id, name, startToken);
        this.nodeType = ApexNodeType.STATIC_CONSTRUCTOR;
    }
}
module.exports = ApexStaticConstructor;