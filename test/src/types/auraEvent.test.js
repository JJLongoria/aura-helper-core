const AuraEvent = require('../../../src/types/auraEvent');
const Token = require('../../../src/types/token');
const AuraNodeType = require('../../../src/values/auraNodeType');

describe('Testing ./src/types/auraEvent.js', () => {
    test('Testing instance', () => {
        const auraEvent = new AuraEvent('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraEvent.name).toMatch('name');
        expect(auraEvent.nodeType).toMatch(AuraNodeType.EVENT);
        const auraEvent2 = new AuraEvent(auraEvent);
        expect(auraEvent2.name).toMatch('name');
        expect(auraEvent2.nodeType).toMatch(AuraNodeType.EVENT);
    });
});