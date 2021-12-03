"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexNode = void 0;
const values_1 = require("../values");
/**
 * Class to represent an Apex Node. Designed to be a superclass of all Apex Nodes
 */
class ApexNode {
    /**
     * Constructor to create an ApexNode instance
     * @param {string | ApexNode} idOrNode Node id or Object with ApexNode fields
     * @param {string} [nodeType] Apex node type
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrNode, nodeType, name, startToken) {
        if (idOrNode instanceof ApexNode) {
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
        }
        else {
            this.id = idOrNode;
            this.nodeType = nodeType || values_1.ApexNodeTypes.CLASS;
            this.name = name || idOrNode;
            this.namespace = undefined;
            this.startToken = startToken;
            this.endToken = undefined;
            this.parentId = undefined;
            this.positionData = undefined;
            this.order = 0;
            this.memberOrder = 0;
        }
    }
    ;
}
exports.ApexNode = ApexNode;
//# sourceMappingURL=apexNode.js.map