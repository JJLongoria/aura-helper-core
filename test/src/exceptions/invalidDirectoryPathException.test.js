const Exception = require('../../../src/exceptions/invalidDirectoryPathException');

describe('Testing ./src/exceptions/invalidDirectoryPathException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('folderPath');
        expect(ex.name).toMatch('InvalidDirectoryPathException');
        expect(ex.message).toMatch('folderPath');
        const ex2 = new Exception('folderPath', 'folderName');
        expect(ex2.name).toMatch('InvalidDirectoryPathException');
        expect(ex2.message).toMatch('folderPath');
    });
});