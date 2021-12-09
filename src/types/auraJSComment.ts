import { StrUtils } from "../utils";
import { AuraNodeTypes, JSTokenTypes } from "../values";
import { AuraJSFunctionCommentParam } from "./auraJSFunctionCommentParam";
import { AuraJSFunctionCommentReturn } from "./auraJSFunctionCommentReturn";
import { Token } from "./token";

/**
 * Class to represent an Aura JavaScript Comment line Node on Aura JavaScript when analize and parse Aura Components
 */
export class AuraJSComment {

    nodeType: string;
    tokens: Token[];
    description: string;
    params: { [key: string]: AuraJSFunctionCommentParam };
    return: AuraJSFunctionCommentReturn;

    /**
     * Create new Aura Javascript comment
     * @param {{ [key: string]: any }} [commentObject] Comment instance 
     */
    constructor(commentObject?: { [key: string]: any }) {
        this.nodeType = AuraNodeTypes.JS_COMMENT;
        if (commentObject && typeof commentObject === 'object') {
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

    /**
     * Add comment token
     * @param token Token to add
     * @returns {AuraJSComment} Returns the AuraJSComment instance
     */
    addToken(token: Token): AuraJSComment{
        this.tokens.push(token);
        return this;
    }

    /**
     * Method to process comment tokens to extract data
     */
    processComment(): void{
        const len = this.tokens.length;
        for(let i = 1; i < len; i++){
            const lastToken = (i >= 1) ? this.tokens[i - 1] : undefined;
            const token = this.tokens[i];
            if(lastToken && lastToken.type !== JSTokenTypes.COMMENT.LINE && lastToken.type !== JSTokenTypes.COMMENT.LINE_DOC){
                this.description += StrUtils.getWhitespaces(token.range.start.character - lastToken.range.end.character) + token.text;
            } else if(token.type !== JSTokenTypes.COMMENT.LINE && token.type !== JSTokenTypes.COMMENT.LINE_DOC){
                this.description += token.text;
            }
        }
    }



}