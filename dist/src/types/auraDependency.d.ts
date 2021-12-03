import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";
/**
 * Class to represent an Aura Dependency Node on XML language when analize and parse Aura XML Files
 */
export declare class AuraDependency extends AuraNode {
    resource?: AuraTagData;
    type?: AuraTagData;
    /**
     * Create new Aura Dependency instance
     * @param {string | AuraDependency} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraDependency, token?: Token);
}
