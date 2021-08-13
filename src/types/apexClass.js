const ApexNodeType = require('../values/apexNodeTypes');
const ApexDeclarationNode = require('./apexDeclarationNode');
const Utils = require('../utils/utils');

class ApexClass extends ApexDeclarationNode {

    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.CLASS, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.initializer = idOrObject.initializer;
            this.staticConstructor = idOrObject.staticConstructor;
            this.classes = idOrObject.classes;
            this.interfaces = idOrObject.interfaces;
            this.enums = idOrObject.enums;
            this.variables = idOrObject.variables;
            this.methods = idOrObject.methods;
            this.constructors = idOrObject.constructors;
            this.extendsType = idOrObject.extendsType;
            this.extends = idOrObject.extends;
            this.implementTypes = idOrObject.implementTypes;
            this.implements = idOrObject.implements;
            this.positionData = idOrObject.positionData;
            this.totalMembers = idOrObject.totalMembers;
        } else {
            this.initializer = undefined;
            this.staticConstructor = undefined;
            this.classes = {};
            this.interfaces = {};
            this.enums = {};
            this.variables = {};
            this.methods = {};
            this.constructors = {};
            this.extendsType = undefined;
            this.extends = undefined;
            this.implementTypes = [];
            this.implements = {};
            this.positionData = undefined;
            this.totalMembers = 0;
        }
    }

    addChild(child) {
        if (child.type === ApexNodeType.INITIALIZER) {
            this.initializer = child;
        } else if (child.type === ApexNodeType.STATIC_CONSTRUCTOR) {
            this.staticConstructor = child;
        } else if (child.type === ApexNodeType.CLASS) {
            this.classes[child.name.toLowerCase()] = child;
        } else if (child.type === ApexNodeType.INTERFACE) {
            this.interfaces[child.name.toLowerCase()] = child;
        } else if (child.type === ApexNodeType.ENUM) {
            this.enums[child.name.toLowerCase()] = child;
        } else if (child.type === ApexNodeType.VARIABLE || child.type === ApexNodeType.PROPERTY) {
            this.variables[child.name.toLowerCase()] = child;
        } else if (child.type === ApexNodeType.METHOD) {
            this.methods[child.simplifiedSignature.toLowerCase()] = child;
        } else if (child.type  === ApexNodeType.CONSTRUCTOR) {
            this.constructors[child.simplifiedSignature.toLowerCase()] = child;
        }
        this.totalMembers++;
        child.order = this.getChildOrder(child);
        child.memberOrder = this.totalMembers;
        return this;
    }

    getChildOrder(childOrType){
        const type = Utils.isObject(childOrType) ? childOrType.type : childOrType;
        if (type === ApexNodeType.INITIALIZER) {
            return 1;
        } else if (type === ApexNodeType.STATIC_CONSTRUCTOR) {
            return 1;
        } else if (type === ApexNodeType.CLASS) {
            return Utils.countKeys(this.classes);
        } else if (type === ApexNodeType.INTERFACE) {
            return Utils.countKeys(this.interfaces);
        } else if (type === ApexNodeType.ENUM) {
            return Utils.countKeys(this.enums);
        } else if (type === ApexNodeType.VARIABLE || type === ApexNodeType.PROPERTY) {
            return Utils.countKeys(this.variables);
        } else if (type === ApexNodeType.METHOD) {
            return Utils.countKeys(this.methods);
        } else if (type  === ApexNodeType.CONSTRUCTOR) {
            return Utils.countKeys(this.constructors);
        }
        return 0;
    }

    getLastChild(childOrType){
        const type = Utils.isObject(childOrType) ? childOrType.type : childOrType;
        let child;
        if (type === ApexNodeType.INITIALIZER && !Utils.isNull(this.initializer)) {
            child = this.initializer;
        } else if (type === ApexNodeType.STATIC_CONSTRUCTOR && !Utils.isNull(this.staticConstructor)) {
            child = this.staticConstructor;
        } else if (type === ApexNodeType.CLASS && Utils.hasKeys(this.classes)) {
            child = Utils.getFirstElement(this.classes);
            for(const key of Object.keys(this.classes)){
                const node = this.classes[key];
                if(node.order > child.order){
                    child = node;
                }
            }
        } else if (type === ApexNodeType.INTERFACE && Utils.hasKeys(this.interfaces)) {
            child = Utils.getFirstElement(this.interfaces);
            for(const key of Object.keys(this.interfaces)){
                const node = this.interfaces[key];
                if(node.order > child.order){
                    child = node;
                }
            }
        } else if (type === ApexNodeType.ENUM && Utils.hasKeys(this.enums)) {
            child = Utils.getFirstElement(this.enums);
            for(const key of Object.keys(this.enums)){
                const node = this.enums[key];
                if(node.order > child.order){
                    child = node;
                }
            }
        } else if ((type === ApexNodeType.VARIABLE || type === ApexNodeType.PROPERTY) && Utils.hasKeys(this.variables)) {
            child = Utils.getFirstElement(this.variables);
            for(const key of Object.keys(this.variables)){
                const node = this.variables[key];
                if(node.order > child.order){
                    child = node;
                }
            }
        } else if (type === ApexNodeType.METHOD && Utils.hasKeys(this.methods)) {
            child = Utils.getFirstElement(this.methods);
            for(const key of Object.keys(this.methods)){
                const node = this.methods[key];
                if(node.order > child.order){
                    child = node;
                }
            }
        } else if (type  === ApexNodeType.CONSTRUCTOR && Utils.hasKeys(this.constructors)) {
            child = Utils.getFirstElement(this.constructors);
            for(const key of Object.keys(this.constructors)){
                const node = this.constructors[key];
                if(node.order > child.order){
                    child = node;
                }
            }
        }
        return child;
    }

    getFirstChild(childOrType){
        const type = Utils.isObject(childOrType) ? childOrType.type : childOrType;
        let child;
        if (type === ApexNodeType.INITIALIZER && !Utils.isNull(this.initializer)) {
            child = this.initializer;
        } else if (type === ApexNodeType.STATIC_CONSTRUCTOR && !Utils.isNull(this.staticConstructor)) {
            child = this.staticConstructor;
        } else if (type === ApexNodeType.CLASS && Utils.hasKeys(this.classes)) {
            child = Utils.getFirstElement(this.classes);
            for(const key of Object.keys(this.classes)){
                const node = this.classes[key];
                if(node.order < child.order){
                    child = node;
                }
            }
        } else if (type === ApexNodeType.INTERFACE && Utils.hasKeys(this.interfaces)) {
            child = Utils.getFirstElement(this.interfaces);
            for(const key of Object.keys(this.interfaces)){
                const node = this.interfaces[key];
                if(node.order < child.order){
                    child = node;
                }
            }
        } else if (type === ApexNodeType.ENUM && Utils.hasKeys(this.enums)) {
            child = Utils.getFirstElement(this.enums);
            for(const key of Object.keys(this.enums)){
                const node = this.enums[key];
                if(node.order < child.order){
                    child = node;
                }
            }
        } else if ((type === ApexNodeType.VARIABLE || type === ApexNodeType.PROPERTY) && Utils.hasKeys(this.variables)) {
            child = Utils.getFirstElement(this.variables);
            for(const key of Object.keys(this.variables)){
                const node = this.variables[key];
                if(node.order < child.order){
                    child = node;
                }
            }
        } else if (type === ApexNodeType.METHOD && Utils.hasKeys(this.methods)) {
            child = Utils.getFirstElement(this.methods);
            for(const key of Object.keys(this.methods)){
                const node = this.methods[key];
                if(node.order < child.order){
                    child = node;
                }
            }
        } else if (type  === ApexNodeType.CONSTRUCTOR && Utils.hasKeys(this.constructors)) {
            child = Utils.getFirstElement(this.constructors);
            for(const key of Object.keys(this.constructors)){
                const node = this.constructors[key];
                if(node.order < child.order){
                    child = node;
                }
            }
        }
        return child;
    }

    getAbosluteFirstChild(){
        let child;
        if (!Utils.isNull(this.initializer)) {
            if(Utils.isNull(child) || child.memberOrder > this.initializer.memberOrder)
                child = this.initializer;
        } 
        if (!Utils.isNull(this.staticConstructor)) {
            if(Utils.isNull(child) || child.memberOrder > this.staticConstructor.memberOrder)
                child = this.staticConstructor;
        } 
        if (Utils.hasKeys(this.classes)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.classes);
            for(const key of Object.keys(this.classes)){
                const node = this.classes[key];
                if(node.memberOrder < child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.interfaces)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.interfaces);
            for(const key of Object.keys(this.interfaces)){
                const node = this.interfaces[key];
                if(node.memberOrder < child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.enums)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.enums);
            for(const key of Object.keys(this.enums)){
                const node = this.enums[key];
                if(node.memberOrder < child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.variables)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.variables);
            for(const key of Object.keys(this.variables)){
                const node = this.variables[key];
                if(node.memberOrder < child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.methods)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.methods);
            for(const key of Object.keys(this.methods)){
                const node = this.methods[key];
                if(node.memberOrder < child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.constructors)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.constructors);
            for(const key of Object.keys(this.constructors)){
                const node = this.constructors[key];
                if(node.memberOrder < child.memberOrder){
                    child = node;
                }
            }
        }
        return child;
    }

    getAbsoluteLastChild(){
        let child;
        if (!Utils.isNull(this.initializer)) {
            if(Utils.isNull(child) || child.memberOrder < this.initializer.memberOrder)
                child = this.initializer;
        } 
        if (!Utils.isNull(this.staticConstructor)) {
            if(Utils.isNull(child) || child.memberOrder < this.staticConstructor.memberOrder)
                child = this.initializer;
        } 
        if (Utils.hasKeys(this.classes)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.classes);
            for(const key of Object.keys(this.classes)){
                const node = this.classes[key];
                if(node.memberOrder > child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.interfaces)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.interfaces);
            for(const key of Object.keys(this.interfaces)){
                const node = this.interfaces[key];
                if(node.memberOrder > child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.enums)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.enums);
            for(const key of Object.keys(this.enums)){
                const node = this.enums[key];
                if(node.memberOrder > child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.variables)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.variables);
            for(const key of Object.keys(this.variables)){
                const node = this.variables[key];
                if(node.memberOrder > child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.methods)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.methods);
            for(const key of Object.keys(this.methods)){
                const node = this.methods[key];
                if(node.memberOrder > child.memberOrder){
                    child = node;
                }
            }
        } 
        if (Utils.hasKeys(this.constructors)) {
            if(Utils.isNull(child))
                child = Utils.getFirstElement(this.constructors);
            for(const key of Object.keys(this.constructors)){
                const node = this.constructors[key];
                if(node.memberOrder > child.memberOrder){
                    child = node;
                }
            }
        }
        return child;
    }
}
module.exports = ApexClass;
