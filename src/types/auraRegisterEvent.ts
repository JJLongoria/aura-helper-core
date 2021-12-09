import { AuraNodeTypes } from "../values";
import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";

/**
 * Class to represent an Aura Register Event Node on XML language when analize and parse Aura XML Files
 */
export class AuraRegisterEvent extends AuraNode {

    type?: AuraTagData;

    /**
     * Create new Aura Register Event instance
     * @param {string | { [key: string]: any }} qualifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(qualifiedNameOrNode: string | { [key: string]: any }, token?: Token) {
        super(qualifiedNameOrNode, AuraNodeTypes.REGISTER_EVENT, token);
        if (qualifiedNameOrNode && typeof qualifiedNameOrNode !== 'string') {
            this.type = qualifiedNameOrNode.type;
        } else {
            this.type = undefined;
        }
    }

}