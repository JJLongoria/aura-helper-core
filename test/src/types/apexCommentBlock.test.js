const ApexCommentBlock = require('../../../src/types/apexCommentBlock');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexCommentBlock.js', () => {
    test('Testing instance', () => {
        const apexCommentBlock = new ApexCommentBlock('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexCommentBlock.id).toMatch('id');
        expect(apexCommentBlock.name).toMatch('name');
        expect(apexCommentBlock.nodeType).toMatch(ApexNodeType.BLOCK_COMMENT);
        const apexCommentBlock2 = new ApexCommentBlock(apexCommentBlock);
        expect(apexCommentBlock2.id).toMatch('id');
        expect(apexCommentBlock2.name).toMatch('name');
        expect(apexCommentBlock2.nodeType).toMatch(ApexNodeType.BLOCK_COMMENT);
    });
});