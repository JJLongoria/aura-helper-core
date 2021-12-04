import { TextDocument, TextLine } from "../../types";

describe('Testing ./src/types/textDocument.js', () => {
    test('Testing instance', () => {
        const textDocument = new TextDocument('fileName', 'uri', [new TextLine('lines', 1)], 'apex');
        expect(textDocument.fileName).toEqual('fileName');
        expect(textDocument.uri).toEqual('uri');
        expect(textDocument.lines).toEqual([new TextLine('lines', 1)]);
        expect(textDocument.lineCount).toEqual(1);
        const textDocument2 = new TextDocument(textDocument);
        expect(textDocument2.fileName).toEqual('fileName');
        expect(textDocument2.uri).toEqual('uri');
        expect(textDocument2.lines).toEqual([new TextLine('lines', 1)]);
        expect(textDocument2.lineCount).toEqual(1);
    });
});