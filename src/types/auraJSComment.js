const Utils = require('../utils/utils');
const StrUtils = require('../utils/strUtils');
const AuraNodeType = require('../values/auraNodeType');

class AuraJSComment {

    constructor(tokenOrObject) {
        this.nodeType = AuraNodeType.JS_COMMENT;
        if (Utils.isObject(tokenOrObject) && !Utils.isNull(tokenOrObject.nodeType)) {
            this.token = tokenOrObject.token;
            this.tokens = tokenOrObject.tokens;
            this.description = tokenOrObject.description;
            this.params = tokenOrObject.params;
            this.return = tokenOrObject.return;
        } else {
            this.token = tokenOrObject;
            this.tokens = [];
            this.description = '';
            this.params = {};
            this.return = {};
        }
    }

    addToken(token){
        this.tokens.push(token);
        return this;
    }

    processComment(){
        const len = this.tokens.length;
        for(let i = 1; i < len; i++){
            const lastToken = (i >= 1) ? this.tokens[i - 1] : undefined;
            const token = this.tokens[i];
            if(lastToken){
                this.description += StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character) + token.text;
            } else {
                this.description += token.text;
            }
        }
    }



}
module.exports = AuraJSComment;