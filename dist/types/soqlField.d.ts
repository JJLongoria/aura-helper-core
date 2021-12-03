import { ApexNode } from "./apexNode";
import { Token } from "./token";
/**
 * Class to represent an Apex SOQL Query Field Node when Parsing Apex Code
 */
export declare class SOQLField extends ApexNode {
    /**
     * Create new SOQL Field instance
     * @param {string | SOQLField} idOrField Node Id or Field instance
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrField: string | SOQLField, name?: string, startToken?: Token);
}
