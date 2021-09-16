const SOQLField = require('../../../src/types/soqlField');
const Token = require('../../../src/types/token');

describe('Testing ./src/types/soqlField.js', () => {
    test('Testing instance', () => {
        const soqlField = new SOQLField('id', 'Name', new Token('type', 'Name', 1, 0, false));
        expect(soqlField.name).toEqual('Name');
        const soqlField2 = new SOQLField(soqlField);
        expect(soqlField2.name).toEqual('Name');
    });
});