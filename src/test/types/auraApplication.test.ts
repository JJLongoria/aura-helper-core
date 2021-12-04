import { AuraApplication, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraApplication.js', () => {
    test('Testing instance', () => {
        new AuraApplication('name', new Token('type', 'text', 1, 0, false));
        const auraApplication = new AuraApplication('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraApplication.name).toMatch('name');
        expect(auraApplication.nodeType).toMatch(AuraNodeTypes.APPLICATION);
        const auraApplication2 = new AuraApplication(auraApplication);
        expect(auraApplication2.name).toMatch('name');
        expect(auraApplication2.nodeType).toMatch(AuraNodeTypes.APPLICATION);
    });
});