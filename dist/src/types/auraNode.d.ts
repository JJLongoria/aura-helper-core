import { Token } from "./token";
import { PositionData } from "./positionData";
import { AuraTagData } from "./auraTagData";
/**
 * Class to represent an Aura Node on XML language when analize and parse Aura XML Files
 */
export declare class AuraNode {
    nodeType: string;
    qualifiedName: string;
    tagName: string;
    token?: Token;
    namespace?: string;
    description?: string;
    positionData?: PositionData;
    file?: string;
    name?: AuraTagData;
    /**
     * Create nenw Aura node instance
     * @param {string | AuraNode} qualifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {string} [nodeType] Aura node type
     * @param {string} [token] Tag first token
     */
    constructor(qualifiedNameOrNode: string | AuraNode, nodeType?: string, token?: Token);
}
