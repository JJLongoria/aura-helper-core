const SObject = require('../../../src/types/sObject');
const SObjectField = require('../../../src/types/sObjectField');

describe('Testing ./src/types/sObject.js', () => {
    test('Testing instance', () => {
        const sObject = new SObject('name', 'Name', 'Names', '011', false);
        sObject.setName('name');
        sObject.setLabel('Name');
        sObject.setLabelPlural('Names');
        sObject.setKeyPrefix('011');
        sObject.setCustom(false);
        sObject.setCustomSetting(false);
        sObject.setNamespace('ns');
        sObject.setQueryable(true);
        sObject.addField('name', new SObjectField('Name', 'Name', 'string', false));
        sObject.addRecordType('recordType');
        sObject.getField('name');
        expect(sObject.name).toEqual('name');
        const sObject2 = new SObject(sObject);
        expect(sObject2.name).toEqual('name');
    });
});