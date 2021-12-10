import { AuraApplication, AuraEvent, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraEvent.js', () => {
    test('Testing instance', () => {
        const auraEvent = new AuraEvent('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraEvent.tagName).toMatch('name');
        expect(auraEvent.namespace).toMatch('c');
        expect(auraEvent.nodeType).toMatch(AuraNodeTypes.EVENT);
        const auraEvent2 = new AuraEvent(auraEvent);
        expect(auraEvent2.tagName).toMatch('name');
        expect(auraEvent2.namespace).toMatch('c');
        expect(auraEvent2.nodeType).toMatch(AuraNodeTypes.EVENT);
    });
});