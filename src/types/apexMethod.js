const ApexNodeType = require('../values/apexNodeTypes');
const ApexDeclarationNode = require('./apexDeclarationNode');
const ApexVariable = require('./apexVariable');
const Utils = require('../utils/utils');
const Token = require('./token');
const SOQLQuery = require('./soqlQuery');

/**
 * Class to represent an Apex Method Node when Parsing Apex Code
 */
class ApexMethod extends ApexDeclarationNode {

    /**
     * Constructor to create an ApexMethod instance
     * @param {String | Object} idOrObject Node id or Object with ApexMethod fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.METHOD, name, startToken);
        if (Utils.isObject(idOrObject)) {
            this.testMethod = idOrObject.testMethod;
            this.variables = serialize(idOrObject.variables);
            this.params = serialize(idOrObject.params);
            this.queries = idOrObject.queries;
        } else {
            this.testMethod = undefined;
            this.variables = {}
            this.params = {};
            this.queries = [];
        }
    }

    /**
     * Method to add the declared variables into the method code block
     * @param {ApexVariable} child ApexVariable child to add 
     * @returns {ApexGetter} Return the ApexMethod instance
     */
    addChild(child) {
        if (child && child.nodeType === ApexNodeType.VARIABLE) {
            this.variables[child.name.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeType.SOQL) {
            this.queries.push(child);
        }
        child.order = Utils.countKeys(this.variables);
        child.memberOrder = child.order;
        return this;
    }

    /**
     * Method to add the method parameters
     * @param {ApexVariable} child ApexVariable parameter to add 
     * @returns {ApexGetter} Return the ApexMethod instance
     */
    addParam(child) {
        if (child && child.nodeType === ApexNodeType.VARIABLE) {
            this.params[child.name.toLowerCase()] = child;
            child.order = Utils.countKeys(this.params);
            child.memberOrder = child.order;
        }
    }

    /**
     * Method to get an array with the method parameters ordered by position on the signature
     * @returns {Array<ApexVariable>} Return the method parameters ordered by position
     */
    getOrderedParams() {
        let ordered = [];
        for (const key of Object.keys(this.params)) {
            ordered.push(this.params[key]);
        }
        return Utils.sort(ordered, ['order']);;
    }

    /**
     * Method to get an array with the method declared variables in order of declaration
     * @returns {Array<ApexVariable>} Return the method parameters ordered by declaration
     */
    getOrderedVariables() {
        let ordered = [];
        for (const key of Object.keys(this.variables)) {
            ordered.push(this.variables[key]);
        }
        ordered = Utils.sort(ordered, ['order']);
        return ordered;
    }

    /**
     * Method to get the last child into the method body
     * @returns {ApexVariable} Return the last ApexVariable declared or undefined if not found any variables
     */
    getLastChild() {
        if (!Utils.hasKeys(this.variables))
            return undefined;
        let child = Utils.getFirstElement(this.variables);
        for (const key of Object.keys(this.variables)) {
            const node = this.variables[key];
            if (node.order > child.order) {
                child = node;
            }
        }
        return child;
    }

    /**
     * Method to get the first child into the method body
     * @returns {ApexVariable} Return the first ApexVariable declared or undefined if not found any variables
     */
    getFirstChild() {
        if (!Utils.hasKeys(this.variables))
            return undefined;
        let child = Utils.getFirstElement(this.variables);
        for (const key of Object.keys(this.variables)) {
            const node = this.variables[key];
            if (node.order < child.order) {
                child = node;
            }
        }
        return child;
    }

    /**
     * Method to get the first child into the method body (Equals to getFirstChild())
     * @returns {ApexVariable} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbosluteFirstChild() {
        return this.getFirstChild();
    }

    /**
     * Method to get the last child into the method body (Equals to getLastChild())
     * @returns {ApexVariable} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbsoluteLastChild() {
        return this.getLastChild();
    }
}
module.exports = ApexMethod;

function serialize(objects) {
    if (!objects)
        return objects;
    for (const objKey of Object.keys(objects)) {
        const child = objects[objKey];
        objects[objKey] = serializeChild(child);
    }
    return objects;
}

function serializeChild(child) {
    if (!child)
        return child;
    if (child.nodeType === ApexNodeType.VARIABLE) {
        return new ApexVariable(child);
    }
    return child;
}