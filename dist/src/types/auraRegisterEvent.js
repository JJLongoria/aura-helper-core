"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraRegisterEvent = void 0;
const values_1 = require("../values");
const auraNode_1 = require("./auraNode");
/**
 * Class to represent an Aura Register Event Node on XML language when analize and parse Aura XML Files
 */
class AuraRegisterEvent extends auraNode_1.AuraNode {
    /**
     * Create new Aura Register Event instance
     * @param {string | AuraRegisterEvent} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode, token) {
        super(quelifiedNameOrNode, values_1.AuraNodeTypes.REGISTER_EVENT, token);
        if (quelifiedNameOrNode instanceof AuraRegisterEvent) {
            this.type = quelifiedNameOrNode.type;
            this.name = quelifiedNameOrNode.name;
        }
        else {
            this.type = undefined;
            this.name = undefined;
        }
    }
}
exports.AuraRegisterEvent = AuraRegisterEvent;
//# sourceMappingURL=auraRegisterEvent.js.map