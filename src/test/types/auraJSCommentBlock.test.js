const AuraJSCommentBlock = require('../../../src/types/auraJSCommentBlock');
const Token = require('../../../src/types/token');
const AuraNodeType = require('../../../src/values/auraNodeType');

describe('Testing ./src/types/auraJSCommentBlock.js', () => {
    test('Testing instance', () => {
        const auraJSCommentBlock = new AuraJSCommentBlock('c:name', new Token('type', 'text', 1, 0, false));
        auraJSCommentBlock.addToken(new Token('comment.block.start', '/**', 0, 0, false));
        auraJSCommentBlock.addToken(new Token('comment.content', '*', 1, 1, false));
        auraJSCommentBlock.addToken(new Token('comment.content', 'method description', 1, 3, false));
        auraJSCommentBlock.addToken(new Token('comment.content', '*', 2, 1, false));
        auraJSCommentBlock.addToken(new Token('comment.content', '@', 2, 3, false));
        auraJSCommentBlock.addToken(new Token('comment.content', 'param', 2, 4, false));
        auraJSCommentBlock.addToken(new Token('comment.content', '{', 2, 10, false));
        auraJSCommentBlock.addToken(new Token('comment.content', '*', 2, 11, false));
        auraJSCommentBlock.addToken(new Token('comment.content', '}', 2, 12, false));
        auraJSCommentBlock.addToken(new Token('comment.content', 'pName', 2, 13, false));
        auraJSCommentBlock.addToken(new Token('comment.content', 'param Description', 2, 19, false));
        auraJSCommentBlock.addToken(new Token('comment.content', '*', 3, 1, false));
        auraJSCommentBlock.addToken(new Token('comment.content', '@', 3, 3, false));
        auraJSCommentBlock.addToken(new Token('comment.content', 'returns', 3, 4, false));
        auraJSCommentBlock.addToken(new Token('comment.content', 'returns desc', 3, 12, false));
        auraJSCommentBlock.addToken(new Token('comment.block.end', '*/', 0, 0, false));
        auraJSCommentBlock.processComment();
        expect(auraJSCommentBlock.nodeType).toMatch(AuraNodeType.JS_COMMENT_BLOCK);
        const auraJSCommentBlock2 = new AuraJSCommentBlock(auraJSCommentBlock);
        expect(auraJSCommentBlock2.nodeType).toMatch(AuraNodeType.JS_COMMENT_BLOCK);
    });
});