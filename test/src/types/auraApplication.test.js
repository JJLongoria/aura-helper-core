const AuraApplication = require('../../../src/types/auraApplication');
const Token = require('../../../src/types/token');
const AuraNodeType = require('../../../src/values/auraNodeType');

describe('Testing ./src/types/auraApplication.js', () => {
    test('Testing instance', () => {
        new AuraApplication('name', new Token('type', 'text', 1, 0, false));
        const auraApplication = new AuraApplication('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraApplication.name).toMatch('name');
        expect(auraApplication.nodeType).toMatch(AuraNodeType.APPLICATION);
        const auraApplication2 = new AuraApplication(auraApplication);
        expect(auraApplication2.name).toMatch('name');
        expect(auraApplication2.nodeType).toMatch(AuraNodeType.APPLICATION);
    });
});