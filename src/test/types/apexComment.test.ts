import { FileReader } from "../../fileSystem";
import { ApexComment, Token } from "../../types";
import { ApexNodeTypes, ApexTokenTypes } from "../../values";




describe('Testing ./src/types/apexComment.js', () => {
    test('Testing instance', () => {
        const template = JSON.parse(FileReader.readFileSync('./src/test/assets/apexCommentTemplate.json'));
        const apexComment = new ApexComment('id', 'name', new Token('type', 'text', 1, 0, false));
        apexComment.addToken(new Token(ApexTokenTypes.COMMENT.LINE, '//', 1, 0, false));
        apexComment.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'esto', 1, '//'.length + 1, false));
        apexComment.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'es', 1, '// esto'.length + 1, false));
        apexComment.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'un', 1, '// esto es'.length + 1, false));
        apexComment.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'comentario', 1, '// esto es un'.length + 1, false));
        apexComment.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'de', 1, '// esto es un comentario'.length + 1, false));
        apexComment.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'linea', 1, '// esto es un comentario de'.length + 1, false));
        apexComment.processComment(template);
        expect(apexComment.description).toMatch('esto es un comentario de linea');
        expect(apexComment.id).toMatch('id');
        expect(apexComment.name).toMatch('name');
        expect(apexComment.nodeType).toMatch(ApexNodeTypes.COMMENT);
        const apexComment2 = new ApexComment(apexComment);
        expect(apexComment2.id).toMatch('id');
        expect(apexComment2.name).toMatch('name');
        expect(apexComment2.nodeType).toMatch(ApexNodeTypes.COMMENT);
    });
});
