import { AuraComponent, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraComponent.js', () => {
    test('Testing instance', () => {
        const auraComponent = new AuraComponent('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraComponent.name).toMatch('name');
        expect(auraComponent.nodeType).toMatch(AuraNodeTypes.COMPONENT);
        const auraComponent2 = new AuraComponent(auraComponent);
        expect(auraComponent2.name).toMatch('name');
        expect(auraComponent2.nodeType).toMatch(AuraNodeTypes.COMPONENT);
    });
});