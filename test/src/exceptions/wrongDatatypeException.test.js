const Exception = require('../../../src/exceptions/wrongDatatypeException');

describe('Testing ./src/exceptions/wrongDatatypeException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('message');
        expect(ex.name).toMatch('WrongDatatypeException');
        expect(ex.message).toMatch('message');
    });
});