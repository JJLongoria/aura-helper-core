"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexConstructor = void 0;
const values_1 = require("../values");
const apexMethod_1 = require("./apexMethod");
/**
 * Class to represent an Apex Constructor Node when Parsing Apex Code
 */
class ApexConstructor extends apexMethod_1.ApexMethod {
    /**
     * Constructor to create an ApexConstructor instance
     * @param {string | ApexConstructor} idOrObject Node id or Object with ApexConstructor fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken) {
        super(idOrObject, name, startToken);
        this.nodeType = values_1.ApexNodeTypes.CONSTRUCTOR;
    }
}
exports.ApexConstructor = ApexConstructor;
//# sourceMappingURL=apexConstructor.js.map