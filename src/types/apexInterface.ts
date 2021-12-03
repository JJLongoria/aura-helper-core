import { ApexNodeTypes } from "../values";
import { ApexClass } from "./apexClass";
import { Token } from "./token";

/**
 * Class to represent an Apex Interface Node when Parsing Apex Code
 */
export class ApexInterface extends ApexClass {

    /**
     * Constructor to create an ApexInterface instance
     * @param {string | ApexInterface} idOrInterface Node id or Object with ApexInterface fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrInterface: string | ApexInterface, name?: string, startToken?: Token) {
        super(idOrInterface, name, startToken);
        this.nodeType = ApexNodeTypes.INTERFACE;
    }
}