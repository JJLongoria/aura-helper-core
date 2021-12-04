import { AuraApplication, AuraDependency, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraDependency.js', () => {
    test('Testing instance', () => {
        const auraDependency = new AuraDependency('c:name', new Token('type', 'text', 1, 0, false));
        expect(auraDependency.name).toMatch('name');
        expect(auraDependency.nodeType).toMatch(AuraNodeTypes.DEPENDENCY);
        const auraDependency2 = new AuraDependency(auraDependency);
        expect(auraDependency2.name).toMatch('name');
        expect(auraDependency2.nodeType).toMatch(AuraNodeTypes.DEPENDENCY);
    });
});