const ApexTrigger = require('../../../src/types/apexTrigger');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexTrigger.js', () => {
    test('Testing instance', () => {
        const apexTrigger = new ApexTrigger('id', 'name', new Token('type', 'text', 1, 0, false));
        apexTrigger.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar2'
        });
        apexTrigger.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar1'
        });
        apexTrigger.addChild({
            nodeType: ApexNodeType.SOQL,
            name: 'query1'
        });
        expect(apexTrigger.id).toMatch('id');
        expect(apexTrigger.name).toMatch('name');
        expect(apexTrigger.nodeType).toMatch(ApexNodeType.TRIGGER);
        const apexTrigger2 = new ApexTrigger(apexTrigger);
        expect(apexTrigger2.id).toMatch('id');
        expect(apexTrigger2.name).toMatch('name');
        expect(apexTrigger2.nodeType).toMatch(ApexNodeType.TRIGGER);
    });
});