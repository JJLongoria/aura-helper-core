"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraNode = void 0;
const values_1 = require("../values");
/**
 * Class to represent an Aura Node on XML language when analize and parse Aura XML Files
 */
class AuraNode {
    /**
     * Create nenw Aura node instance
     * @param {string | AuraNode} qualifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {string} [nodeType] Aura node type
     * @param {string} [token] Tag first token
     */
    constructor(qualifiedNameOrNode, nodeType, token) {
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
        }
        else {
            this.nodeType = nodeType || values_1.AuraNodeTypes.COMPONENT;
            this.qualifiedName = qualifiedNameOrNode;
            this.token = token;
            this.namespace = undefined;
            this.description = undefined;
            if (this.qualifiedName && this.qualifiedName.indexOf(':') !== -1) {
                const splits = this.qualifiedName.split(':');
                this.namespace = splits[0];
                this.tagName = splits[1];
            }
            else {
                this.tagName = this.qualifiedName;
            }
            this.positionData = undefined;
            this.file = undefined;
        }
    }
}
exports.AuraNode = AuraNode;
//# sourceMappingURL=auraNode.js.map