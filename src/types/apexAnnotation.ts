import { ApexNodeTypes } from "../values";
import { ApexNode } from "./apexNode";
import { Token } from "./token";

/**
 * Class to represent an Apex Annotation Node when Parsing Apex Code
 */
class ApexAnnotation extends ApexNode {

    tokens: Token[];

    /**
     * Constructor to create an ApexAnnotation instance
     * @param {string | ApexAnnotation} idOrAnnotation Node id or Object with ApexAnnotation fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrAnnotation: string | ApexAnnotation, name?: string, startToken?: Token) {
        super(idOrAnnotation, ApexNodeTypes.ANNOTATION, name, startToken);
        if (idOrAnnotation instanceof ApexAnnotation) {
            this.tokens = idOrAnnotation.tokens;
        } else {
            this.tokens = [];
        }
    }

    /**
     * Method to add Annotation tokens
     * @param {Token} token Annotation token to add
     * @returns {ApexAnnotation} Return the ApexAnnotation instance
     */
    addToken(token: Token): ApexAnnotation {
        this.tokens.push(token);
        this.endToken = token;
        return this;
    }
}
module.exports = ApexAnnotation;