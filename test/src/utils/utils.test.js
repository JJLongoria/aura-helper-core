const Utils = require('../../../src/utils/utils');
const MetadataType = require('../../../src/types/metadataType');
const MetadataObject = require('../../../src/types/metadataObject');
const MetadataItem = require('../../../src/types/metadataItem');
const SObject = require('../../../src/types/sObject');
const SObjectField = require('../../../src/types/sObjectField');
const RecordType = require('../../../src/types/recordType');
const PicklistValue = require('../../../src/types/picklistValue');

describe('Testing ./src/utils/utils.js', () => {
    test('Testing forceArray()', () => {
        let result = Utils.forceArray('hi');
        expect(result).toEqual(['hi']);
        result = Utils.forceArray(['hi']);
        expect(result).toEqual(['hi']);
        result = Utils.forceArray(undefined);
        expect(result).toEqual(undefined);
    });
    test('Testing orderMetadata()', () => {
        const metadata = {};
        metadata['Workflow'] = new MetadataType('Workflow');
        metadata['Workflow'].addChild('Account', new MetadataObject('Account'));
        metadata['Workflow'].addChild('Case', new MetadataObject('Case'));
        metadata['CustomField'] = new MetadataType('CustomField');
        metadata['CustomField'].addChild('Account', new MetadataObject('Account'));
        metadata['CustomField'].getChild('Account').addChild('Name', new MetadataItem('Name'));
        metadata['CustomField'].getChild('Account').addChild('Id', new MetadataItem('Id'));
        metadata['CustomField'].getChild('Account').addChild('FirstName', new MetadataItem('FirstName'));
        metadata['CustomField'].addChild('Case', new MetadataObject('Case'));
        metadata['CustomField'].getChild('Case').addChild('Subject', new MetadataItem('Subject'));
        metadata['CustomField'].getChild('Case').addChild('Description', new MetadataItem('Description'));
        metadata['CustomField'].getChild('Case').addChild('CaseNumber', new MetadataItem('CaseNumber'));
        let orderedMetadata = Utils.orderMetadata(metadata);
        let keys = Object.keys(orderedMetadata);
        expect(keys[0]).toMatch('CustomField');
        expect(keys[1]).toMatch('Workflow');
    });
    test('Testing orderSObjects()', () => {
        const sObjects = {};
        sObjects['Case'] = new SObject('Case', 'Case', 'Cases', '500', false);
        sObjects['Case'].addField('Subject', new SObjectField('Subject', 'Subject', 'string', false));
        sObjects['Case'].addField('Description', new SObjectField('Description', 'Description', 'string', false));
        sObjects['Case'].addField('CaseNumber', new SObjectField('CaseNumber', 'Case Number', 'string', false));
        sObjects['Account'] = new SObject('Account', 'Account', 'Accounts', '001', false);
        sObjects['Account'].addField('Zip', new SObjectField('Zip', 'Zip', 'string', false));
        sObjects['Account'].addField('Acc__c', new SObjectField('Acc__c', 'Account', 'string', true));
        sObjects['Account'].addField('Name', new SObjectField('Name', 'Name', 'string', false));
        let orderedSObject = Utils.orderSObjects(sObjects);
        let keys = Object.keys(orderedSObject);
        expect(keys[0]).toMatch('Account');
        expect(keys[1]).toMatch('Case');
        let accFieldKeys = Object.keys(sObjects['Account'].fields);
        expect(accFieldKeys[0]).toMatch('Acc__c');
        expect(accFieldKeys[1]).toMatch('Name');
        expect(accFieldKeys[2]).toMatch('Zip');
        let caseFieldKeys = Object.keys(sObjects['Case'].fields);
        expect(caseFieldKeys[0]).toMatch('CaseNumber');
        expect(caseFieldKeys[1]).toMatch('Description');
        expect(caseFieldKeys[2]).toMatch('Subject');
    });
});