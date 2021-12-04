import { IntegerXMLField } from "../../types";
import { Datatypes } from "../../values";

describe('Testing ./src/types/integerXMLField.js', () => {
    test('Testing instance', () => {
        const field = new IntegerXMLField('key', 'Label');
        expect(field.transformValue('5')).toEqual(5);
        expect(field.transformValue(5)).toEqual(5);
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(Datatypes.INTEGER);
        const field2 = new IntegerXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(Datatypes.INTEGER);
    });
});