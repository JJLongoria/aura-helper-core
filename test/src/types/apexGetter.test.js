const ApexGetter = require('../../../src/types/apexGetter');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexGetter.js', () => {
    test('Testing instance', () => {
        const apexGetter = new ApexGetter('id', 'name', new Token('type', 'text', 1, 0, false));
        apexGetter.addChild(undefined);
        apexGetter.addChild(new Token('type', 'text', 1, 0, false));
        apexGetter.addChild(new Token('type', 'text', 1, 0, false));
        expect(apexGetter.getFirstChild()).toEqual(apexGetter.getAbosluteFirstChild());
        expect(apexGetter.getLastChild()).toEqual(apexGetter.getAbsoluteLastChild());
        apexGetter.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar2'
        });
        apexGetter.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar1'
        });
        apexGetter.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar3'
        });
        apexGetter.addChild({
            nodeType: ApexNodeType.SOQL,
            name: 'query1'
        });
        apexGetter.addChild({
            nodeType: ApexNodeType.SOQL,
            name: 'query2'
        });
        expect(apexGetter.getFirstChild()).toEqual(apexGetter.getAbosluteFirstChild());
        expect(apexGetter.getLastChild()).toEqual(apexGetter.getAbsoluteLastChild());
        expect(apexGetter.id).toMatch('id');
        expect(apexGetter.name).toMatch('name');
        expect(apexGetter.nodeType).toMatch(ApexNodeType.GETTER);
        const apexGetter2 = new ApexGetter(apexGetter);
        expect(apexGetter2.id).toMatch('id');
        expect(apexGetter2.name).toMatch('name');
        expect(apexGetter2.nodeType).toMatch(ApexNodeType.GETTER);
    });
});