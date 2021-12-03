import { ApexCommentTemplate } from "./apexCommenTemplate";
import { ApexNode } from "./apexNode";
import { Token } from "./token";
/**
 * Class to represent an Apex Comment Node when Parsing Apex Code
 */
export declare class ApexComment extends ApexNode {
    tokens: Token[];
    description: string;
    /**
     * Constructor to create an ApexComment instance
     * @param {string | ApexComment} idOrComment Node id or Object with ApexComment fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrComment: string | ApexComment, name?: string, startToken?: Token);
    /**
     * Method to add Comment tokens
     * @param {Token} token Comment token to add
     * @returns {ApexComment} Return the ApexComment instance
     */
    addToken(token: Token): ApexComment;
    /**
     * Method to process comment tokens to extract data
     * @param {ApexCommentTemplate} template Apex Comment Template to process
     */
    processComment(_template: ApexCommentTemplate): void;
}
