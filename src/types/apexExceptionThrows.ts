import { ApexNodeTypes } from "../values";
import { ApexNode } from "./apexNode";
import { Token } from "./token";

/**
 * Class to represent an Apex Exception throws Node when Parsing Apex Code
 */
export class ApexExceptionThrows extends ApexNode {

    /**
     * Constructor to create an ApexExceptionThrows instance
     * @param {string | { [key: string]: any }} idOrException Node id or Object with ApexInterface fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrException: string | { [key: string]: any }, name?: string, startToken?: Token) {
        super(idOrException, ApexNodeTypes.THROWS, name, startToken);
    }
}