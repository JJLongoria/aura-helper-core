const ArrayXMLField = require('../../../src/types/arrayXMLField');
const DataTypes = require('../../../src/values/datatypes');

describe('Testing ./src/types/arrayXMLField.js', () => {
    test('Testing instance', () => {
        const field = new ArrayXMLField('key', 'Label');
        field.setMaxItems(10);
        field.addAllowedValue('label', 'value', '10.0', '50.0');
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(DataTypes.ARRAY);
        const field2 = new ArrayXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(DataTypes.ARRAY);
    });
});