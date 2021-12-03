"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraJSComment = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
/**
 * Class to represent an Aura JavaScript Comment line Node on Aura JavaScript when analize and parse Aura Components
 */
class AuraJSComment {
    /**
     * Create new Aura Javascript comment
     * @param {AuraJSComment} [commentObject] Comment instance
     */
    constructor(commentObject) {
        this.nodeType = values_1.AuraNodeTypes.JS_COMMENT;
        if (commentObject instanceof AuraJSComment) {
            this.tokens = commentObject.tokens;
            this.description = commentObject.description;
            this.params = commentObject.params;
            this.return = commentObject.return;
        }
        else {
            this.tokens = [];
            this.description = '';
            this.params = {};
            this.return = {};
        }
    }
    /**
     * Add comment token
     * @param token Token to add
     * @returns {AuraJSComment} Returns the AuraJSComment instance
     */
    addToken(token) {
        this.tokens.push(token);
        return this;
    }
    /**
     * Method to process comment tokens to extract data
     */
    processComment() {
        const len = this.tokens.length;
        for (let i = 1; i < len; i++) {
            const lastToken = (i >= 1) ? this.tokens[i - 1] : undefined;
            const token = this.tokens[i];
            if (lastToken && lastToken.type !== values_1.JSTokenTypes.COMMENT.LINE && lastToken.type !== values_1.JSTokenTypes.COMMENT.LINE_DOC) {
                this.description += utils_1.StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character) + token.text;
            }
            else if (token.type !== values_1.JSTokenTypes.COMMENT.LINE && token.type !== values_1.JSTokenTypes.COMMENT.LINE_DOC) {
                this.description += token.text;
            }
        }
    }
}
exports.AuraJSComment = AuraJSComment;
//# sourceMappingURL=auraJSComment.js.map