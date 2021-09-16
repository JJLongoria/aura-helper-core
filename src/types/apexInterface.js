const ApexClass = require('./apexClass');
const ApexNodeType = require('../values/apexNodeTypes');
const Token = require('./token');

/**
 * Class to represent an Apex Interface Node when Parsing Apex Code
 */
class ApexInterface extends ApexClass {

    /**
     * Constructor to create an ApexInterface instance
     * @param {String | Object} idOrObject Node id or Object with ApexInterface fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(id, name, startToken) {
        super(id, name, startToken);
        this.nodeType = ApexNodeType.INTERFACE;
    }
}
module.exports = ApexInterface;