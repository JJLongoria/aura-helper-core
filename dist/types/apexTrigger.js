"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexTrigger = void 0;
const utils_1 = require("../utils");
const values_1 = require("../values");
const apexNode_1 = require("./apexNode");
const apexVariable_1 = require("./apexVariable");
/**
 * Class to represent an Apex Trigger Node when Parsing Apex Code
 */
class ApexTrigger extends apexNode_1.ApexNode {
    /**
     * Constructor to create an ApexTrigger instance
     * @param {string | ApexTrigger} idOrTrigger Node id or Object with ApexTrigger fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrTrigger, name, startToken) {
        super(idOrTrigger, values_1.ApexNodeTypes.TRIGGER, name, startToken);
        if (idOrTrigger instanceof ApexTrigger) {
            this.sObject = idOrTrigger.sObject;
            this.beforeInsert = idOrTrigger.beforeInsert;
            this.afterInsert = idOrTrigger.afterInsert;
            this.beforeUpdate = idOrTrigger.beforeUpdate;
            this.afterUpdate = idOrTrigger.afterUpdate;
            this.beforeDelete = idOrTrigger.beforeDelete;
            this.afterDelete = idOrTrigger.afterDelete;
            this.beforeUndelete = idOrTrigger.beforeUndelete;
            this.afterUndelete = idOrTrigger.afterUndelete;
            this.variables = serialize(idOrTrigger.variables);
            this.queries = idOrTrigger.queries;
        }
        else {
            this.beforeInsert = false;
            this.afterInsert = false;
            this.beforeUpdate = false;
            this.afterUpdate = false;
            this.beforeDelete = false;
            this.afterDelete = false;
            this.beforeUndelete = false;
            this.afterUndelete = false;
            this.sObject = undefined;
            this.variables = {};
            this.queries = [];
        }
    }
    /**
     * Method to add the declared childs into the trigger code block
     * @param {ApexVariable | SOQLQuery} child ApexVariable child to add
     * @returns {ApexTrigger} Return the ApexTrigger instance
     */
    addChild(child) {
        if (child && child.nodeType === values_1.ApexNodeTypes.VARIABLE && child instanceof apexVariable_1.ApexVariable) {
            this.variables[child.name.toLowerCase()] = child;
            child.order = utils_1.Utils.countKeys(this.variables);
            child.memberOrder = child.order;
        }
        else if (child.nodeType === values_1.ApexNodeTypes.SOQL) {
            this.queries.push(child);
        }
        return this;
    }
}
exports.ApexTrigger = ApexTrigger;
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
//# sourceMappingURL=apexTrigger.js.map