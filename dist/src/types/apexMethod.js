"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexMethod = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
const apexDeclarationNode_1 = require("./apexDeclarationNode");
const apexExceptionThrows_1 = require("./apexExceptionThrows");
const apexVariable_1 = require("./apexVariable");
const soqlQuery_1 = require("./soqlQuery");
/**
 * Class to represent an Apex Method Node when Parsing Apex Code
 */
class ApexMethod extends apexDeclarationNode_1.ApexDeclarationNode {
    /**
     * Constructor to create an ApexMethod instance
     * @param {String | ApexMethod} idOrMethod Node id or Object with ApexMethod fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrMethod, name, startToken) {
        super(idOrMethod, values_1.ApexNodeTypes.METHOD, name, startToken);
        if (idOrMethod instanceof ApexMethod) {
            this.testMethod = idOrMethod.testMethod;
            this.variables = serialize(idOrMethod.variables);
            this.params = serialize(idOrMethod.params);
            this.queries = idOrMethod.queries;
            this.exceptions = idOrMethod.exceptions;
        }
        else {
            this.testMethod = undefined;
            this.variables = {};
            this.params = {};
            this.queries = [];
            this.exceptions = [];
        }
    }
    /**
     * Method to add the declared variables into the method code block
     * @param {ApexVariable | SOQLQuery | ApexExceptionThrows} child child to add
     * @returns {ApexMethod} Return the ApexMethod instance
     */
    addChild(child) {
        if (!child) {
            return this;
        }
        if (child.nodeType === values_1.ApexNodeTypes.VARIABLE && child instanceof apexVariable_1.ApexVariable) {
            this.variables[child.name.toLowerCase()] = child;
        }
        else if (child.nodeType === values_1.ApexNodeTypes.SOQL && child instanceof soqlQuery_1.SOQLQuery) {
            this.queries.push(child);
        }
        else if (child.nodeType === values_1.ApexNodeTypes.THROWS && child instanceof apexExceptionThrows_1.ApexExceptionThrows) {
            this.exceptions.push(child);
        }
        child.order = utils_1.Utils.countKeys(this.variables);
        child.memberOrder = child.order;
        return this;
    }
    /**
     * Method to add the method parameters
     * @param {ApexVariable} child ApexVariable parameter to add
     * @returns {ApexMethod} Return the ApexMethod instance
     */
    addParam(child) {
        if (child && child.nodeType === values_1.ApexNodeTypes.VARIABLE) {
            this.params[child.name.toLowerCase()] = child;
            child.order = utils_1.Utils.countKeys(this.params);
            child.memberOrder = child.order;
        }
        return this;
    }
    /**
     * Method to get an array with the method parameters ordered by position on the signature
     * @returns {ApexVariable[]} Return the method parameters ordered by position
     */
    getOrderedParams() {
        let ordered = [];
        for (const key of Object.keys(this.params)) {
            ordered.push(this.params[key]);
        }
        return utils_1.Utils.sort(ordered, ['order']);
        ;
    }
    /**
     * Method to get an array with the method declared variables in order of declaration
     * @returns {ApexVariable[]} Return the method parameters ordered by declaration
     */
    getOrderedVariables() {
        let ordered = [];
        for (const key of Object.keys(this.variables)) {
            ordered.push(this.variables[key]);
        }
        ordered = utils_1.Utils.sort(ordered, ['order']);
        return ordered;
    }
    /**
     * Method to get the last child into the method body
     * @returns {ApexVariable | undefined} Return the last ApexVariable declared or undefined if not found any variables
     */
    getLastChild() {
        if (!utils_1.Utils.hasKeys(this.variables)) {
            return undefined;
        }
        let child = utils_1.Utils.getFirstElement(this.variables);
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
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getFirstChild() {
        if (!utils_1.Utils.hasKeys(this.variables)) {
            return undefined;
        }
        let child = utils_1.Utils.getFirstElement(this.variables);
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
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbosluteFirstChild() {
        return this.getFirstChild();
    }
    /**
     * Method to get the last child into the method body (Equals to getLastChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbsoluteLastChild() {
        return this.getLastChild();
    }
}
exports.ApexMethod = ApexMethod;
function serialize(objects) {
    if (!objects) {
        return objects;
    }
    for (const objKey of Object.keys(objects)) {
        const child = objects[objKey];
        objects[objKey] = serializeChild(child);
    }
    return objects;
}
function serializeChild(child) {
    if (!child) {
        return child;
    }
    if (child.nodeType === values_1.ApexNodeTypes.VARIABLE) {
        return new apexVariable_1.ApexVariable(child);
    }
    return child;
}
//# sourceMappingURL=apexMethod.js.map