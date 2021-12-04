import { ApexInterface, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexInterface.js', () => {
    test('Testing instance', () => {
        const apexInterface = new ApexInterface('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexInterface.id).toMatch('id');
        expect(apexInterface.name).toMatch('name');
        expect(apexInterface.nodeType).toMatch(ApexNodeTypes.INTERFACE);
        const apexInterface2 = new ApexInterface(apexInterface);
        expect(apexInterface2.id).toMatch('id');
        expect(apexInterface2.name).toMatch('name');
        expect(apexInterface2.nodeType).toMatch(ApexNodeTypes.INTERFACE);
    });
});