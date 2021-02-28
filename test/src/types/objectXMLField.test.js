const ObjectXMLField = require('../../../src/types/objectXMLField');
const DataTypes = require('../../../src/values/datatypes');

describe('Testing ./src/types/objectXMLField.js', () => {
    test('Testing instance', () => {
        const field = new ObjectXMLField('key', 'Label');
        field.setMinApi(10);
        field.setMaxApi(20);
        field.setFieldKey('key');
        field.setSortOrder('key');
        field.addField('field', new ObjectXMLField('field', 'Field').setMinApi(5));
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(DataTypes.OBJECT);
        const field2 = new ObjectXMLField(field);
        field2.setFields({});
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(DataTypes.OBJECT);
    });
});