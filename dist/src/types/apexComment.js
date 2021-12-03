"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexComment = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
const apexNode_1 = require("./apexNode");
/**
 * Class to represent an Apex Comment Node when Parsing Apex Code
 */
class ApexComment extends apexNode_1.ApexNode {
    /**
     * Constructor to create an ApexComment instance
     * @param {string | ApexComment} idOrComment Node id or Object with ApexComment fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrComment, name, startToken) {
        super(idOrComment, values_1.ApexNodeTypes.COMMENT, name, startToken);
        if (idOrComment instanceof ApexComment) {
            this.tokens = idOrComment.tokens;
            this.description = idOrComment.description;
        }
        else {
            this.tokens = [];
            this.description = '';
        }
    }
    /**
     * Method to add Comment tokens
     * @param {Token} token Comment token to add
     * @returns {ApexComment} Return the ApexComment instance
     */
    addToken(token) {
        this.tokens.push(token);
        this.endToken = token;
        return this;
    }
    /**
     * Method to process comment tokens to extract data
     * @param {ApexCommentTemplate} template Apex Comment Template to process
     */
    processComment(_template) {
        const len = this.tokens.length;
        for (let i = 1; i < len; i++) {
            const lastToken = (i >= 1) ? this.tokens[i - 1] : undefined;
            const token = this.tokens[i];
            if (lastToken && lastToken.type !== values_1.ApexTokenTypes.COMMENT.LINE && lastToken.type !== values_1.ApexTokenTypes.COMMENT.LINE_DOC) {
                this.description += utils_1.StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character) + token.text;
            }
            else if (token.type !== values_1.ApexTokenTypes.COMMENT.LINE && token.type !== values_1.ApexTokenTypes.COMMENT.LINE_DOC) {
                this.description += token.text;
            }
        }
    }
}
exports.ApexComment = ApexComment;
//# sourceMappingURL=apexComment.js.map