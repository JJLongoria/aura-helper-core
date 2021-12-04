import { TimeXMLField } from "../../types";
import { Datatypes } from "../../values";

describe('Testing ./src/types/timeXMLField.js', () => {
    test('Testing instance', () => {
        const field = new TimeXMLField('key', 'Label');
        field.setFormat('HH:DD:MM');
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(Datatypes.TIME);
        const field2 = new TimeXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(Datatypes.TIME);
    });
});