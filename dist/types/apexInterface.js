"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexInterface = void 0;
const values_1 = require("../values");
const apexClass_1 = require("./apexClass");
/**
 * Class to represent an Apex Interface Node when Parsing Apex Code
 */
class ApexInterface extends apexClass_1.ApexClass {
    /**
     * Constructor to create an ApexInterface instance
     * @param {string | ApexInterface} idOrInterface Node id or Object with ApexInterface fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrInterface, name, startToken) {
        super(idOrInterface, name, startToken);
        this.nodeType = values_1.ApexNodeTypes.INTERFACE;
    }
}
exports.ApexInterface = ApexInterface;
//# sourceMappingURL=apexInterface.js.map