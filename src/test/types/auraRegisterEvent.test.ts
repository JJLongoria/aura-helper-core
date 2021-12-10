import { AuraRegisterEvent, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraRegisterEvent.js', () => {
    test('Testing instance', () => {
        const auraRegisterEvent = new AuraRegisterEvent('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraRegisterEvent.tagName).toMatch('name');
        expect(auraRegisterEvent.namespace).toMatch('c');
        expect(auraRegisterEvent.nodeType).toMatch(AuraNodeTypes.REGISTER_EVENT);
        const auraRegisterEvent2 = new AuraRegisterEvent(auraRegisterEvent);
        expect(auraRegisterEvent2.tagName).toMatch('name');
        expect(auraRegisterEvent2.namespace).toMatch('c');
        expect(auraRegisterEvent2.nodeType).toMatch(AuraNodeTypes.REGISTER_EVENT);
    });
});