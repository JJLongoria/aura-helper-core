const AuraJSFunction = require('../../../src/types/auraJSFunction');
const Token = require('../../../src/types/token');
const AuraNodeType = require('../../../src/values/auraNodeType');

describe('Testing ./src/types/auraRegisterEvent.js', () => {
    test('Testing instance', () => {
        const jsFuntion = new AuraJSFunction('name', new Token('type', 'text', 1, 0, false));
        expect(jsFuntion.name).toMatch('name');
        expect(jsFuntion.nodeType).toMatch(AuraNodeType.FUNCTION);
        const jsFunction2 = new AuraJSFunction(jsFuntion);
        expect(jsFunction2.name).toMatch('name');
        expect(jsFunction2.nodeType).toMatch(AuraNodeType.FUNCTION);
    });
});