const Exception = require('../../../src/exceptions/invalidFilePathException');

describe('Testing ./src/exceptions/invalidFilePathException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('filePath');
        expect(ex.name).toMatch('InvalidFilePathException');
        expect(ex.message).toMatch('filePath');
        const ex2 = new Exception('filePath', 'fileName');
        expect(ex2.name).toMatch('InvalidFilePathException');
        expect(ex2.message).toMatch('filePath');
    });
});