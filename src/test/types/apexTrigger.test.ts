import { ApexTrigger, ApexVariable, SOQLQuery, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexTrigger.js', () => {
    test('Testing instance', () => {
        const apexTrigger = new ApexTrigger('id', 'name', new Token('type', 'text', 1, 0, false));
        apexTrigger.addChild(new ApexVariable('id', 'apexVar2'));
        apexTrigger.addChild(new ApexVariable('id', 'apexVar1'));
        apexTrigger.addChild(new SOQLQuery('id', 'query1'));
        expect(apexTrigger.id).toMatch('id');
        expect(apexTrigger.name).toMatch('name');
        expect(apexTrigger.nodeType).toMatch(ApexNodeTypes.TRIGGER);
        const apexTrigger2 = new ApexTrigger(apexTrigger);
        expect(apexTrigger2.id).toMatch('id');
        expect(apexTrigger2.name).toMatch('name');
        expect(apexTrigger2.nodeType).toMatch(ApexNodeTypes.TRIGGER);
    });
});