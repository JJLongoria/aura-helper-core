const Exception = require('../../../src/exceptions/dataRequiredException');

describe('Testing ./src/exceptions/dataRequiredException.js', () => {
    test('Testing instance()', () => {
        const ex = new Exception('fieldName');
        expect(ex.name).toMatch('DataRequiredException');
        expect(ex.message).toMatch('fieldName is Required');
    });
});