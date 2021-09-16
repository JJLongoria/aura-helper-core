const Utils = require('../utils/utils');
const StrUtils = require('../utils/strUtils');
const AuraNodeType = require('../values/auraNodeType');
const JSTokenType = require('../values/jsTokenTypes');

class AuraJSComment {

    constructor(commentObject) {
        this.nodeType = AuraNodeType.JS_COMMENT;
        if (Utils.isObject(commentObject)) {
            this.tokens = commentObject.tokens;
            this.description = commentObject.description;
            this.params = commentObject.params;
            this.return = commentObject.return;
        } else {
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
            if(lastToken && lastToken.type !== JSTokenType.COMMENT.LINE && lastToken.type !== JSTokenType.COMMENT.LINE_DOC){
                this.description += StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character) + token.text;
            } else if(token.type !== JSTokenType.COMMENT.LINE && token.type !== JSTokenType.COMMENT.LINE_DOC){
                this.description += token.text;
            }
        }
    }



}
module.exports = AuraJSComment;