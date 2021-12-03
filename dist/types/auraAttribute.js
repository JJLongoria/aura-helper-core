"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraAttribute = void 0;
const values_1 = require("../values");
const auraNode_1 = require("./auraNode");
/**
 * Class to represent an Aura Attribute Node on XML language when analize and parse Aura XML Files
 */
class AuraAttribute extends auraNode_1.AuraNode {
    /**
     * Create new Aura Attribute instance
     * @param {string | AuraAttribute} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode, token) {
        super(quelifiedNameOrNode, values_1.AuraNodeTypes.ATTRIBUTE, token);
        if (quelifiedNameOrNode instanceof AuraAttribute) {
            this.access = quelifiedNameOrNode.access;
            this.default = quelifiedNameOrNode.default;
            this.type = quelifiedNameOrNode.type;
            this.required = quelifiedNameOrNode.required;
            this.name = quelifiedNameOrNode.name;
        }
        else {
            this.access = undefined;
            this.default = undefined;
            this.type = undefined;
            this.required = undefined;
        }
    }
}
exports.AuraAttribute = AuraAttribute;
//# sourceMappingURL=auraAttribute.js.map