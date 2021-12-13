import { NumberXMLField, XMLDependencyField, XMLDataControlledField } from "../../types";

describe('Testing ./src/types/numberXMLField.js', () => {
    test('Testing instance', () => {
        const field = new NumberXMLField('key', 'Label');
        field.setDefaultValue(50);
        field.setDefinitionReference('ref');
        field.setEditable(true);
        field.setMaxApi(10);
        field.setMergeable(false);
        field.setMetadataType('CustomObject');
        field.setMinApi(5);
        field.setRequired(false);
        field.setReserved(false);
        field.setSeparator('.');
        field.setUnique(false);
        field.linkFieldToSObject('User', 'Username');
        field.addDependencyField(new XMLDependencyField('field', 'value', 'values', 'values').setMinApi(1));
        field.addControlledField(new XMLDataControlledField('field', 'value', 'value').setMinApi(1));
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