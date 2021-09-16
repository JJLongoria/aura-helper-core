const Exception = require('../../../src/exceptions/operationNotSupportedException');

describe('Testing ./src/exceptions/operationNotSupportedException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('message');
        expect(ex.name).toMatch('OperationNotSupportedException');
        expect(ex.message).toMatch('message');
    });
});