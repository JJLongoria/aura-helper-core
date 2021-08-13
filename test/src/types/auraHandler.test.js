const AuraHandler = require('../../../src/types/auraHandler');
const Token = require('../../../src/types/token');
const AuraNodeType = require('../../../src/values/auraNodeType');

describe('Testing ./src/types/auraHandler.js', () => {
    test('Testing instance', () => {
        const auraHandler = new AuraHandler('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraHandler.name).toMatch('name');
        expect(auraHandler.nodeType).toMatch(AuraNodeType.HANDLER);
        const auraHandler2 = new AuraHandler(auraHandler);
        expect(auraHandler2.name).toMatch('name');
        expect(auraHandler2.nodeType).toMatch(AuraNodeType.HANDLER);
    });
});