import { ApexNodeTypes } from "../values";
import { ApexMethod } from "./apexMethod";
import { Token } from "./token";

/**
 * Class to represent an Apex Constructor Node when Parsing Apex Code
 */
export class ApexConstructor extends ApexMethod{

    /**
     * Constructor to create an ApexConstructor instance
     * @param {string | { [key: string]: any }} idOrObject Node id or Object with ApexConstructor fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject: string | { [key: string]: any }, name?: string, startToken?: Token){
        super(idOrObject, name, startToken);
        this.nodeType = ApexNodeTypes.CONSTRUCTOR;
    }
}