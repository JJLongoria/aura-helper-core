"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDocument = void 0;
const utils_1 = require("../utils/utils");
/**
 * Represent a TextDocument like TextDocuments on VScode
 */
class TextDocument {
    /**
     * Create a TextDocument intance
     * @param fileNameOrTextDocument
     * @param {any} [uri]
     * @param {TextLine[]} [lines]
     * @param {string} [languageId]
     * @param {any} [endOfLine]
     */
    constructor(fileNameOrTextDocument, uri, lines, languageId, endOfLine) {
        if (fileNameOrTextDocument instanceof TextDocument) {
            this.eol = fileNameOrTextDocument.eol;
            this.fileName = fileNameOrTextDocument.fileName;
            this.isClosed = fileNameOrTextDocument.isClosed;
            this.isDirty = fileNameOrTextDocument.isDirty;
            this.isUntitled = fileNameOrTextDocument.isUntitled;
            this.languageId = fileNameOrTextDocument.languageId;
            this.uri = fileNameOrTextDocument.uri;
            this.version = fileNameOrTextDocument.version;
            this.lines = fileNameOrTextDocument.lines;
            this.lineCount = fileNameOrTextDocument.lineCount;
        }
        else {
            this.eol = endOfLine;
            this.fileName = fileNameOrTextDocument;
            this.isClosed = false;
            this.isDirty = false;
            this.isUntitled = false;
            this.languageId = languageId;
            this.uri = uri;
            this.version = undefined;
            this.lines = (!utils_1.Utils.isNull(lines)) ? utils_1.Utils.forceArray(lines) : [];
            this.lineCount = this.lines.length;
        }
    }
    /**
     * Method to get the line at specified index (line number)
     * @param {number} lineNumber line index
     * @returns {TextLine | undefined} Return the TextLine of the specified index or null if has no lines or the index is bigger than the line count
     */
    lineAt(lineNumber) {
        if (lineNumber < this.lineCount) {
            return this.lines[lineNumber];
        }
        return undefined;
    }
}
exports.TextDocument = TextDocument;
//# sourceMappingURL=textDocument.js.map