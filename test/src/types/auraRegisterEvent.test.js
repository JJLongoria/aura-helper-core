const AuraRegisterEvent = require('../../../src/types/auraRegisterEvent');
const Token = require('../../../src/types/token');
const AuraNodeType = require('../../../src/values/auraNodeType');

describe('Testing ./src/types/auraRegisterEvent.js', () => {
    test('Testing instance', () => {
        const auraRegisterEvent = new AuraRegisterEvent('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraRegisterEvent.name).toMatch('name');
        expect(auraRegisterEvent.nodeType).toMatch(AuraNodeType.REGISTER_EVENT);
        const auraRegisterEvent2 = new AuraRegisterEvent(auraRegisterEvent);
        expect(auraRegisterEvent2.name).toMatch('name');
        expect(auraRegisterEvent2.nodeType).toMatch(AuraNodeType.REGISTER_EVENT);
    });
});