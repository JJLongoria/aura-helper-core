const AuraAttribute = require('../../../src/types/auraAttribute');
const Token = require('../../../src/types/token');
const AuraNodeType = require('../../../src/values/auraNodeType');

describe('Testing ./src/types/auraAttribute.js', () => {
    test('Testing instance', () => {
        const auraAttribute = new AuraAttribute('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraAttribute.name).toMatch('name');
        expect(auraAttribute.nodeType).toMatch(AuraNodeType.ATTRIBUTE);
        const auraAttribute2 = new AuraAttribute(auraAttribute);
        expect(auraAttribute2.name).toMatch('name');
        expect(auraAttribute2.nodeType).toMatch(AuraNodeType.ATTRIBUTE);
    });
});