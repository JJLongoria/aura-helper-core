import { Utils } from "../utils/utils";
import { TextLine } from "./textLine";

/**
 * Represent a TextDocument like TextDocuments on VScode
 */
export class TextDocument {

    eol: any;
    fileName: string;
    isClosed: boolean;
    isDirty: boolean;
    isUntitled: boolean;
    languageId?: string;
    uri: any;
    version?: string;
    lines: TextLine[];
    lineCount: number;

    /**
     * Create a TextDocument intance
     * @param fileNameOrTextDocument 
     * @param {any} [uri] 
     * @param {TextLine[]} [lines] 
     * @param {string} [languageId] 
     * @param {any} [endOfLine] 
     */
    constructor(fileNameOrTextDocument: string | TextDocument, uri?: any, lines?: TextLine[], languageId?: string, endOfLine?: any) {
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
        } else {
            this.eol = endOfLine;
            this.fileName = fileNameOrTextDocument;
            this.isClosed = false;
            this.isDirty = false;
            this.isUntitled = false;
            this.languageId = languageId;
            this.uri = uri;
            this.version = undefined;
            this.lines = (!Utils.isNull(lines)) ? Utils.forceArray(lines) : [];
            this.lineCount = this.lines.length;
        }
    }

    /**
     * Method to get the line at specified index (line number)
     * @param {number} lineNumber line index
     * @returns {TextLine | undefined} Return the TextLine of the specified index or null if has no lines or the index is bigger than the line count
     */
    lineAt(lineNumber: number): TextLine | undefined {
        if (lineNumber < this.lineCount) {
            return this.lines[lineNumber];
        }
        return undefined;
    }

}