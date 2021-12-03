import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";
/**
 * Class to represent an Aura Attribute Node on XML language when analize and parse Aura XML Files
 */
export declare class AuraAttribute extends AuraNode {
    access?: AuraTagData;
    default?: AuraTagData;
    type?: AuraTagData;
    required?: AuraTagData;
    /**
     * Create new Aura Attribute instance
     * @param {string | AuraAttribute} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraAttribute, token?: Token);
}
