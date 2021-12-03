import { AuraAttribute } from "./auraAttribute";
import { AuraDependency } from "./auraDependency";
import { AuraRoot } from "./auraRoot";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";
/**
 * Class to represent an Aura Application Node on XML language when analize and parse Aura XML Files
 */
export declare class AuraApplication extends AuraRoot {
    attributes: AuraAttribute[];
    dependencies?: AuraDependency[];
    controller?: AuraTagData;
    extends?: AuraTagData;
    template?: AuraTagData;
    implements?: AuraTagData;
    implementsValues?: string[];
    useAppcache?: AuraTagData;
    fileName?: string;
    /**
     * Create new Aura Application instance
     * @param {string | AuraApplication} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraApplication, token?: Token);
}
