import { ApexSetter, ApexVariable, SOQLQuery, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexSetter.js', () => {
    test('Testing instance', () => {
        const apexGetter = new ApexSetter('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexGetter.getFirstChild()).toEqual(apexGetter.getAbosluteFirstChild());
        expect(apexGetter.getLastChild()).toEqual(apexGetter.getAbsoluteLastChild());
        apexGetter.addChild(new ApexVariable('id', 'apexVar2'));
        apexGetter.addChild(new ApexVariable('id', 'apexVar1'));
        apexGetter.addChild(new ApexVariable('id', 'apexVar3'));
        apexGetter.addChild(new SOQLQuery('id', 'query1'));
        apexGetter.addChild(new SOQLQuery('id', 'query2'));
        expect(apexGetter.getFirstChild()).toEqual(apexGetter.getAbosluteFirstChild());
        expect(apexGetter.getLastChild()).toEqual(apexGetter.getAbsoluteLastChild());
        expect(apexGetter.id).toMatch('id');
        expect(apexGetter.name).toMatch('name');
        expect(apexGetter.nodeType).toMatch(ApexNodeTypes.SETTER);
        const apexGetter2 = new ApexSetter(apexGetter);
        expect(apexGetter2.id).toMatch('id');
        expect(apexGetter2.name).toMatch('name');
        expect(apexGetter2.nodeType).toMatch(ApexNodeTypes.SETTER);
    });
});