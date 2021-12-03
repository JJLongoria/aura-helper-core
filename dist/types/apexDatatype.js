"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexDatatype = void 0;
const values_1 = require("../values");
const apexNode_1 = require("./apexNode");
/**
 * Class to represent an Apex Datatype Node when Parsing Apex Code
 */
class ApexDatatype extends apexNode_1.ApexNode {
    /**
     * Constructor to create an ApexDatatype instance
     * @param {string | ApexDatatype} idOrDatatype Node id or Object with ApexDatatype fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrDatatype, name, startToken) {
        super(idOrDatatype, values_1.ApexNodeTypes.DATATYPE, name, startToken);
        if (idOrDatatype instanceof ApexDatatype) {
            this.type = idOrDatatype.type;
            this.key = idOrDatatype.key;
            this.value = idOrDatatype.value;
        }
        else {
            this.type = undefined;
            this.key = undefined;
            this.value = undefined;
        }
    }
}
exports.ApexDatatype = ApexDatatype;
//# sourceMappingURL=apexDatatype.js.map