const Exception = require('../../../src/exceptions/connectionException');

describe('Testing ./src/exceptions/connectionException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('message');
        expect(ex.name).toMatch('ConnectionException');
        expect(ex.message).toMatch('message');
    });
});