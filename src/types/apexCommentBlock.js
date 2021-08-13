const ApexComment = require('./apexComment');
const ApexNodeType = require('../values/apexNodeTypes');

class ApexCommentBlock extends ApexComment {

    constructor(idOrObject, name, startToken) {
        super(idOrObject, name, startToken);
        this.nodeType = ApexNodeType.BLOCK_COMMENT;
    }
}
module.exports = ApexCommentBlock;
