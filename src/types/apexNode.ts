import { ApexNodeTypes } from "../values";
import { PositionData } from "./positionData";
import { Token } from "./token";

/**
 * Class to represent an Apex Node. Designed to be a superclass of all Apex Nodes
 */
export class ApexNode {

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
    constructor(idOrNode: string | ApexNode, nodeType?: string, name?: string, startToken?: Token) {
        if(idOrNode instanceof ApexNode){
            this.id = idOrNode.id;
            this.nodeType = idOrNode.nodeType;
            this.name = idOrNode.name;
            this.namespace = idOrNode.namespace;
            this.startToken = idOrNode.startToken;
            this.endToken = idOrNode.endToken;
            this.parentId = idOrNode.parentId;
            this.positionData = idOrNode.positionData;
            this.order = idOrNode.order;
            this.memberOrder = idOrNode.memberOrder;
        } else {
            this.id = idOrNode;
            this.nodeType = nodeType || ApexNodeTypes.CLASS;
            this.name = name || idOrNode;
            this.namespace = undefined;
            this.startToken = startToken;
            this.endToken = undefined;
            this.parentId = undefined;
            this.positionData = undefined;
            this.order = 0;
            this.memberOrder = 0;
        }
    };
}