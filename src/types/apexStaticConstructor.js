const ApexConstructor = require('./apexConstructor');
const ApexNodeType = require('../values/apexNodeTypes');

class ApexStaticConstructor extends ApexConstructor{

    constructor(id, name, startToken){
        super(id, name, startToken);
        this.nodeType = ApexNodeType.STATIC_CONSTRUCTOR;
    }
}
module.exports = ApexStaticConstructor;