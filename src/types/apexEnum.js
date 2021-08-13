const ApexNodeType = require('../values/apexNodeTypes');
const ApexDeclarationNode = require('./apexDeclarationNode');
const Utils = require('../utils/utils');

class ApexEnum extends ApexDeclarationNode {

    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.ENUM, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.values = idOrObject.values;
            this.positionData = idOrObject.positionData;
        } else {
            this.values = [];
            this.positionData = undefined;
        }
    }

    addChild(child) {
        if(child){
            this.values.push(child);
            child.order = this.values.length;
            child.memberOrder = child.order;
        }
        return this;
    }
    
    getLastChild(){
        return (this.values.length > 0) ? this.values[0] : undefined;
    }

    getFirstChild(){
        return (this.values.length > 0) ? this.values[this.values.length - 1] : undefined;
    }

    getAbosluteFirstChild(){
        return this.getFirstChild();
    }

    getAbsoluteLastChild(){
        return this.getLastChild();
    }
}
module.exports = ApexEnum;