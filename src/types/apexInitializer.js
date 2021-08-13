const ApexMethod = require('./apexMethod');
const ApexNodeType = require('../values/apexNodeTypes');

class ApexInitializer extends ApexMethod{

    constructor(id, name, startToken){
        super(id, name, startToken);
        this.nodeType = ApexNodeType.INITIALIZER;
    }
}
module.exports = ApexInitializer;