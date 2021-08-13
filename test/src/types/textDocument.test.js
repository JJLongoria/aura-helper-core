const TextDocument = require('../../../src/types/textDocument');

describe('Testing ./src/types/textDocument.js', () => {
    test('Testing instance', () => {
        const textDocument = new TextDocument('fileName', 'uri', ['lines'], 'apex');
        expect(textDocument.fileName).toEqual('fileName');
        expect(textDocument.uri).toEqual('uri');
        expect(textDocument.lines).toEqual(['lines']);
        expect(textDocument.lineCount).toEqual(1);
        const textDocument2 = new TextDocument(textDocument);
        expect(textDocument2.fileName).toEqual('fileName');
        expect(textDocument2.uri).toEqual('uri');
        expect(textDocument2.lines).toEqual(['lines']);
        expect(textDocument2.lineCount).toEqual(1);
    });
});