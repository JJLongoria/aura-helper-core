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
     * @param {string | AuraAttribute} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrObject: string | AuraAttribute, token?: Token) {
        super(quelifiedNameOrObject, AuraNodeTypes.ATTRIBUTE, token);
        if (quelifiedNameOrObject instanceof AuraAttribute) {
            this.access = quelifiedNameOrObject.access;
            this.default = quelifiedNameOrObject.default;
            this.type = quelifiedNameOrObject.type;
            this.required = quelifiedNameOrObject.required;
            this.name = quelifiedNameOrObject.name;
        } else {
            this.access = undefined;
            this.default = undefined;
            this.type = undefined;
            this.required = undefined;
        }
    }

}