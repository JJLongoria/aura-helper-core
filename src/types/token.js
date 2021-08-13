const Position = require('./position');
const Range = require('./range');
const Utils = require('../utils/utils');

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
            if (startIndex === undefined){
                startIndex = 0;
            } else {
                endIndex = startIndex + this.text.length
            }
            this.range = new Range(new Position(line, startIndex), new Position(line, endIndex));
            if(this.range.start)
                this.id = this.type + '_' + this.text + '_' + this.range.start.line + ':' + this.range.start.character;
            else
                this.id = this.type + '_' + this.text;
        }
    }
}
module.exports = Token;