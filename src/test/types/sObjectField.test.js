const SObjectField = require('../../../src/types/sObjectField');

describe('Testing ./src/types/sObjectField.js', () => {
    test('Testing instance', () => {
        const sObjectField = new SObjectField('name', 'Name', 'string', false);
        sObjectField.setName('name');
        sObjectField.setLabel('Name');
        sObjectField.setType('string');
        sObjectField.setCustom(false);
        sObjectField.setLenght(10);
        sObjectField.setNamespace('ns');
        sObjectField.setNillable(false);
        sObjectField.setRelationshipName('name');
        sObjectField.addPicklistValue('pickval');
        sObjectField.addReferenceTo('ref');
        expect(sObjectField.name).toEqual('name');
        const sObjectField2 = new SObjectField(sObjectField);
        expect(sObjectField2.name).toEqual('name');
    });
});