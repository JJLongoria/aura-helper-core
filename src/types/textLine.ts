import { Range } from "./range";

/**
 * Represent every TextDocument line
 */
export class TextLine {

    firstNonWhitespaceCharacterIndex?: number;
    isEmptyOrWhitespace: boolean;
    lineNumber: number;
    range?: Range;
    rangeIncludingLineBreak?: Range;
    text: string;

    /**
     * Constructor to create a TextLine instance
     * @param {string | { [key: string]: any }} textOrTextLine Line Text or TextLine instance
     * @param {number} [lineNumber] TextLine Line number
     * @param {Range} [range] TextLine range
     */
    constructor(textOrTextLine: string | { [key: string]: any }, lineNumber?: number, range?: Range){
        if(textOrTextLine && typeof textOrTextLine !== 'string'){
            this.firstNonWhitespaceCharacterIndex = textOrTextLine.firstNonWhitespaceCharacterIndex;
            this.isEmptyOrWhitespace = textOrTextLine.isEmptyOrWhitespace;
            this.lineNumber = textOrTextLine.lineNumber;
            this.range = textOrTextLine.range;
            this.rangeIncludingLineBreak = textOrTextLine.rangeIncludingLineBreak;
            this.text = textOrTextLine.text;
        } else {
            this.text = textOrTextLine;
            this.isEmptyOrWhitespace = !this.text || this.text.trim().length === 0;
            this.firstNonWhitespaceCharacterIndex = undefined;
            this.lineNumber = lineNumber || 0;
            this.range = range;
            this.rangeIncludingLineBreak = undefined;
        }
    }

}