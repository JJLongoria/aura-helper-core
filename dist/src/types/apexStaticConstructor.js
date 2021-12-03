"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexStaticConstructor = void 0;
const values_1 = require("../values");
const apexConstructor_1 = require("./apexConstructor");
/**
 * Class to represent an Apex Static Constructor Node when Parsing Apex Code
 */
class ApexStaticConstructor extends apexConstructor_1.ApexConstructor {
    /**
     * Constructor to create an ApexStaticConstructor instance
     * @param {string | ApexStaticConstructor} idOrConstructor Node id or Object with ApexStaticConstructor fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrConstructor, name, startToken) {
        super(idOrConstructor, name, startToken);
        this.nodeType = values_1.ApexNodeTypes.STATIC_CONSTRUCTOR;
    }
}
exports.ApexStaticConstructor = ApexStaticConstructor;
//# sourceMappingURL=apexStaticConstructor.js.map