import { DateTimeXMLField, XMLDependencyField, XMLDataControlledField } from "../../types";
import { Datatypes } from "../../values";


describe('Testing ./src/types/dateTimeXMLField.js', () => {
    test('Testing instance', () => {
        const field = new DateTimeXMLField('key', 'Label');
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
        field.setFormat('yyyy-mm-dd');
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        expect(field.datatype).toMatch(Datatypes.DATE_TIME);
        const field2 = new DateTimeXMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
        expect(field2.datatype).toMatch(Datatypes.DATE_TIME);
    });
});