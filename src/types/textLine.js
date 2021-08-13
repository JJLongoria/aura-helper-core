const Utils = require('../utils/utils');

class TextLine {

    constructor(textOrObject, lineNumber, range){
        if(Utils.isObject(textOrObject)){
            this.firstNonWhitespaceCharacterIndex = textOrObject.firstNonWhitespaceCharacterIndex;
            this.isEmptyOrWhitespace = textOrObject.isEmptyOrWhitespace;
            this.lineNumber = textOrObject.lineNumber;
            this.range = textOrObject.range;
            this.rangeIncludingLineBreak = textOrObject.rangeIncludingLineBreak;
            this.text = textOrObject.text;
        } else {
            this.firstNonWhitespaceCharacterIndex = undefined;
            this.isEmptyOrWhitespace = undefined;
            this.lineNumber = lineNumber;
            this.range = range;
            this.rangeIncludingLineBreak = undefined;
            this.text = textOrObject;
        }
    }

}
module.exports = TextLine;