"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexExceptionThrows = void 0;
const values_1 = require("../values");
const apexNode_1 = require("./apexNode");
/**
 * Class to represent an Apex Exception throws Node when Parsing Apex Code
 */
class ApexExceptionThrows extends apexNode_1.ApexNode {
    /**
     * Constructor to create an ApexExceptionThrows instance
     * @param {string | ApexExceptionThrows} idOrException Node id or Object with ApexInterface fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrException, name, startToken) {
        super(idOrException, values_1.ApexNodeTypes.THROWS, name, startToken);
    }
}
exports.ApexExceptionThrows = ApexExceptionThrows;
//# sourceMappingURL=apexExceptionThrows.js.map