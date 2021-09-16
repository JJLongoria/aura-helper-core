const Exception = require('../../../src/exceptions/wrongDirectoryPathException');

describe('Testing ./src/exceptions/wrongDirectoryPathException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('message');
        expect(ex.name).toMatch('WrongDirectoryPathException');
        expect(ex.message).toMatch('message');
    });
});