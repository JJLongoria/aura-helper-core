const ApexClass = require('./apexClass');
const ApexNodeType = require('../values/apexNodeTypes');

class ApexInterface extends ApexClass {

    constructor(id, name, startToken) {
        super(id, name, startToken);
        this.nodeType = ApexNodeType.INTERFACE;
    }
}
module.exports = ApexInterface;