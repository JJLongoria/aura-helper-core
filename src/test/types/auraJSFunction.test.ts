import { AuraJSFunction, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraRegisterEvent.js', () => {
    test('Testing instance', () => {
        const jsFuntion = new AuraJSFunction('name', new Token('type', 'text', 1, 0, false));
        expect(jsFuntion.name).toMatch('name');
        expect(jsFuntion.nodeType).toMatch(AuraNodeTypes.FUNCTION);
        const jsFunction2 = new AuraJSFunction(jsFuntion);
        expect(jsFunction2.name).toMatch('name');
        expect(jsFunction2.nodeType).toMatch(AuraNodeTypes.FUNCTION);
    });
});