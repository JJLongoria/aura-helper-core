import { ApexDeclarationNode } from "./apexDeclarationNode";
import { PositionData } from "./positionData";
import { Token } from "./token";
/**
 * Class to represent an Apex Enum Node when Parsing Apex Code
 */
export declare class ApexEnum extends ApexDeclarationNode {
    values: Token[];
    positionData?: PositionData;
    /**
     * Constructor to create an ApexEnum instance
     * @param {string | ApexEnum} idOrEnum Node id or Object with ApexEnum fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrEnum: string | ApexEnum, name?: string, startToken?: Token);
    /**
     * Method to add an Apex Enum child node. Childs of enums are enum values.
     * @param {Token} child
     * @returns {ApexEnum} Return the ApexEnum instance
     */
    addChild(child: Token): ApexEnum;
    /**
     * Method to get the last enum value
     * @returns {Token | undefined} Return the last enum value token
     */
    getLastChild(): Token | undefined;
    /**
     * Method to get the first enum value
     * @returns {Token | undefined} Return the first enum value token
     */
    getFirstChild(): Token | undefined;
    /**
     * Method to get the first enum value (Equals to getFirstChild())
     * @returns {Token | undefined} Return the first enum value token
     */
    getAbosluteFirstChild(): Token | undefined;
    /**
     * Method to get the first enum value (Equals to getLastChild())
     * @returns {Token | undefined} Return the first enum value token
     */
    getAbsoluteLastChild(): Token | undefined;
}
