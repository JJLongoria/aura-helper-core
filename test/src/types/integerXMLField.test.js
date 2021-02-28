const IntegerXMLField = require('../../../src/types/integerXMLField');
const DataTypes = require('../../../src/values/datatypes');

describe('Testing ./src/types/integerXMLField.js', () => {
    test('Testing instance', () => {
        const field = new IntegerXMLField('key', 'Label');
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(DataTypes.INTEGER);
        const field2 = new IntegerXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(DataTypes.INTEGER);
    });
});