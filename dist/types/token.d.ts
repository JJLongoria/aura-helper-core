import { Range } from "./range";
/**
 * Class to represent a Language Token
 */
export declare class Token {
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
    constructor(typeOrObject: string | Token, text?: string, line?: number, startIndex?: number, isAux?: boolean);
    /**
     * Token or tokens to transform to string
     * @param {Token | Token[]} tokens Tokens to transform to text
     * @param {boolean} [onOneLine] True to put all text in the same line
     * @param {boolean} [addWs] True to put whitespace when has newline when onOneLine is true
     * @returns {string} Returns the tokens text
     */
    static toString(tokens: Token | Token[], onOneLine?: boolean, addWs?: boolean): string;
}
