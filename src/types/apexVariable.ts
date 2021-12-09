import { ApexNodeTypes } from "../values";
import { ApexDeclarationNode } from "./apexDeclarationNode";
import { Token } from "./token";

/**
 * Class to represent an Apex Variable Node when Parsing Apex Code
 */
export class ApexVariable extends ApexDeclarationNode{

    /**
     * Constructor to create an ApexVariable instance
     * @param {string | { [key: string]: any }} idOrAnnotation Node id or Object with ApexVariable fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrVariable: string | { [key: string]: any }, name?: string, startToken?: Token){
        super(idOrVariable, ApexNodeTypes.VARIABLE, name, startToken);
    }
}