"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexInitializer = void 0;
const values_1 = require("../values");
const apexMethod_1 = require("./apexMethod");
/**
 * Class to represent an Apex Initializer Node when Parsing Apex Code
 */
class ApexInitializer extends apexMethod_1.ApexMethod {
    /**
     * Constructor to create an ApexInitializer instance
     * @param {string | ApexInitializer} idOrObject Node id or Object with ApexInitializer fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(id, name, startToken) {
        super(id, name, startToken);
        this.nodeType = values_1.ApexNodeTypes.INITIALIZER;
    }
}
exports.ApexInitializer = ApexInitializer;
//# sourceMappingURL=apexInitializer.js.map