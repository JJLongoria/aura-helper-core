import { NumberXMLField } from "../../types";

describe('Testing ./src/types/numberXMLField.js', () => {
    test('Testing instance', () => {
        const field = new NumberXMLField('key', 'Label');
        field.setMinValue(0);
        field.setMaxValue(10);
        field.setAllowedValues([1, 2, 3, 4]);
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        const field2 = new NumberXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
    });
});