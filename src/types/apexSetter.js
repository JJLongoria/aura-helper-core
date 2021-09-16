const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const Utils = require('../utils/utils');
const Token = require('./token');
const ApexVariable = require('./apexVariable');

/**
 * Class to represent a Property Apex Setter Node when Parsing Apex Code
 */
class ApexSetter extends ApexNode {

    /**
     * Constructor to create an ApexSetter instance
     * @param {String | Object} idOrObject Node id or Object with ApexSetter fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.SETTER, name, startToken);
        if (Utils.isObject(idOrObject)) {
            this.variables = serialize(idOrObject.variables);
            this.queries = idOrObject.queries;
        } else {
            this.variables = {};
            this.queries = [];
        }
    }

    /**
     * Method to add the declared variables into the setter code block
     * @param {Object} child ApexVariable child to add 
     * @returns {ApexGetter} Return the ApexGetter instance
     */
    addChild(child) {
        if (child && child.nodeType === ApexNodeType.VARIABLE) {
            this.variables[child.name.toLowerCase()] = child;
            child.order = Utils.countKeys(this.variables);
            child.memberOrder = child.order;
        } else if (child && child.nodeType === ApexNodeType.SOQL) {
            this.queries.push(child);
        }
        return this;
    }

    /**
     * Method to get the last child into the setter body
     * @returns {ApexVariable} Return the last ApexVariable declared or undefined if not found any variables
     */
    getLastChild(childOrType) {
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
     * Method to get the first child into the setter body
     * @returns {ApexVariable} Return the first ApexVariable declared or undefined if not found any variables
     */
    getFirstChild(childOrType) {
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
     * Method to get the first child into the setter body (Equals to getFirstChild())
     * @returns {ApexVariable} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbosluteFirstChild() {
        return this.getFirstChild();
    }

    /**
     * Method to get the last child into the setter body (Equals to getLastChild())
     * @returns {ApexVariable} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbsoluteLastChild() {
        return this.getLastChild();
    }
}
module.exports = ApexSetter;

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