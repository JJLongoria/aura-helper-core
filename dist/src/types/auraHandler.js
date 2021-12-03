"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraHandler = void 0;
const values_1 = require("../values");
const auraNode_1 = require("./auraNode");
/**
 * Class to represent an Aura Handler Node on XML language when analize and parse Aura XML Files
 */
class AuraHandler extends auraNode_1.AuraNode {
    /**
     * Create new Aura Handler instance
     * @param {string | AuraHandler} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode, token) {
        super(quelifiedNameOrNode, values_1.AuraNodeTypes.HANDLER, token);
        if (quelifiedNameOrNode instanceof AuraHandler) {
            this.action = quelifiedNameOrNode.action;
            this.event = quelifiedNameOrNode.event;
            this.phase = quelifiedNameOrNode.phase;
            this.includeFacets = quelifiedNameOrNode.includeFacets;
            this.name = quelifiedNameOrNode.name;
        }
        else {
            this.action = undefined;
            this.event = undefined;
            this.phase = undefined;
            this.includeFacets = undefined;
            this.name = undefined;
        }
    }
}
exports.AuraHandler = AuraHandler;
//# sourceMappingURL=auraHandler.js.map