const ApexMethod = require('./apexMethod');
const ApexNodeType = require('../values/apexNodeTypes');
const Token = require('./token');

/**
 * Class to represent an Apex Initializer Node when Parsing Apex Code
 */
class ApexInitializer extends ApexMethod{

    /**
     * Constructor to create an ApexInitializer instance
     * @param {string | Object} idOrObject Node id or Object with ApexInitializer fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(id, name, startToken){
        super(id, name, startToken);
        this.nodeType = ApexNodeType.INITIALIZER;
    }
}
module.exports = ApexInitializer;