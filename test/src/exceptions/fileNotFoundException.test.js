const Exception = require('../../../src/exceptions/fileNotFoundException');

describe('Testing ./src/exceptions/fileNotFoundException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('filePath');
        expect(ex.name).toMatch('FileNotFoundException');
        expect(ex.message).toMatch('filePath');
        const ex2 = new Exception('filePath', 'fileName');
        expect(ex2.name).toMatch('FileNotFoundException');
        expect(ex2.message).toMatch('filePath');
    });
});