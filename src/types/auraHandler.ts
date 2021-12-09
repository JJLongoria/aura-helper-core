import { AuraNodeTypes } from "../values";
import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";

/**
 * Class to represent an Aura Handler Node on XML language when analize and parse Aura XML Files
 */
export class AuraHandler extends AuraNode {

    action?: AuraTagData;
    event?: AuraTagData;
    phase?: AuraTagData;
    includeFacets?: AuraTagData;

    /**
     * Create new Aura Handler instance
     * @param {string | { [key: string]: any }} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | { [key: string]: any }, token?: Token) {
        super(quelifiedNameOrNode, AuraNodeTypes.HANDLER, token);
        if (quelifiedNameOrNode && typeof quelifiedNameOrNode !== 'string') {
            this.action = quelifiedNameOrNode.action;
            this.event = quelifiedNameOrNode.event;
            this.phase = quelifiedNameOrNode.phase;
            this.includeFacets = quelifiedNameOrNode.includeFacets;
            this.name = quelifiedNameOrNode.name;
        } else {
            this.action = undefined;
            this.event = undefined;
            this.phase = undefined;
            this.includeFacets = undefined;
            this.name = undefined;
        }
    }

}
