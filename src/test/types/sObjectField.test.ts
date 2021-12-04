import { PicklistValue, SObjectField } from "../../types";

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
        sObjectField.addPicklistValue(new PicklistValue('pickval', 'pickval', false, true));
        sObjectField.addReferenceTo('ref');
        expect(sObjectField.name).toEqual('name');
        const sObjectField2 = new SObjectField(sObjectField);
        expect(sObjectField2.name).toEqual('name');
    });
});