const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const Utils = require('../utils/utils');

class ApexComment extends ApexNode{

    constructor(idOrObject, name, startToken){
        super(idOrObject, ApexNodeType.COMMENT, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.blockComment = idOrObject.blockComment;
            this.tokens = idOrObject.tokens;
        } else {
            this.blockComment = false;
            this.tokens = [];
        }
    }

    addToken(token){
        this.tokens.push(token);
        this.endToken = token;
        return this;
    }
}
module.exports = ApexComment;
