const Exception = require('../../../src/exceptions/wrongFormatException');

describe('Testing ./src/exceptions/wrongFormatException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('message');
        expect(ex.name).toMatch('WrongFormatException');
        expect(ex.message).toMatch('message');
    });
});