import { ApexNodeTypes } from "../values";
import { ApexNode } from "./apexNode";
import { Token } from "./token";

/**
 * Class to represent an Apex SOQL Query Field Node when Parsing Apex Code
 */
export class SOQLField extends ApexNode {

    /**
     * Create new SOQL Field instance
     * @param {string | { [key: string]: any }} idOrField Node Id or Field instance
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrField: string | { [key: string]: any }, name?: string, startToken?: Token) {
        super(idOrField, ApexNodeTypes.SOQL_FIELD, name, startToken);
    }

}