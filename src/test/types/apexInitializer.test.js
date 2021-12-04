const ApexInitializer = require('../../../src/types/apexInitializer');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexInitializer.js', () => {
    test('Testing instance', () => {
        const apexInitializer = new ApexInitializer('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexInitializer.id).toMatch('id');
        expect(apexInitializer.name).toMatch('name');
        expect(apexInitializer.nodeType).toMatch(ApexNodeType.INITIALIZER);
        const apexInitializer2 = new ApexInitializer(apexInitializer);
        expect(apexInitializer2.id).toMatch('id');
        expect(apexInitializer2.name).toMatch('name');
        expect(apexInitializer2.nodeType).toMatch(ApexNodeType.INITIALIZER);
    });
});