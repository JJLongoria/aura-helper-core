import { BooleanXMLField, XMLDependencyField, XMLDataControlledField } from "../../types";
import { Datatypes } from "../../values";

describe('Testing ./src/types/booleanXMLField.js', () => {
    test('Testing instance', () => {
        const field = new BooleanXMLField('key', 'Label');
        field.setDefaultValue(false);
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