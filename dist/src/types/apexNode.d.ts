import { PositionData } from "./positionData";
import { Token } from "./token";
/**
 * Class to represent an Apex Node. Designed to be a superclass of all Apex Nodes
 */
export declare class ApexNode {
    id: string;
    nodeType: string;
    name: string;
    namespace?: string;
    startToken?: Token;
    endToken?: Token;
    parentId?: string;
    positionData?: PositionData;
    order: number;
    memberOrder: number;
    /**
     * Constructor to create an ApexNode instance
     * @param {string | ApexNode} idOrNode Node id or Object with ApexNode fields
     * @param {string} [nodeType] Apex node type
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrNode: string | ApexNode, nodeType?: string, name?: string, startToken?: Token);
}
