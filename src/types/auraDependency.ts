import { AuraNodeTypes } from "../values";
import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";

/**
 * Class to represent an Aura Dependency Node on XML language when analize and parse Aura XML Files
 */
export class AuraDependency extends AuraNode {

    resource?: AuraTagData;
    type?: AuraTagData;

    /**
     * Create new Aura Dependency instance
     * @param {string | AuraDependency} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraDependency, token?: Token) {
        super(quelifiedNameOrNode, AuraNodeTypes.DEPENDENCY, token);
        if (quelifiedNameOrNode instanceof AuraDependency) {
            this.resource = quelifiedNameOrNode.resource;
            this.type = quelifiedNameOrNode.type;
        } else {
            this.resource = undefined;
            this.type = undefined;
        }
    }

}