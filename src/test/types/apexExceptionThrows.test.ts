import { ApexExceptionThrows, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexExceptionThrows.js', () => {
    test('Testing instance', () => {
        const exception = new ApexExceptionThrows('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(exception.id).toMatch('id');
        expect(exception.name).toMatch('name');
        expect(exception.nodeType).toMatch(ApexNodeTypes.THROWS);
        const exception2 = new ApexExceptionThrows(exception);
        expect(exception2.id).toMatch('id');
        expect(exception2.name).toMatch('name');
        expect(exception2.nodeType).toMatch(ApexNodeTypes.THROWS);
    });
});