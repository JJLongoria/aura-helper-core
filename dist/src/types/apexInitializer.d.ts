import { ApexMethod } from "./apexMethod";
import { Token } from "./token";
/**
 * Class to represent an Apex Initializer Node when Parsing Apex Code
 */
export declare class ApexInitializer extends ApexMethod {
    /**
     * Constructor to create an ApexInitializer instance
     * @param {string | ApexInitializer} idOrObject Node id or Object with ApexInitializer fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(id: string | ApexInitializer, name?: string, startToken?: Token);
}
