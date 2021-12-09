import { AuraNodeTypes } from "../values";
import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";

/**
 * Class to represent an Aura Attribute Node on XML language when analize and parse Aura XML Files
 */
export class AuraAttribute extends AuraNode {

    access?: AuraTagData;
    default?: AuraTagData;
    type?: AuraTagData;
    required?: AuraTagData;

    /**
     * Create new Aura Attribute instance
     * @param {string | { [key: string]: any }} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | { [key: string]: any }, token?: Token) {
        super(quelifiedNameOrNode, AuraNodeTypes.ATTRIBUTE, token);
        if (quelifiedNameOrNode && typeof quelifiedNameOrNode !== 'string') {
            this.access = quelifiedNameOrNode.access;
            this.default = quelifiedNameOrNode.default;
            this.type = quelifiedNameOrNode.type;
            this.required = quelifiedNameOrNode.required;
            this.name = quelifiedNameOrNode.name;
        } else {
            this.access = undefined;
            this.default = undefined;
            this.type = undefined;
            this.required = undefined;
        }
    }

}