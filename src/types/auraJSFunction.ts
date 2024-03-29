import { AuraJSCommentBlock } from ".";
import { AuraNodeTypes } from "../values";
import { AuraJSComment } from "./auraJSComment";
import { PositionData } from "./positionData";
import { Token } from "./token";

/**
 * Class to represent an Aura JavaScript function Node on Aura JavaScript when analize and parse Aura Components
 */
export class AuraJSFunction {

    nodeType: string;
    token?: Token;
    params: Token[];
    name: string;
    comment?: AuraJSComment;
    signature?: string;
    auraSignature?: string;
    positionData?: PositionData;

    /**
     * Create new Aura JS Function instance
     * @param {string | { [key: string]: any }} nameOrObject JS function name or JSFunction instance
     * @param {Token} [token] Node initial token
     * @param {AuraJSComment} [comment] Function comment
     */
    constructor(nameOrObject: string | { [key: string]: any }, token?: Token, comment?: AuraJSComment) {
        this.nodeType = AuraNodeTypes.FUNCTION;
        if (nameOrObject && typeof nameOrObject !== 'string') {
            this.name = nameOrObject.name;
            this.token = nameOrObject.token;
            this.params = nameOrObject.params;
            this.comment = (nameOrObject.comment && nameOrObject.comment.nodeType === AuraNodeTypes.JS_COMMENT_BLOCK) ? new AuraJSCommentBlock(nameOrObject.comment) : new AuraJSComment(nameOrObject.comment);
            this.signature = nameOrObject.signature;
            this.auraSignature = nameOrObject.auraSignature;
            this.positionData = nameOrObject.positionData;
        } else {
            this.name = nameOrObject;
            this.token = token;
            this.params = [];
            this.comment = comment;
            if (this.comment){
                this.comment.processComment();
            }
            this.signature = undefined;
            this.auraSignature = undefined;
            this.positionData = undefined;
        }
    }

}