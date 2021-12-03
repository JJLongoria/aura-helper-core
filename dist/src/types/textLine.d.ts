import { Range } from "./range";
/**
 * Represent every TextDocument line
 */
export declare class TextLine {
    firstNonWhitespaceCharacterIndex?: number;
    isEmptyOrWhitespace: boolean;
    lineNumber: number;
    range?: Range;
    rangeIncludingLineBreak?: Range;
    text: string;
    /**
     * Constructor to create a TextLine instance
     * @param {string | TextLine} textOrTextLine Line Text or TextLine instance
     * @param {number} [lineNumber] TextLine Line number
     * @param {Range} [range] TextLine range
     */
    constructor(textOrTextLine: string | TextLine, lineNumber?: number, range?: Range);
}
