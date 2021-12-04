import { AuraJSComment, Token } from "../../types";
import { AuraNodeTypes } from "../../values";

describe('Testing ./src/types/auraJSComment.js', () => {
    test('Testing instance', () => {
        const auraJSComment = new AuraJSComment();
        auraJSComment.addToken(new Token('comment.line.double-slash', '//', 0, 0, false));
        auraJSComment.addToken(new Token('comment.content', 'Esto', 0, 3, false));
        auraJSComment.addToken(new Token('comment.content', 'es', 0, 8, false));
        auraJSComment.addToken(new Token('comment.content', 'un', 0, 11, false));
        auraJSComment.addToken(new Token('comment.content', 'comentario', 0, 14, false));
        auraJSComment.processComment();
        expect(auraJSComment.nodeType).toMatch(AuraNodeTypes.JS_COMMENT);
        expect(auraJSComment.description).toMatch('Esto es un comentario');
        const auraJSComment2 = new AuraJSComment(auraJSComment);
        expect(auraJSComment2.nodeType).toMatch(AuraNodeTypes.JS_COMMENT);
    });
});