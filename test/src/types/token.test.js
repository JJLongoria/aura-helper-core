const Token = require('../../../src/types/token');

describe('Testing ./src/types/token.js', () => {
    test('Testing instance', () => {
        const token = new Token('type', 'text', 60, 50, false);
        expect(token.type).toMatch('type');
        const token2 = new Token(token);
        expect(token2.type).toMatch('type');
    });
});