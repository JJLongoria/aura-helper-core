const AuraDependency = require('../../../src/types/auraDependency');
const Token = require('../../../src/types/token');
const AuraNodeType = require('../../../src/values/auraNodeType');

describe('Testing ./src/types/auraDependency.js', () => {
    test('Testing instance', () => {
        const auraDependency = new AuraDependency('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraDependency.name).toMatch('name');
        expect(auraDependency.nodeType).toMatch(AuraNodeType.DEPENDENCY);
        const auraDependency2 = new AuraDependency(auraDependency);
        expect(auraDependency2.name).toMatch('name');
        expect(auraDependency2.nodeType).toMatch(AuraNodeType.DEPENDENCY);
    });
});