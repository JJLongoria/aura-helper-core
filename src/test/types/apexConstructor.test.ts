import { ApexConstructor, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexConstructor.js', () => {
    test('Testing instance', () => {
        const apexConstructor = new ApexConstructor('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexConstructor.id).toMatch('id');
        expect(apexConstructor.name).toMatch('name');
        expect(apexConstructor.nodeType).toMatch(ApexNodeTypes.CONSTRUCTOR);
        const apexConstructor2 = new ApexConstructor(apexConstructor);
        expect(apexConstructor2.id).toMatch('id');
        expect(apexConstructor2.name).toMatch('name');
        expect(apexConstructor2.nodeType).toMatch(ApexNodeTypes.CONSTRUCTOR);
    });
});