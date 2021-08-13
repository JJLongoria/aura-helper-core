const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const Utils = require('../utils/utils');

class ApexSetter extends ApexNode {

    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.SETTER, name, startToken);
        if (Utils.isObject(idOrObject)) {
            this.variables = idOrObject.variables;
        } else {
            this.variables = {};
        }
    }

    addChild(child) {
        if (child && child.type === ApexNodeType.VARIABLE) {
            this.variables[child.name.toLowerCase()] = child;
            child.order = Utils.countKeys(this.variables);
            child.memberOrder = child.order;
        }
        return this;
    }

    getLastChild(childOrType){
        if(!Utils.hasKeys(this.variables))
            return undefined;
        let child = Utils.getFirstElement(this.variables);
        for(const key of Object.keys(this.variables)){
            const node = this.variables[key];
            if(node.order > child.order){
                child = node;
            }
        }
        return child;
    }

    getFirstChild(childOrType){
        if(!Utils.hasKeys(this.variables))
            return undefined;
        let child = Utils.getFirstElement(this.variables);
        for(const key of Object.keys(this.variables)){
            const node = this.variables[key];
            if(node.order < child.order){
                child = node;
            }
        }
        return child;
    }

    getAbosluteFirstChild(){
        return this.getFirstChild();
    }

    getAbsoluteLastChild(){
        return this.getLastChild();
    }
}
module.exports = ApexSetter;