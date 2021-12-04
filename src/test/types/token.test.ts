import { Token } from "../../types";
import { ApexTokenTypes } from "../../values";

describe('Testing ./src/types/token.js', () => {
    test('Testing instance', () => {
        const token = new Token('type', 'text', 60, 50, false);
        expect(token.type).toMatch('type');
        const token2 = new Token(token);
        expect(token2.type).toMatch('type');
        const tokens = [];
        tokens.push(new Token(ApexTokenTypes.COMMENT.LINE, '//', 1, 0, false));
        tokens.push(new Token(ApexTokenTypes.COMMENT.CONTENT, 'esto', 1, '//'.length + 1, false));
        tokens.push(new Token(ApexTokenTypes.COMMENT.CONTENT, 'es', 1, '// esto'.length + 1, false));
        tokens.push(new Token(ApexTokenTypes.COMMENT.CONTENT, 'un', 1, '// esto es'.length + 1, false));
        tokens.push(new Token(ApexTokenTypes.COMMENT.CONTENT, 'comentario', 1, '// esto es un'.length + 1, false));
        tokens.push(new Token(ApexTokenTypes.COMMENT.CONTENT, 'de', 1, '// esto es un comentario'.length + 1, false));
        tokens.push(new Token(ApexTokenTypes.COMMENT.CONTENT, 'linea', 1, '// esto es un comentario de'.length + 1, false));
        Token.toString(tokens);
    });
});