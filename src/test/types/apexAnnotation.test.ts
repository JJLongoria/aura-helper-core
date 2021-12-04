import { ApexAnnotation, Token } from '../../types';
import { ApexNodeTypes } from '../../values';

describe('Testing ./src/types/apexAnnotation.js', () => {
    test('Testing instance', () => {
        const apexAnnotation = new ApexAnnotation('id', 'name', new Token('type', 'text', 1, 0, false));
        apexAnnotation.addToken(new Token('type', 'text', 1, 0, false));
        expect(apexAnnotation.id).toMatch('id');
        expect(apexAnnotation.name).toMatch('name');
        expect(apexAnnotation.nodeType).toMatch(ApexNodeTypes.ANNOTATION);
        const apexAnnotation2 = new ApexAnnotation(apexAnnotation);
        expect(apexAnnotation2.id).toMatch('id');
        expect(apexAnnotation2.name).toMatch('name');
        expect(apexAnnotation2.nodeType).toMatch(ApexNodeTypes.ANNOTATION);
    });
});