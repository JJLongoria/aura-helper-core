const ApexVariable = require('../../../src/types/apexVariable');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexVariable.js', () => {
    test('Testing instance', () => {
        const apexVariable = new ApexVariable('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexVariable.id).toMatch('id');
        expect(apexVariable.name).toMatch('name');
        expect(apexVariable.nodeType).toMatch(ApexNodeType.VARIABLE);
        const apexVariable2 = new ApexVariable(apexVariable);
        expect(apexVariable2.id).toMatch('id');
        expect(apexVariable2.name).toMatch('name');
        expect(apexVariable2.nodeType).toMatch(ApexNodeType.VARIABLE);
    });
});