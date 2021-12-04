const ApexMethod = require('../../../src/types/apexMethod');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexMethod.js', () => {
    test('Testing instance', () => {
        const apexMethod = new ApexMethod('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexMethod.id).toMatch('id');
        expect(apexMethod.name).toMatch('name');
        expect(apexMethod.nodeType).toMatch(ApexNodeType.METHOD);
        expect(apexMethod.getFirstChild()).toEqual(apexMethod.getAbosluteFirstChild());
        expect(apexMethod.getLastChild()).toEqual(apexMethod.getAbsoluteLastChild());
        apexMethod.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar2'
        });
        apexMethod.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar1'
        });
        apexMethod.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar3'
        });
        apexMethod.addParam({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar4'
        });
        apexMethod.addParam({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar5'
        });
        apexMethod.getOrderedChilds();
        apexMethod.getOrderedParams();
        apexMethod.getOrderedVariables();
        expect(apexMethod.getFirstChild()).toEqual(apexMethod.getAbosluteFirstChild());
        expect(apexMethod.getLastChild()).toEqual(apexMethod.getAbsoluteLastChild());
        const apexMethod2 = new ApexMethod(apexMethod);
        expect(apexMethod2.id).toMatch('id');
        expect(apexMethod2.name).toMatch('name');
        expect(apexMethod2.nodeType).toMatch(ApexNodeType.METHOD);
    });
});