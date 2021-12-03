import { AuraJSComment } from "./auraJSComment";
import { PositionData } from "./positionData";
import { Token } from "./token";
/**
 * Class to represent an Aura JavaScript function Node on Aura JavaScript when analize and parse Aura Components
 */
export declare class AuraJSFunction {
    nodeType: string;
    token?: Token;
    params: string[];
    name: string;
    comment?: AuraJSComment;
    signature?: string;
    auraSignature?: string;
    positionData?: PositionData;
    /**
     * Create new Aura JS Function instance
     * @param {string | AuraJSFunction} nameOrObject JS function name or JSFunction instance
     * @param {Token} [token] Node initial token
     * @param {AuraJSComment} [comment] Function comment
     */
    constructor(nameOrObject: string | AuraJSFunction, token?: Token, comment?: AuraJSComment);
}
