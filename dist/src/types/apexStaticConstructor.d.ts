import { ApexConstructor } from "./apexConstructor";
import { Token } from "./token";
/**
 * Class to represent an Apex Static Constructor Node when Parsing Apex Code
 */
export declare class ApexStaticConstructor extends ApexConstructor {
    /**
     * Constructor to create an ApexStaticConstructor instance
     * @param {string | ApexStaticConstructor} idOrConstructor Node id or Object with ApexStaticConstructor fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrConstructor: string | ApexStaticConstructor, name?: string, startToken?: Token);
}
