import { AuraRegisterEvent, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraRegisterEvent.js', () => {
    test('Testing instance', () => {
        const auraRegisterEvent = new AuraRegisterEvent('c:name', new Token('type', 'text', 1, 0, false));
        auraRegisterEvent.name = 'name';
        expect(auraRegisterEvent.name).toMatch('name');
        expect(auraRegisterEvent.nodeType).toMatch(AuraNodeTypes.REGISTER_EVENT);
        const auraRegisterEvent2 = new AuraRegisterEvent(auraRegisterEvent);
        expect(auraRegisterEvent2.name).toMatch('name');
        expect(auraRegisterEvent2.nodeType).toMatch(AuraNodeTypes.REGISTER_EVENT);
    });
});