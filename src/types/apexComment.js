const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const ApexTokenType = require('../values/apexTokenTypes');
const Utils = require('../utils/utils');
const StrUtils = require('../utils/strUtils');
const Token = require('./token');

/**
 * Class to represent an Apex Comment Node when Parsing Apex Code
 */
class ApexComment extends ApexNode {

    /**
     * Constructor to create an ApexComment instance
     * @param {String | Object} idOrObject Node id or Object with ApexComment fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.COMMENT, name, startToken);
        if (Utils.isObject(idOrObject)) {
            this.tokens = idOrObject.tokens;
            this.description = idOrObject.description;
        } else {
            this.tokens = [];
            this.description = '';
        }
    }

    /**
     * Method to add Comment tokens
     * @param {Token} token Comment token to add
     * @returns {ApexAnnotation} Return the ApexComment instance
     */
    addToken(token) {
        this.tokens.push(token);
        this.endToken = token;
        return this;
    }

    processComment(template) {
        const len = this.tokens.length;
        for (let i = 1; i < len; i++) {
            const lastToken = (i >= 1) ? this.tokens[i - 1] : undefined;
            const token = this.tokens[i];
            if (lastToken && lastToken.type !== ApexTokenType.COMMENT.LINE && lastToken.type !== ApexTokenType.COMMENT.LINE_DOC) {
                this.description += StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character) + token.text;
            } else if (token.type !== ApexTokenType.COMMENT.LINE && token.type !== ApexTokenType.COMMENT.LINE_DOC) {
                this.description += token.text;
            }
        }
    }
}
module.exports = ApexComment;
