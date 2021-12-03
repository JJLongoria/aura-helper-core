"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexGetter = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
const apexNode_1 = require("./apexNode");
const apexVariable_1 = require("./apexVariable");
/**
 * Class to represent a Property Apex Getter Node when Parsing Apex Code
 */
class ApexGetter extends apexNode_1.ApexNode {
    /**
     * Constructor to create an ApexGetter instance
     * @param {string | ApexGetter} idOrGetter Node id or Object with ApexGetter fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrGetter, name, startToken) {
        super(idOrGetter, values_1.ApexNodeTypes.GETTER, name, startToken);
        if (idOrGetter instanceof ApexGetter) {
            this.variables = serialize(idOrGetter.variables);
            this.queries = idOrGetter.queries;
        }
        else {
            this.variables = {};
            this.queries = [];
        }
    }
    /**
     * Method to add the declared variables into the getter code block
     * @param {ApexVariable} child ApexVariable child to add
     * @returns {ApexGetter} Return the ApexGetter instance
     */
    addChild(child) {
        if (child && child.nodeType === values_1.ApexNodeTypes.VARIABLE && child instanceof apexVariable_1.ApexVariable) {
            this.variables[child.name.toLowerCase()] = child;
            child.order = utils_1.Utils.countKeys(this.variables);
            child.memberOrder = child.order;
        }
        else if (child && child.nodeType === values_1.ApexNodeTypes.SOQL) {
            this.queries.push(child);
        }
        return this;
    }
    /**
     * Method to get the last child into the getter body
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
     * Method to get the first child into the getter body
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
     * Method to get the first child into the getter body (Equals to getFirstChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbosluteFirstChild() {
        return this.getFirstChild();
    }
    /**
     * Method to get the last child into the getter body (Equals to getLastChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbsoluteLastChild() {
        return this.getLastChild();
    }
}
exports.ApexGetter = ApexGetter;
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
//# sourceMappingURL=apexGetter.js.map