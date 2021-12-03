import { AuraAttribute } from "./auraAttribute";
import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";
/**
 * Class to represent an Aura Event Node on XML language when analize and parse Aura XML Files
 */
export declare class AuraEvent extends AuraNode {
    attributes: AuraAttribute[];
    access?: AuraTagData;
    extends?: AuraTagData;
    type?: AuraTagData;
    fileName?: string;
    /**
     * Create new Aura Event instance
     * @param {string | AuraEvent} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraEvent, token?: Token);
}
