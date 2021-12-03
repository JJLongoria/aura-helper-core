"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextLine = void 0;
/**
 * Represent every TextDocument line
 */
class TextLine {
    /**
     * Constructor to create a TextLine instance
     * @param {string | TextLine} textOrTextLine Line Text or TextLine instance
     * @param {number} [lineNumber] TextLine Line number
     * @param {Range} [range] TextLine range
     */
    constructor(textOrTextLine, lineNumber, range) {
        if (textOrTextLine instanceof TextLine) {
            this.firstNonWhitespaceCharacterIndex = textOrTextLine.firstNonWhitespaceCharacterIndex;
            this.isEmptyOrWhitespace = textOrTextLine.isEmptyOrWhitespace;
            this.lineNumber = textOrTextLine.lineNumber;
            this.range = textOrTextLine.range;
            this.rangeIncludingLineBreak = textOrTextLine.rangeIncludingLineBreak;
            this.text = textOrTextLine.text;
        }
        else {
            this.text = textOrTextLine;
            this.isEmptyOrWhitespace = !this.text || this.text.trim().length === 0;
            this.firstNonWhitespaceCharacterIndex = undefined;
            this.lineNumber = lineNumber || 0;
            this.range = range;
            this.rangeIncludingLineBreak = undefined;
        }
    }
}
exports.TextLine = TextLine;
//# sourceMappingURL=textLine.js.map