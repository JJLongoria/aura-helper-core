import { ApexGetter, ApexProperty, ApexSetter, Token } from "../../types";
import { ApexNodeTypes } from "../../values";

describe('Testing ./src/types/apexProperty.js', () => {
    test('Testing instance', () => {
        const apexProperty = new ApexProperty('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexProperty.id).toMatch('id');
        expect(apexProperty.name).toMatch('name');
        expect(apexProperty.nodeType).toMatch(ApexNodeTypes.PROPERTY);
        apexProperty.addChild(new ApexGetter('id', 'apexGetter'));
        apexProperty.addChild(new ApexSetter('id', 'apexSetter'));
        const apexProperty2 = new ApexProperty(apexProperty);
        expect(apexProperty2.id).toMatch('id');
        expect(apexProperty2.name).toMatch('name');
        expect(apexProperty2.nodeType).toMatch(ApexNodeTypes.PROPERTY);
    });
});