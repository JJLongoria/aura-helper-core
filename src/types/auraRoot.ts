import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";

/**
 * Class to represent an Aura Root Node on XML language when analize and parse Aura XML Files
 */
export class AuraRoot extends AuraNode {

    access?: AuraTagData;
    abstract?: AuraTagData;
    extensible?: AuraTagData;
    support?: AuraTagData;

    /**
     * Create new Aura Root instance
     * @param {string | { [key: string]: any }} qualifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {string} [type] Aura node type
     * @param {Token} [token] Tag first token
     */
    constructor(qualifiedNameOrNode: string | { [key: string]: any }, type?: string, token?: Token) {
        super(qualifiedNameOrNode, type, token);
        if (qualifiedNameOrNode && typeof qualifiedNameOrNode !== 'string') {
            this.access = qualifiedNameOrNode.access;
            this.abstract = qualifiedNameOrNode.abstract;
            this.extensible = qualifiedNameOrNode.extensible;
            this.support = qualifiedNameOrNode.support;
        } else {
            this.access = undefined;
            this.abstract = undefined;
            this.extensible = undefined;
            this.support = undefined;
        }
    }

}