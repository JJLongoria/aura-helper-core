import { ApexEnum, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexEnum.js', () => {
    test('Testing instance', () => {
        const apexEnum = new ApexEnum('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexEnum.getFirstChild()).toBeUndefined();
        expect(apexEnum.getLastChild()).toBeUndefined();
        expect(apexEnum.getAbosluteFirstChild()).toBeUndefined();
        expect(apexEnum.getAbsoluteLastChild()).toBeUndefined();
        apexEnum.addChild(new Token('type', 'text', 1, 0, false));
        apexEnum.addChild(new Token('type', 'text', 1, 0, false));
        expect(apexEnum.getFirstChild()).toEqual(apexEnum.getAbosluteFirstChild());
        expect(apexEnum.getLastChild()).toEqual(apexEnum.getAbsoluteLastChild());
        expect(apexEnum.id).toMatch('id');
        expect(apexEnum.name).toMatch('name');
        expect(apexEnum.nodeType).toMatch(ApexNodeTypes.ENUM);
        const apexEnum2 = new ApexEnum(apexEnum);
        expect(apexEnum2.id).toMatch('id');
        expect(apexEnum2.name).toMatch('name');
        expect(apexEnum2.nodeType).toMatch(ApexNodeTypes.ENUM);
    });
});