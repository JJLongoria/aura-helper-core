const BooleanXMLField = require('../../../src/types/booleanXMLField');
const DataTypes = require('../../../src/values/datatypes');

describe('Testing ./src/types/booleanXMLField.js', () => {
    test('Testing instance', () => {
        const field = new BooleanXMLField('key', 'Label');
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(DataTypes.BOOLEAN);
        const field2 = new BooleanXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(DataTypes.BOOLEAN);
    });
});