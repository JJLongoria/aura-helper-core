import { ApexComment } from "./apexComment";
import { ApexCommentTemplate } from "./apexCommenTemplate";
import { ApexCommentTag } from "./apexCommentTag";
import { Token } from "./token";
/**
 * Class to represent an Apex Comment Block Node when Parsing Apex Code
 */
export declare class ApexCommentBlock extends ApexComment {
    tags: {
        [key: string]: ApexCommentTag[];
    };
    startWithAsterisk: boolean;
    /**
     * Constructor to create an ApexCommentBlock instance
     * @param {string | ApexCommentBlock} idOrComment Node id or Object with ApexCommentBlock fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrComment: string | ApexCommentBlock, name?: string, startToken?: Token);
    processComment(template?: ApexCommentTemplate): void;
}
