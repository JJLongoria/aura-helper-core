import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";
/**
 * Class to represent an Aura Root Node on XML language when analize and parse Aura XML Files
 */
export declare class AuraRoot extends AuraNode {
    access?: AuraTagData;
    abstract?: AuraTagData;
    extensible?: AuraTagData;
    support?: AuraTagData;
    /**
     * Create new Aura Root instance
     * @param {string | AuraRoot} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {string} [type] Aura node type
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraRoot, type?: string, token?: Token);
}
