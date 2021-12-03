"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOQLField = void 0;
const values_1 = require("../values");
const apexNode_1 = require("./apexNode");
/**
 * Class to represent an Apex SOQL Query Field Node when Parsing Apex Code
 */
class SOQLField extends apexNode_1.ApexNode {
    /**
     * Create new SOQL Field instance
     * @param {string | SOQLField} idOrField Node Id or Field instance
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrField, name, startToken) {
        super(idOrField, values_1.ApexNodeTypes.SOQL_FIELD, name, startToken);
    }
}
exports.SOQLField = SOQLField;
//# sourceMappingURL=soqlField.js.map