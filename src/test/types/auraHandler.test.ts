import { AuraHandler, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraHandler.js', () => {
    test('Testing instance', () => {
        const auraHandler = new AuraHandler('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraHandler.tagName).toMatch('name');
        expect(auraHandler.namespace).toMatch('c');
        expect(auraHandler.nodeType).toMatch(AuraNodeTypes.HANDLER);
        const auraHandler2 = new AuraHandler(auraHandler);
        expect(auraHandler2.tagName).toMatch('name');
        expect(auraHandler2.namespace).toMatch('c');
        expect(auraHandler2.nodeType).toMatch(AuraNodeTypes.HANDLER);
    });
});