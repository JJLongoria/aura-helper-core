const ApeProperty = require('../../../src/types/apexProperty');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexProperty.js', () => {
    test('Testing instance', () => {
        const apexProperty = new ApeProperty('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexProperty.id).toMatch('id');
        expect(apexProperty.name).toMatch('name');
        expect(apexProperty.nodeType).toMatch(ApexNodeType.PROPERTY);
        apexProperty.addChild();
        apexProperty.addChild({
            type: ApexNodeType.GETTER,
            name: 'apexGetter'
        });
        apexProperty.addChild({
            type: ApexNodeType.SETTER,
            name: 'apexSetter'
        });
        const apexProperty2 = new ApeProperty(apexProperty);
        expect(apexProperty2.id).toMatch('id');
        expect(apexProperty2.name).toMatch('name');
        expect(apexProperty2.nodeType).toMatch(ApexNodeType.PROPERTY);
    });
});