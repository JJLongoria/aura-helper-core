import { ApexNode } from "./apexNode";
import { ApexVariable } from "./apexVariable";
import { SOQLQuery } from "./soqlQuery";
import { Token } from "./token";
/**
 * Class to represent a Property Apex Getter Node when Parsing Apex Code
 */
export declare class ApexSetter extends ApexNode {
    variables: {
        [key: string]: ApexVariable;
    };
    queries: SOQLQuery[];
    /**
     * Constructor to create an ApexSetter instance
     * @param {string | ApexSetter} idOrGetter Node id or Object with ApexSetter fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrGetter: string | ApexSetter, name?: string, startToken?: Token);
    /**
     * Method to add the declared variables into the getter code block
     * @param {ApexVariable} child ApexVariable child to add
     * @returns {ApexSetter} Return the ApexSetter instance
     */
    addChild(child: ApexVariable | SOQLQuery): ApexSetter;
    /**
     * Method to get the last child into the getter body
     * @returns {ApexVariable | undefined} Return the last ApexVariable declared or undefined if not found any variables
     */
    getLastChild(): ApexVariable | undefined;
    /**
     * Method to get the first child into the getter body
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getFirstChild(): ApexVariable | undefined;
    /**
     * Method to get the first child into the getter body (Equals to getFirstChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbosluteFirstChild(): ApexVariable | undefined;
    /**
     * Method to get the last child into the getter body (Equals to getLastChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbsoluteLastChild(): ApexVariable | undefined;
}
