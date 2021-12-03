"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraEvent = void 0;
const values_1 = require("../values");
const auraNode_1 = require("./auraNode");
/**
 * Class to represent an Aura Event Node on XML language when analize and parse Aura XML Files
 */
class AuraEvent extends auraNode_1.AuraNode {
    /**
     * Create new Aura Event instance
     * @param {string | AuraEvent} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode, token) {
        super(quelifiedNameOrNode, values_1.AuraNodeTypes.EVENT, token);
        if (quelifiedNameOrNode instanceof AuraEvent) {
            this.attributes = quelifiedNameOrNode.attributes;
            this.access = quelifiedNameOrNode.access;
            this.extends = quelifiedNameOrNode.extends;
            this.type = quelifiedNameOrNode.type;
            this.fileName = quelifiedNameOrNode.fileName;
        }
        else {
            this.attributes = [];
            this.access = undefined;
            this.extends = undefined;
            this.type = undefined;
            this.fileName = undefined;
        }
    }
}
exports.AuraEvent = AuraEvent;
//# sourceMappingURL=auraEvent.js.map