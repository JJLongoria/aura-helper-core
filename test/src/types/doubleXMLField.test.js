const DoubleXMLField = require('../../../src/types/doubleXMLField');
const DataTypes = require('../../../src/values/datatypes');

describe('Testing ./src/types/doubleXMLField.js', () => {
    test('Testing instance', () => {
        const field = new DoubleXMLField('key', 'Label');
        expect(field.prepareValue(5)).toEqual('5.0');
        expect(field.prepareValue(5.5)).toEqual('5.5');
        expect(field.transformValue('5.5')).toEqual(5.5);
        expect(field.transformValue(5.5)).toEqual(5.5);
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(DataTypes.DOUBLE);
        const field2 = new DoubleXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(DataTypes.DOUBLE);
    });
});