"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexAnnotation = void 0;
const values_1 = require("../values");
const apexNode_1 = require("./apexNode");
/**
 * Class to represent an Apex Annotation Node when Parsing Apex Code
 */
class ApexAnnotation extends apexNode_1.ApexNode {
    /**
     * Constructor to create an ApexAnnotation instance
     * @param {string | ApexAnnotation} idOrAnnotation Node id or Object with ApexAnnotation fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrAnnotation, name, startToken) {
        super(idOrAnnotation, values_1.ApexNodeTypes.ANNOTATION, name, startToken);
        if (idOrAnnotation instanceof ApexAnnotation) {
            this.tokens = idOrAnnotation.tokens;
        }
        else {
            this.tokens = [];
        }
    }
    /**
     * Method to add Annotation tokens
     * @param {Token} token Annotation token to add
     * @returns {ApexAnnotation} Return the ApexAnnotation instance
     */
    addToken(token) {
        this.tokens.push(token);
        this.endToken = token;
        return this;
    }
}
exports.ApexAnnotation = ApexAnnotation;
//# sourceMappingURL=apexAnnotation.js.map