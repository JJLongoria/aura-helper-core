const TextLine = require('../../../src/types/textLine');

describe('Testing ./src/types/textLine.js', () => {
    test('Testing instance', () => {
        const textLine = new TextLine('text', 1);
        expect(textLine.text).toEqual('text');
        expect(textLine.lineNumber).toEqual(1);
        const textLine2 = new TextLine(textLine);
        expect(textLine2.text).toEqual('text');
        expect(textLine2.lineNumber).toEqual(1);
    });
});