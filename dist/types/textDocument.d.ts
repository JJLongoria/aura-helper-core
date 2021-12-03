import { TextLine } from "./textLine";
/**
 * Represent a TextDocument like TextDocuments on VScode
 */
export declare class TextDocument {
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
    constructor(fileNameOrTextDocument: string | TextDocument, uri?: any, lines?: TextLine[], languageId?: string, endOfLine?: any);
    /**
     * Method to get the line at specified index (line number)
     * @param {number} lineNumber line index
     * @returns {TextLine | undefined} Return the TextLine of the specified index or null if has no lines or the index is bigger than the line count
     */
    lineAt(lineNumber: number): TextLine | undefined;
}
