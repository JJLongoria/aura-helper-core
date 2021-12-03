import { AuraNodeTypes } from "../values";
import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";

/**
 * Class to represent an Aura Register Event Node on XML language when analize and parse Aura XML Files
 */
export class AuraRegisterEvent extends AuraNode {

    type?: AuraTagData;

    /**
     * Create new Aura Register Event instance
     * @param {string | AuraRegisterEvent} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraRegisterEvent, token?: Token) {
        super(quelifiedNameOrNode, AuraNodeTypes.REGISTER_EVENT, token);
        if (quelifiedNameOrNode instanceof AuraRegisterEvent) {
            this.type = quelifiedNameOrNode.type;
            this.name = quelifiedNameOrNode.name;
        } else {
            this.type = undefined;
            this.name = undefined;
        }
    }

}