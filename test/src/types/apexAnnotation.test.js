const ApexAnnotation = require('../../../src/types/apexAnnotation');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexAnnotation.js', () => {
    test('Testing instance', () => {
        const apexAnnotation = new ApexAnnotation('id', 'name', new Token('type', 'text', 1, 0, false));
        apexAnnotation.addToken(undefined);
        apexAnnotation.addToken(new Token('type', 'text', 1, 0, false));
        expect(apexAnnotation.id).toMatch('id');
        expect(apexAnnotation.name).toMatch('name');
        expect(apexAnnotation.nodeType).toMatch(ApexNodeType.ANNOTATION);
        const apexAnnotation2 = new ApexAnnotation(apexAnnotation);
        expect(apexAnnotation2.id).toMatch('id');
        expect(apexAnnotation2.name).toMatch('name');
        expect(apexAnnotation2.nodeType).toMatch(ApexNodeType.ANNOTATION);
    });
});