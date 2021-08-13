const ApexDatatype = require('../../../src/types/apexDatatype');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexDatatype.js', () => {
    test('Testing instance', () => {
        const apexDatatype = new ApexDatatype('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexDatatype.id).toMatch('id');
        expect(apexDatatype.name).toMatch('name');
        expect(apexDatatype.nodeType).toMatch(ApexNodeType.DATATYPE);
        const apexDatatype2 = new ApexDatatype(apexDatatype);
        expect(apexDatatype2.id).toMatch('id');
        expect(apexDatatype2.name).toMatch('name');
        expect(apexDatatype2.nodeType).toMatch(ApexNodeType.DATATYPE);
    });
});