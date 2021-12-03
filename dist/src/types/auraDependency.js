"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraDependency = void 0;
const values_1 = require("../values");
const auraNode_1 = require("./auraNode");
/**
 * Class to represent an Aura Dependency Node on XML language when analize and parse Aura XML Files
 */
class AuraDependency extends auraNode_1.AuraNode {
    /**
     * Create new Aura Dependency instance
     * @param {string | AuraDependency} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode, token) {
        super(quelifiedNameOrNode, values_1.AuraNodeTypes.DEPENDENCY, token);
        if (quelifiedNameOrNode instanceof AuraDependency) {
            this.resource = quelifiedNameOrNode.resource;
            this.type = quelifiedNameOrNode.type;
        }
        else {
            this.resource = undefined;
            this.type = undefined;
        }
    }
}
exports.AuraDependency = AuraDependency;
//# sourceMappingURL=auraDependency.js.map