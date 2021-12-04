import { ApexDatatype, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexDatatype.js', () => {
    test('Testing instance', () => {
        const apexDatatype = new ApexDatatype('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexDatatype.id).toMatch('id');
        expect(apexDatatype.name).toMatch('name');
        expect(apexDatatype.nodeType).toMatch(ApexNodeTypes.DATATYPE);
        const apexDatatype2 = new ApexDatatype(apexDatatype);
        expect(apexDatatype2.id).toMatch('id');
        expect(apexDatatype2.name).toMatch('name');
        expect(apexDatatype2.nodeType).toMatch(ApexNodeTypes.DATATYPE);
    });
});