const ApexStaticConstructor = require('../../../src/types/apexStaticConstructor');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexStaticConstructor.js', () => {
    test('Testing instance', () => {
        const apexStaticConstructor = new ApexStaticConstructor('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexStaticConstructor.id).toMatch('id');
        expect(apexStaticConstructor.name).toMatch('name');
        expect(apexStaticConstructor.nodeType).toMatch(ApexNodeType.STATIC_CONSTRUCTOR);
        const apexStaticConstructor2 = new ApexStaticConstructor(apexStaticConstructor);
        expect(apexStaticConstructor2.id).toMatch('id');
        expect(apexStaticConstructor2.name).toMatch('name');
        expect(apexStaticConstructor2.nodeType).toMatch(ApexNodeType.STATIC_CONSTRUCTOR);
    });
});