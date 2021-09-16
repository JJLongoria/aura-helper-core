const Exception = require('../../../src/exceptions/osNotSuportedException');

describe('Testing ./src/exceptions/osNotSuportedException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception();
        expect(ex.name).toMatch('OSNotSupportedException');
        expect(ex.message).toMatch('Operative System Not Supported');
    });
});