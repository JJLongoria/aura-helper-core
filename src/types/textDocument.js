const Utils = require('../utils/utils');

class TextDocument {

    constructor(fileNameOrObject, uri, lines, languageId, endOfLine){
        if(Utils.isObject(fileNameOrObject)){
            this.eol = fileNameOrObject.oef;
            this.fileName = fileNameOrObject.fileName;
            this.isClosed = fileNameOrObject.isClosed;
            this.isDirty = fileNameOrObject.isDirty;
            this.isUntitled = fileNameOrObject.isUntitled;
            this.languageId = fileNameOrObject.languageId;
            this.uri = fileNameOrObject.uri;
            this.version = fileNameOrObject.version;
            this.lines = fileNameOrObject.lines;
            this.lineCount = fileNameOrObject.lineCount;
        } else {
            this.eol = endOfLine;
            this.fileName = fileNameOrObject;
            this.isClosed = false;
            this.isDirty = false;
            this.isUntitled = false;
            this.languageId = languageId;
            this.uri = uri;
            this.version = undefined;
            this.lines = (!Utils.isNull(lines)) ? Utils.forceArray(lines): [];
            this.lineCount = this.lines.length;
        }
    }

    lineAt(line){
        if(line < this.lineCount)
            return this.lines[line];
        return undefined;
    }

}
module.exports = TextDocument;