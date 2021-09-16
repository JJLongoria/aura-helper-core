const ApexNode = require('./apexNode');
const Token = require('./token');
const ApexNodeType = require('../values/apexNodeTypes');
const Utils = require('../utils/utils');

/**
 * Class to represent an Apex Annotation Node when Parsing Apex Code
 */
class ApexAnnotation extends ApexNode{

    /**
     * Constructor to create an ApexAnnotation instance
     * @param {String | Object} idOrObject Node id or Object with ApexAnnotation fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken){
        super(idOrObject, ApexNodeType.ANNOTATION, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.tokens = idOrObject.tokens;
        } else {
            this.tokens = [];
        }
    }

    /**
     * Method to add Annotation tokens
     * @param {Token} token Annotation token to add
     * @returns {ApexAnnotation} Return the ApexAnnotation instance
     */
    addToken(token){
        this.tokens.push(token);
        this.endToken = token;
        return this;
    }
}
module.exports = ApexAnnotation;