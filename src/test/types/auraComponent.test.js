const AuraComponent = require('../../../src/types/auraComponent');
const Token = require('../../../src/types/token');
const AuraNodeType = require('../../../src/values/auraNodeType');

describe('Testing ./src/types/auraComponent.js', () => {
    test('Testing instance', () => {
        const auraComponent = new AuraComponent('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraComponent.name).toMatch('name');
        expect(auraComponent.nodeType).toMatch(AuraNodeType.COMPONENT);
        const auraComponent2 = new AuraComponent(auraComponent);
        expect(auraComponent2.name).toMatch('name');
        expect(auraComponent2.nodeType).toMatch(AuraNodeType.COMPONENT);
    });
});