import { ApexNodeTypes } from "../values";
import { ApexConstructor } from "./apexConstructor";
import { Token } from "./token";

/**
 * Class to represent an Apex Static Constructor Node when Parsing Apex Code
 */
export class ApexStaticConstructor extends ApexConstructor {

    /**
     * Constructor to create an ApexStaticConstructor instance
     * @param {string | { [key: string]: any }} idOrConstructor Node id or Object with ApexStaticConstructor fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrConstructor: string | { [key: string]: any }, name?: string, startToken?: Token){
        super(idOrConstructor, name, startToken);
        this.nodeType = ApexNodeTypes.STATIC_CONSTRUCTOR;
    }
}