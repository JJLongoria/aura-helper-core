const ApexComment = require('../../../src/types/apexComment');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexComment.js', () => {
    test('Testing instance', () => {
        const apexComment = new ApexComment('id', 'name', new Token('type', 'text', 1, 0, false));
        apexComment.addToken();
        apexComment.addToken(new Token('type', 'text', 1, 0, false));
        expect(apexComment.id).toMatch('id');
        expect(apexComment.name).toMatch('name');
        expect(apexComment.nodeType).toMatch(ApexNodeType.COMMENT);
        const apexComment2 = new ApexComment(apexComment);
        expect(apexComment2.id).toMatch('id');
        expect(apexComment2.name).toMatch('name');
        expect(apexComment2.nodeType).toMatch(ApexNodeType.COMMENT);
    });
});
