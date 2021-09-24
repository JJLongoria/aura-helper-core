const Position = require('./position');
const Range = require('./range');
const Utils = require('../utils/utils');
const StrUtils = require('../utils/strUtils');

class Token {

    constructor(typeOrObject, text, line, startIndex, isAux) {
        if (Utils.isObject(typeOrObject)) {
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
            this.text = text;
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
            this.range = new Range(new Position(line, startIndex), new Position(line, endIndex));
            if (this.range.start)
                this.id = this.type + '_' + this.text + '_' + this.range.start.line + ':' + this.range.start.character;
            else
                this.id = this.type + '_' + this.text;
        }
    }

    /**
     * Token or tokens to transform to string
     * @param {Token | Array<Token>} tokens 
     */
    static toString(tokens, onOneLine, addWs) {
        let text = '';
        if (!tokens)
            return text;
        tokens = Utils.forceArray(tokens);
        const len = tokens.length;
        for (let index = 0; index < len; index++) {
            const lastToken = (index - 1 >= 0) ? tokens[index - 1] : undefined;
            const token = tokens[index];
            const nextToken = (index + 1 < tokens.length) ? tokens[index + 1] : undefined;
            const newLine = (lastToken && token && lastToken.range.start.line < token.range.start.line) || !lastToken;
            if (newLine && !onOneLine)
                text += StrUtils.getWhitespaces(token.range.start.character);
            if (newLine && addWs && text.length > 0)
                text += ' ';
            text += token.text;
            if (nextToken && token && token.range.start.line === nextToken.range.start.line)
                text += StrUtils.getWhitespaces(nextToken.range.start.character - token.range.end.character);
            if (nextToken && token && token.line < nextToken.line && !onOneLine)
                text += StrUtils.getNewLines(nextToken.range.start.line - token.range.start.line);
        }
        return text;
    }
}
module.exports = Token;