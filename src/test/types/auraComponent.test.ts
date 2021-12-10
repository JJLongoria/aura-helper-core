import { AuraComponent, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraComponent.js', () => {
    test('Testing instance', () => {
        const auraComponent = new AuraComponent('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraComponent.tagName).toMatch('name');
        expect(auraComponent.namespace).toMatch('c');
        expect(auraComponent.nodeType).toMatch(AuraNodeTypes.COMPONENT);
        const auraComponent2 = new AuraComponent(auraComponent);
        expect(auraComponent2.tagName).toMatch('name');
        expect(auraComponent2.namespace).toMatch('c');
        expect(auraComponent2.nodeType).toMatch(AuraNodeTypes.COMPONENT);
    });
});