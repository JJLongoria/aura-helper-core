import { EnumXMLField } from "../../types";
import { Datatypes } from "../../values";

describe('Testing ./src/types/enumXMLField.js', () => {
    test('Testing instance', () => {
        const field = new EnumXMLField('key', 'Label');
        field.setMinApi(10);
        field.setMaxApi(20);
        field.setMultiChoice(true);
        field.addEnumValue('label3', 'value3', 5, 15);
        field.setEnumValues(undefined);
        field.setEnumValues([{
            label: 'label',
            value: 'value',
            minApi: 5,
            maxApi: 15
        },{
            label: 'label1',
            value: 'value1',
            minApi: 5,
            maxApi: 15
        }]);
        expect(field.getValue('label1')).toMatch('value1');
        expect(field.getValue('label3')).toBeUndefined();
        expect(field.getLabel('value1')).toMatch('label1');
        expect(field.getLabel('label3')).toBeUndefined();
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(Datatypes.ENUM);
        const field2 = new EnumXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(Datatypes.ENUM);
    });
});