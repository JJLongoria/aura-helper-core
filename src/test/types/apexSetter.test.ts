import { ApexSetter, ApexVariable, SOQLQuery, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexSetter.js', () => {
    test('Testing instance', () => {
        const apexSetter = new ApexSetter('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexSetter.getFirstChild()).toEqual(apexSetter.getAbosluteFirstChild());
        expect(apexSetter.getLastChild()).toEqual(apexSetter.getAbsoluteLastChild());
        apexSetter.addChild(new ApexVariable('id', 'apexVar2'));
        apexSetter.addChild(new ApexVariable('id', 'apexVar1'));
        apexSetter.addChild(new ApexVariable('id', 'apexVar3'));
        apexSetter.addChild(new SOQLQuery('id', 'query1'));
        apexSetter.addChild(new SOQLQuery('id', 'query2'));
        expect(apexSetter.getFirstChild()).toEqual(apexSetter.getAbosluteFirstChild());
        expect(apexSetter.getLastChild()).toEqual(apexSetter.getAbsoluteLastChild());
        expect(apexSetter.id).toMatch('id');
        expect(apexSetter.name).toMatch('name');
        expect(apexSetter.nodeType).toMatch(ApexNodeTypes.SETTER);
        const apexSetter2 = new ApexSetter(apexSetter);
        expect(apexSetter2.id).toMatch('id');
        expect(apexSetter2.name).toMatch('name');
        expect(apexSetter2.nodeType).toMatch(ApexNodeTypes.SETTER);
    });
});