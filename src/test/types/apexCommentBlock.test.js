const FileReader = require('../../../src/fileSystem/fileReader');
const ApexCommentBlock = require('../../../src/types/apexCommentBlock');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');
const ApexTokenTypes = require('../../../src/values/apexTokenTypes');

describe('Testing ./src/types/apexCommentBlock.js', () => {
    test('Testing instance', () => {
        const template = JSON.parse(FileReader.readFileSync('./test/assets/apexCommentTemplate.json'));
        const apexCommentBlock = new ApexCommentBlock('id', 'name', new Token('type', 'text', 1, 0, false));
        // linea 1
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.BLOCK_START, '/**', 0, 0, false));
        // linea 2
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, '*', 1, 0, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'esto', 1, '* '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'es', 1, '* esto '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'un', 1, '* esto es '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'comentario', 1, '* esto es un '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'de', 1, '* esto es un comentario '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'bloque', 1, '* esto es un comentario de '.length, false));
        // linea 3
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, '*', 2, 0, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, '@', 2, '* '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'param', 2, '* @'.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'paramName', 2, '* @param '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, '(', 2, '* @param paramName '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'type', 2, '* @param paramName ('.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, ')', 2, '* @param paramName (type'.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, ':', 2, '* @param paramName (type)'.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'param', 2, '* @param paramName (type): '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'description', 2, '* @param paramName (type): param '.length, false));
        // linea 4
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, '*', 3, 0, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, '@', 3, '* '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'return', 3, '* @'.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'type', 3, '* @return '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, ':', 3, '* @return type'.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'return', 3, '* @return type: '.length, false));
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.CONTENT, 'description', 3, '* @return type: return '.length, false));
        // linea 5
        apexCommentBlock.addToken(new Token(ApexTokenTypes.COMMENT.BLOCK_END, '*/', 4, 0, false));
        apexCommentBlock.processComment();
        apexCommentBlock.processComment(template);
        expect(apexCommentBlock.tags.param[0].keywords.name).toMatch('paramName');
        expect(apexCommentBlock.tags.param[0].keywords.type).toMatch('type');
        expect(apexCommentBlock.tags.param[0].keywords.description).toMatch('param description');
        expect(apexCommentBlock.tags.return[0].keywords.type).toMatch('type');
        expect(apexCommentBlock.tags.return[0].keywords.description).toMatch('return description');
        expect(apexCommentBlock.description).toMatch('esto es un comentario de bloque');
        expect(apexCommentBlock.id).toMatch('id');
        expect(apexCommentBlock.name).toMatch('name');
        expect(apexCommentBlock.nodeType).toMatch(ApexNodeType.BLOCK_COMMENT);
        const apexCommentBlock2 = new ApexCommentBlock(apexCommentBlock);
        expect(apexCommentBlock2.id).toMatch('id');
        expect(apexCommentBlock2.name).toMatch('name');
        expect(apexCommentBlock2.nodeType).toMatch(ApexNodeType.BLOCK_COMMENT);
    });
});