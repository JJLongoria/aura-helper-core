const ApexSetter = require('../../../src/types/apexSetter');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexSetter.js', () => {
    test('Testing instance', () => {
        const apexSetter = new ApexSetter('id', 'name', new Token('type', 'text', 1, 0, false));
        apexSetter.addChild(undefined);
        apexSetter.addChild(new Token('type', 'text', 1, 0, false));
        apexSetter.addChild(new Token('type', 'text', 1, 0, false));
        expect(apexSetter.getFirstChild()).toEqual(apexSetter.getAbosluteFirstChild());
        expect(apexSetter.getLastChild()).toEqual(apexSetter.getAbsoluteLastChild());
        apexSetter.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar2'
        });
        apexSetter.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar1'
        });
        apexSetter.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar3'
        });
        apexSetter.addChild({
            nodeType: ApexNodeType.SOQL,
            name: 'query1'
        });
        apexSetter.addChild({
            nodeType: ApexNodeType.SOQL,
            name: 'query2'
        });
        expect(apexSetter.getFirstChild()).toEqual(apexSetter.getAbosluteFirstChild());
        expect(apexSetter.getLastChild()).toEqual(apexSetter.getAbsoluteLastChild());
        expect(apexSetter.id).toMatch('id');
        expect(apexSetter.name).toMatch('name');
        expect(apexSetter.nodeType).toMatch(ApexNodeType.SETTER);
        const apexSette2 = new ApexSetter(apexSetter);
        expect(apexSette2.id).toMatch('id');
        expect(apexSette2.name).toMatch('name');
        expect(apexSette2.nodeType).toMatch(ApexNodeType.SETTER);
    });
});