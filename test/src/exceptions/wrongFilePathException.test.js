const Exception = require('../../../src/exceptions/wrongFilePathException');

describe('Testing ./src/exceptions/wrongFilePathException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('message');
        expect(ex.name).toMatch('WrongFilePathException');
        expect(ex.message).toMatch('message');
    });
});