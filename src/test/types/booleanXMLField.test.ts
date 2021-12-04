import { BooleanXMLField } from "../../types";
import { Datatypes } from "../../values";

describe('Testing ./src/types/booleanXMLField.js', () => {
    test('Testing instance', () => {
        const field = new BooleanXMLField('key', 'Label');
        expect(field.transformValue('false')).toEqual(false);
        expect(field.transformValue()).toEqual(undefined);
        expect(field.transformValue(false)).toEqual(false);
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(Datatypes.BOOLEAN);
        const field2 = new BooleanXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(Datatypes.BOOLEAN);
    });
});