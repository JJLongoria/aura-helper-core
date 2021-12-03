import { Token } from "./token";
import { PositionData } from "./positionData";
import { AuraNodeTypes } from "../values";

/**
 * Class to represent an Aura Node on XML language when analize and parse Aura XML Files
 */
export class AuraNode {

    nodeType: string;
    qualifiedName: string;
    tagName: string;
    token?: Token;
    namespace?: string;
    description?: string;
    positionData?: PositionData;
    file?: string;
    name: string;

    /**
     * Create nenw Aura node instance
     * @param {string | AuraNode} qualifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {string} [nodeType] Aura node type
     * @param {string} [token] Tag first token
     */
    constructor(qualifiedNameOrNode: string | AuraNode, nodeType?: string, token?: Token) {
        if (qualifiedNameOrNode instanceof AuraNode) {
            this.nodeType = qualifiedNameOrNode.nodeType;
            this.qualifiedName = qualifiedNameOrNode.qualifiedName;
            this.tagName = qualifiedNameOrNode.tagName;
            this.token = qualifiedNameOrNode.token;
            this.namespace = qualifiedNameOrNode.namespace;
            this.description = qualifiedNameOrNode.description;
            this.positionData = qualifiedNameOrNode.positionData;
            this.file = qualifiedNameOrNode.file;
            this.name = qualifiedNameOrNode.name;
        } else {
            this.nodeType = nodeType || AuraNodeTypes.COMPONENT;
            this.qualifiedName = qualifiedNameOrNode;
            this.token = token;
            this.namespace = undefined;
            this.description = undefined;
            if(this.qualifiedName && this.qualifiedName.indexOf(':') !== -1){
                const splits = this.qualifiedName.split(':');
                this.namespace = splits[0];
                this.tagName = splits[1];
            } else {
                this.tagName = this.qualifiedName;
            }
            this.name = this.tagName;
            this.positionData = undefined;
            this.file = undefined;
        }
    }

}