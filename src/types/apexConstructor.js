const ApexMethod = require('./apexMethod');
const ApexNodeType = require('../values/apexNodeTypes');

class ApexConstructor extends ApexMethod{

    constructor(idOrObject, name, startToken){
        super(idOrObject, name, startToken);
        this.nodeType = ApexNodeType.CONSTRUCTOR;
    }
}
module.exports = ApexConstructor;