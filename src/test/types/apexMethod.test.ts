import { ApexMethod, ApexVariable, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexMethod.js', () => {
    test('Testing instance', () => {
        const apexMethod = new ApexMethod('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexMethod.id).toMatch('id');
        expect(apexMethod.name).toMatch('name');
        expect(apexMethod.nodeType).toMatch(ApexNodeTypes.METHOD);
        expect(apexMethod.getFirstChild()).toEqual(apexMethod.getAbosluteFirstChild());
        expect(apexMethod.getLastChild()).toEqual(apexMethod.getAbsoluteLastChild());
        apexMethod.addChild(new ApexVariable('id', 'apexVar2'));
        apexMethod.addChild(new ApexVariable('id', 'apexVar1'));
        apexMethod.addChild(new ApexVariable('id', 'apexVar3'));
        apexMethod.addParam(new ApexVariable('id', 'apexVar4'));
        apexMethod.addParam(new ApexVariable('id', 'apexVar5'));
        apexMethod.getOrderedChilds();
        apexMethod.getOrderedParams();
        apexMethod.getOrderedVariables();
        expect(apexMethod.getFirstChild()).toEqual(apexMethod.getAbosluteFirstChild());
        expect(apexMethod.getLastChild()).toEqual(apexMethod.getAbsoluteLastChild());
        const apexMethod2 = new ApexMethod(apexMethod);
        expect(apexMethod2.id).toMatch('id');
        expect(apexMethod2.name).toMatch('name');
        expect(apexMethod2.nodeType).toMatch(ApexNodeTypes.METHOD);
    });
});