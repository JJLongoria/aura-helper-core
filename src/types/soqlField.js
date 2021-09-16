const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');

class SOQLField extends ApexNode {

    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.SOQL_FIELD, name, startToken);
    }

}
module.exports = SOQLField;