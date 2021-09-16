const Exception = require('../../../src/exceptions/cliManagerException');

describe('Testing ./src/exceptions/cliManagerException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('message');
        expect(ex.name).toMatch('CLIManagerException');
        expect(ex.message).toMatch('message');
    });
});