import { ApexNodeTypes } from "../values";
import { ApexMethod } from "./apexMethod";
import { Token } from "./token";

/**
 * Class to represent an Apex Initializer Node when Parsing Apex Code
 */
export class ApexInitializer extends ApexMethod{

    /**
     * Constructor to create an ApexInitializer instance
     * @param {string | ApexInitializer} idOrObject Node id or Object with ApexInitializer fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(id: string | ApexInitializer, name?: string, startToken?: Token){
        super(id, name, startToken);
        this.nodeType = ApexNodeTypes.INITIALIZER;
    }
}