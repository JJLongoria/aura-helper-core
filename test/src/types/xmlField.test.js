const XMLField = require('../../../src/types/xmlField');
const XMLDependencyField = require('../../../src/types/xmlDependencyField');
const XMLDataControlledField = require('../../../src/types/xmlDataControlledField');

describe('Testing ./src/types/xmlField.js', () => {
    test('Testing instance', () => {
        const field = new XMLField('key', 'Label');
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
        expect(field.key).toMatch('key');
        expect(field.label).toMatch('Label');
        const field2 = new XMLField(field);
        expect(field2.key).toMatch('key');
        expect(field2.label).toMatch('Label');
    });
});