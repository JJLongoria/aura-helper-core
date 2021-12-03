import { ApexMethod } from "./apexMethod";
import { Token } from "./token";
/**
 * Class to represent an Apex Constructor Node when Parsing Apex Code
 */
export declare class ApexConstructor extends ApexMethod {
    /**
     * Constructor to create an ApexConstructor instance
     * @param {string | ApexConstructor} idOrObject Node id or Object with ApexConstructor fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject: string | ApexConstructor, name?: string, startToken?: Token);
}
