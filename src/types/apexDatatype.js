const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');

class ApexDatatype extends ApexNode{

    constructor(idOrObject, name, startToken){
        super(idOrObject, ApexNodeType.DATATYPE, name, startToken);
    }
}
module.exports = ApexDatatype;