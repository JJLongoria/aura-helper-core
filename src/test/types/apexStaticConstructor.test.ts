import { ApexStaticConstructor, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexStaticConstructor.js', () => {
    test('Testing instance', () => {
        const apexStaticConstructor = new ApexStaticConstructor('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexStaticConstructor.id).toMatch('id');
        expect(apexStaticConstructor.name).toMatch('name');
        expect(apexStaticConstructor.nodeType).toMatch(ApexNodeTypes.STATIC_CONSTRUCTOR);
        const apexStaticConstructor2 = new ApexStaticConstructor(apexStaticConstructor);
        expect(apexStaticConstructor2.id).toMatch('id');
        expect(apexStaticConstructor2.name).toMatch('name');
        expect(apexStaticConstructor2.nodeType).toMatch(ApexNodeTypes.STATIC_CONSTRUCTOR);
    });
});