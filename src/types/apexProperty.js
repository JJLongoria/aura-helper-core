const ApexVariable = require('./apexVariable');
const ApexNodeType = require('../values/apexNodeTypes');
const Utils = require('../utils/utils');


class ApexProperty extends ApexVariable{

    constructor(idOrObject, name, startToken){
        super(idOrObject, name, startToken);
        this.nodeType = ApexNodeType.PROPERTY;
        if(Utils.isObject(idOrObject)){
            this.getter = idOrObject.getter;
            this.setter = idOrObject.setter;
        } else {
            this.getter = undefined;
            this.setter = undefined;
        }
    }

    addChild(child){
        if(child && child.type === ApexNodeType.GETTER)
            this.getter = child;
        else if(child && child.type === ApexNodeType.SETTER)
            this.setter = child;
    }
}
module.exports = ApexProperty;