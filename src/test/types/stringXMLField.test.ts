import { StringXMLField, XMLDataControlledField, XMLDependencyField } from "../../types";
import { Datatypes } from "../../values";

describe('Testing ./src/types/stringXMLField.js', () => {
    test('Testing instance', () => {
        const field = new StringXMLField('key', 'Label');
        field.setDefaultValue('def');
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
        field.setMaxLength(50);
        field.setCSV(true);
        field.setJSON(false);
        field.setBase64(false);
        field.setMinLength(10);
        field.transformValue(15);
        field.addMatchPattern(/matchPattern/);
        field.validate('matchPattern', 'fieldName');
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(Datatypes.STRING);
        const field2 = new StringXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(Datatypes.STRING);
    });
});