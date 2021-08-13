const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const Utils = require('../utils/utils');

class ApexAnnotation extends ApexNode{

    constructor(idOrObject, name, startToken){
        super(idOrObject, ApexNodeType.ANNOTATION, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.tokens = idOrObject.tokens;
        } else {
            this.tokens = [];
        }
    }

    addToken(token){
        this.tokens.push(token);
        this.endToken = token;
        return this;
    }
}
module.exports = ApexAnnotation;