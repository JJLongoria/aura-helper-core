const Exception = require('../../../src/exceptions/dataNotFoundException');

describe('Testing ./src/exceptions/dataNotFoundException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('message');
        expect(ex.name).toMatch('DataNotFoundException');
        expect(ex.message).toMatch('message');
    });
});