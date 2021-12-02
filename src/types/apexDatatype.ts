import { ApexNodeTypes } from "../values";
import { ApexNode } from "./apexNode";
import { Token } from "./token";

/**
 * Class to represent an Apex Datatype Node when Parsing Apex Code
 */
export class ApexDatatype extends ApexNode {

    type?: string;
    key?: ApexDatatype;
    value?: ApexDatatype;

    /**
     * Constructor to create an ApexDatatype instance
     * @param {string | ApexDatatype} idOrDatatype Node id or Object with ApexDatatype fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrDatatype: string | ApexDatatype, name?: string, startToken?: Token) {
        super(idOrDatatype, ApexNodeTypes.DATATYPE, name, startToken);
        if (idOrDatatype instanceof ApexDatatype) {
            this.type = idOrDatatype.type;
            this.key = idOrDatatype.key;
            this.value = idOrDatatype.value;
        } else {
            this.type = undefined;
            this.key = undefined;
            this.value = undefined;
        }
    }
}