import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";
/**
 * Class to represent an Aura Handler Node on XML language when analize and parse Aura XML Files
 */
export declare class AuraHandler extends AuraNode {
    action?: AuraTagData;
    event?: AuraTagData;
    phase?: AuraTagData;
    includeFacets?: AuraTagData;
    /**
     * Create new Aura Handler instance
     * @param {string | AuraHandler} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraHandler, token?: Token);
}
