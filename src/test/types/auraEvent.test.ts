import { AuraApplication, AuraEvent, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraEvent.js', () => {
    test('Testing instance', () => {
        const auraEvent = new AuraEvent('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraEvent.name).toMatch('name');
        expect(auraEvent.nodeType).toMatch(AuraNodeTypes.EVENT);
        const auraEvent2 = new AuraEvent(auraEvent);
        expect(auraEvent2.name).toMatch('name');
        expect(auraEvent2.nodeType).toMatch(AuraNodeTypes.EVENT);
    });
});