const ApexInterface = require('../../../src/types/apexInterface');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexInitializer.js', () => {
    test('Testing instance', () => {
        const apexInterface = new ApexInterface('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexInterface.id).toMatch('id');
        expect(apexInterface.name).toMatch('name');
        expect(apexInterface.nodeType).toMatch(ApexNodeType.INTERFACE);
        const apexInterface2 = new ApexInterface(apexInterface);
        expect(apexInterface2.id).toMatch('id');
        expect(apexInterface2.name).toMatch('name');
        expect(apexInterface2.nodeType).toMatch(ApexNodeType.INTERFACE);
    });
});