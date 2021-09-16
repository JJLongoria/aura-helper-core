const Exception = require('../../../src/exceptions/operationNotAllowedException');

describe('Testing ./src/exceptions/operationNotAllowedException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('message');
        expect(ex.name).toMatch('OperationNotAllowedException');
        expect(ex.message).toMatch('message');
    });
});