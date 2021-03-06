const DateTimeXMLField = require('../../../src/types/dateTimeXMLField');
const DataTypes = require('../../../src/values/datatypes');

describe('Testing ./src/types/dateTimeXMLField.js', () => {
    test('Testing instance', () => {
        const field = new DateTimeXMLField('key', 'Label');
        field.setFormat('yyyy-mm-dd');
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(DataTypes.DATE_TIME);
        const field2 = new DateTimeXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(DataTypes.DATE_TIME);
    });
});