import { StrUtils, Utils } from "../utils";
import { Position } from "./position";
import { Range } from "./range";

/**
 * Class to represent a Language Token
 */
export class Token {

    id: string;
    type: string;
    text: string;
    textToLower: string;
    range: Range;
    isAux: boolean;
    parentToken?: number;
    pairToken?: number;

    /**
     * Create new Token instance
     * @param {string | Token} typeOrObject Token type or Token instance
     * @param {string} [text] Token text
     * @param {number} [line] Token line number
     * @param {number} [startIndex] Token start character
     * @param {boolean} [isAux] True if token is aux token
     */
    constructor(typeOrObject: string | Token, text?: string, line?: number, startIndex?: number, isAux?: boolean) {
        if (typeOrObject instanceof Token) {
            this.id = typeOrObject.id;
            this.type = typeOrObject.type;
            this.text = typeOrObject.text;
            this.textToLower = typeOrObject.textToLower;
            this.range = typeOrObject.range;
            this.isAux = (typeOrObject.isAux !== undefined) ? typeOrObject.isAux : false;
            this.parentToken = typeOrObject.parentToken;
            this.pairToken = typeOrObject.pairToken;
        } else {
            this.type = typeOrObject;
            this.text = text || '';
            this.textToLower = this.text.toLowerCase();
            this.isAux = (isAux !== undefined) ? isAux : false;
            this.parentToken = undefined;
            this.pairToken = undefined;
            let endIndex = 0;
            if (startIndex === undefined) {
                startIndex = 0;
            } else {
                endIndex = startIndex + this.text.length
            }
            this.range = new Range(new Position(line || 0, startIndex), new Position(line || 0, endIndex));
            if (this.range.start) {
                this.id = this.type + '_' + this.text + '_' + this.range.start.line + ':' + this.range.start.character;
            } else {
                this.id = this.type + '_' + this.text;
            }
        }
    }

    /**
     * Token or tokens to transform to string
     * @param {Token | Token[]} tokens Tokens to transform to text
     * @param {boolean} [onOneLine] True to put all text in the same line
     * @param {boolean} [addWs] True to put whitespace when has newline when onOneLine is true
     * @returns {string} Returns the tokens text
     */
    static toString(tokens: Token | Token[], onOneLine?: boolean, addWs?: boolean) {
        let text = '';
        if (!tokens) {
            return text;
        }
        tokens = Utils.forceArray(tokens);
        const len = tokens.length;
        for (let index = 0; index < len; index++) {
            const lastToken = (index - 1 >= 0) ? tokens[index - 1] : undefined;
            const token = tokens[index];
            const nextToken = (index + 1 < tokens.length) ? tokens[index + 1] : undefined;
            const newLine = (lastToken && token && lastToken.range.start.line < token.range.start.line) || !lastToken;
            if (newLine && !onOneLine) {
                text += StrUtils.getWhitespaces(token.range.start.character);
            }
            if (newLine && addWs && text.length > 0) {
                text += ' ';
            }
            text += token.text;
            if (nextToken && token && token.range.start.line === nextToken.range.start.line) {
                text += StrUtils.getWhitespaces(nextToken.range.start.character - token.range.end.character);
            }
            if (nextToken && token && token.range.start.line < nextToken.range.start.line && !onOneLine) {
                text += StrUtils.getNewLines(nextToken.range.start.line - token.range.start.line);
            }
        }
        return text;
    }
}