"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraJSFunction = void 0;
const values_1 = require("../values");
/**
 * Class to represent an Aura JavaScript function Node on Aura JavaScript when analize and parse Aura Components
 */
class AuraJSFunction {
    /**
     * Create new Aura JS Function instance
     * @param {string | AuraJSFunction} nameOrObject JS function name or JSFunction instance
     * @param {Token} [token] Node initial token
     * @param {AuraJSComment} [comment] Function comment
     */
    constructor(nameOrObject, token, comment) {
        this.nodeType = values_1.AuraNodeTypes.FUNCTION;
        if (nameOrObject instanceof AuraJSFunction) {
            this.name = nameOrObject.name;
            this.token = nameOrObject.token;
            this.params = nameOrObject.params;
            this.comment = nameOrObject.comment;
            this.signature = nameOrObject.signature;
            this.auraSignature = nameOrObject.auraSignature;
            this.positionData = nameOrObject.positionData;
        }
        else {
            this.name = nameOrObject;
            this.token = token;
            this.params = [];
            this.comment = comment;
            if (this.comment) {
                this.comment.processComment();
            }
            this.signature = undefined;
            this.auraSignature = undefined;
            this.positionData = undefined;
        }
    }
}
exports.AuraJSFunction = AuraJSFunction;
//# sourceMappingURL=auraJSFunction.js.map