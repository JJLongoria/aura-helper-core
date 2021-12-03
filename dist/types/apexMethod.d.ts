import { ApexDeclarationNode } from "./apexDeclarationNode";
import { ApexExceptionThrows } from "./apexExceptionThrows";
import { ApexVariable } from "./apexVariable";
import { SOQLQuery } from "./soqlQuery";
import { Token } from "./token";
/**
 * Class to represent an Apex Method Node when Parsing Apex Code
 */
export declare class ApexMethod extends ApexDeclarationNode {
    testMethod?: Token;
    variables: {
        [key: string]: ApexVariable;
    };
    params: {
        [key: string]: ApexVariable;
    };
    queries: SOQLQuery[];
    exceptions: ApexExceptionThrows[];
    /**
     * Constructor to create an ApexMethod instance
     * @param {String | ApexMethod} idOrMethod Node id or Object with ApexMethod fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrMethod: string | ApexMethod, name?: string, startToken?: Token);
    /**
     * Method to add the declared variables into the method code block
     * @param {ApexVariable | SOQLQuery | ApexExceptionThrows} child child to add
     * @returns {ApexMethod} Return the ApexMethod instance
     */
    addChild(child: ApexVariable | SOQLQuery | ApexExceptionThrows): this;
    /**
     * Method to add the method parameters
     * @param {ApexVariable} child ApexVariable parameter to add
     * @returns {ApexMethod} Return the ApexMethod instance
     */
    addParam(child: ApexVariable): ApexMethod;
    /**
     * Method to get an array with the method parameters ordered by position on the signature
     * @returns {ApexVariable[]} Return the method parameters ordered by position
     */
    getOrderedParams(): ApexVariable[];
    /**
     * Method to get an array with the method declared variables in order of declaration
     * @returns {ApexVariable[]} Return the method parameters ordered by declaration
     */
    getOrderedVariables(): ApexVariable[];
    /**
     * Method to get the last child into the method body
     * @returns {ApexVariable | undefined} Return the last ApexVariable declared or undefined if not found any variables
     */
    getLastChild(): ApexVariable | undefined;
    /**
     * Method to get the first child into the method body
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getFirstChild(): ApexVariable | undefined;
    /**
     * Method to get the first child into the method body (Equals to getFirstChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbosluteFirstChild(): ApexVariable | undefined;
    /**
     * Method to get the last child into the method body (Equals to getLastChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbsoluteLastChild(): ApexVariable | undefined;
}
