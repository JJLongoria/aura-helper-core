import { AuraAttribute, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraAttribute.js', () => {
    test('Testing instance', () => {
        const auraAttribute = new AuraAttribute('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraAttribute.tagName).toMatch('name');
        expect(auraAttribute.namespace).toMatch('c');
        expect(auraAttribute.nodeType).toMatch(AuraNodeTypes.ATTRIBUTE);
        const auraAttribute2 = new AuraAttribute(auraAttribute);
        expect(auraAttribute2.tagName).toMatch('name');
        expect(auraAttribute2.namespace).toMatch('c');
        expect(auraAttribute2.nodeType).toMatch(AuraNodeTypes.ATTRIBUTE);
    });
});