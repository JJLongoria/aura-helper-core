"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexVariable = void 0;
const values_1 = require("../values");
const apexDeclarationNode_1 = require("./apexDeclarationNode");
/**
 * Class to represent an Apex Variable Node when Parsing Apex Code
 */
class ApexVariable extends apexDeclarationNode_1.ApexDeclarationNode {
    /**
     * Constructor to create an ApexVariable instance
     * @param {string | ApexVariable} idOrAnnotation Node id or Object with ApexVariable fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrVariable, name, startToken) {
        super(idOrVariable, values_1.ApexNodeTypes.VARIABLE, name, startToken);
    }
}
exports.ApexVariable = ApexVariable;
//# sourceMappingURL=apexVariable.js.map