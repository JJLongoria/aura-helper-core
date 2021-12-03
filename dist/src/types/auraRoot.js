"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraRoot = void 0;
const auraNode_1 = require("./auraNode");
/**
 * Class to represent an Aura Root Node on XML language when analize and parse Aura XML Files
 */
class AuraRoot extends auraNode_1.AuraNode {
    /**
     * Create new Aura Root instance
     * @param {string | AuraRoot} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {string} [type] Aura node type
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode, type, token) {
        super(quelifiedNameOrNode, type, token);
        if (quelifiedNameOrNode instanceof AuraRoot) {
            this.access = quelifiedNameOrNode.access;
            this.abstract = quelifiedNameOrNode.abstract;
            this.extensible = quelifiedNameOrNode.extensible;
            this.support = quelifiedNameOrNode.support;
        }
        else {
            this.access = undefined;
            this.abstract = undefined;
            this.extensible = undefined;
            this.support = undefined;
        }
    }
}
exports.AuraRoot = AuraRoot;
//# sourceMappingURL=auraRoot.js.map