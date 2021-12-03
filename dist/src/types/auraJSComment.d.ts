import { AuraJSFunctionParam } from "./auraJSFunctionParam";
import { AuraJSFunctionReturn } from "./auraJSFunctionReturn";
import { Token } from "./token";
/**
 * Class to represent an Aura JavaScript Comment line Node on Aura JavaScript when analize and parse Aura Components
 */
export declare class AuraJSComment {
    nodeType: string;
    tokens: Token[];
    description: string;
    params: {
        [key: string]: AuraJSFunctionParam;
    };
    return: AuraJSFunctionReturn;
    /**
     * Create new Aura Javascript comment
     * @param {AuraJSComment} [commentObject] Comment instance
     */
    constructor(commentObject?: AuraJSComment);
    /**
     * Add comment token
     * @param token Token to add
     * @returns {AuraJSComment} Returns the AuraJSComment instance
     */
    addToken(token: Token): AuraJSComment;
    /**
     * Method to process comment tokens to extract data
     */
    processComment(): void;
}
