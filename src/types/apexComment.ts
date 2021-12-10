import { StrUtils } from "../utils";
import { ApexNodeTypes, ApexTokenTypes } from "../values";
import { ApexCommentTemplate } from "./apexCommenTemplate";
import { ApexNode } from "./apexNode";
import { Token } from "./token";

/**
 * Class to represent an Apex Comment Node when Parsing Apex Code
 */
export class ApexComment extends ApexNode {

    tokens: Token[];
    description: string;

    /**
     * Constructor to create an ApexComment instance
     * @param {string | { [key: string]: any }} idOrComment Node id or Object with ApexComment fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrComment: string | { [key: string]: any }, name?: string, startToken?: Token) {
        super(idOrComment, ApexNodeTypes.COMMENT, name, startToken);
        if (idOrComment && typeof idOrComment !== 'string') {
            this.tokens = idOrComment.tokens;
            this.description = idOrComment.description;
        } else {
            this.tokens = [];
            this.description = '';
        }
    }

    /**
     * Method to add Comment tokens
     * @param {Token} token Comment token to add
     * @returns {ApexComment} Return the ApexComment instance
     */
    addToken(token: Token): ApexComment {
        this.tokens.push(token);
        this.endToken = token;
        return this;
    }

    /**
     * Method to process comment tokens to extract data
     * @param {any} template Apex Comment Template to process
     */
    processComment(_template: any): void {
        const len = this.tokens.length;
        for (let i = 1; i < len; i++) {
            const lastToken = (i >= 1) ? this.tokens[i - 1] : undefined;
            const token = this.tokens[i];
            if (lastToken && lastToken.type !== ApexTokenTypes.COMMENT.LINE && lastToken.type !== ApexTokenTypes.COMMENT.LINE_DOC) {
                this.description += StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character) + token.text;
            } else if (token.type !== ApexTokenTypes.COMMENT.LINE && token.type !== ApexTokenTypes.COMMENT.LINE_DOC) {
                this.description += token.text;
            }
        }
    }
}
