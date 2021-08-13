const ApexNodeType = require('../values/apexNodeTypes');
const ApexDeclarationNode = require('./apexDeclarationNode');
const Utils = require('../utils/utils');

class ApexMethod extends ApexDeclarationNode{

    constructor(idOrObject, name, startToken){
        super(idOrObject, ApexNodeType.METHOD, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.testMethod = idOrObject.testMethod;
            this.variables = idOrObject.variables;
        } else {
            this.testMethod = undefined;
            this.variables = {}
        }
    }

    addChild(child){
        if (child.type === ApexNodeType.VARIABLE) {
            this.variables[child.name.toLowerCase()] = child;
            child.order = Utils.countKeys(this.variables);
            child.memberOrder = child.order;
        }
    }

    getLastChild(){
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

    getFirstChild(){
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
module.exports = ApexMethod;