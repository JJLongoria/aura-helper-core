const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const Token = require('./token');

/**
 * Class to represent an Apex Interface Node when Parsing Apex Code
 */
class ApexExceptionThrows extends ApexNode {

    /**
     * Constructor to create an ApexExceptionThrows instance
     * @param {String | Object} idOrObject Node id or Object with ApexInterface fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(id, name, startToken) {
        super(id, ApexNodeType.THROWS, name, startToken);
    }
}
module.exports = ApexExceptionThrows;