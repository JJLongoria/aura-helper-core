const ApexDeclarationNode = require('./apexDeclarationNode');
const ApexNodeType = require('../values/apexNodeTypes');

class ApexVariable extends ApexDeclarationNode{

    constructor(id, name, startToken){
        super(id, ApexNodeType.VARIABLE, name, startToken);
    }
}
module.exports = ApexVariable;