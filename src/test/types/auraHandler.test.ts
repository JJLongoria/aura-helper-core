import { AuraHandler, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraHandler.js', () => {
    test('Testing instance', () => {
        const auraHandler = new AuraHandler('c:name', new Token('type', 'text', 1, 0, false));
        auraHandler.name = 'name';
        expect(auraHandler.name).toMatch('name');
        expect(auraHandler.nodeType).toMatch(AuraNodeTypes.HANDLER);
        const auraHandler2 = new AuraHandler(auraHandler);
        expect(auraHandler2.name).toMatch('name');
        expect(auraHandler2.nodeType).toMatch(AuraNodeTypes.HANDLER);
    });
});