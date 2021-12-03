import { AuraJSComment } from "./auraJSComment";
/**
 * Class to represent an Aura JavaScript Comment Block Node on Aura JavaScript when analize and parse Aura Components
 */
export declare class AuraJSCommentBlock extends AuraJSComment {
    constructor(commentObject?: AuraJSCommentBlock);
    /**
     * Method to process comment tokens to extract data
     */
    processComment(): void;
}
