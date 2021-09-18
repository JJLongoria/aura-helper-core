const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const ApexVariable = require('./apexVariable');
const Utils = require('../utils/utils');

/**
 * Class to represent an Apex Trigger Node when Parsing Apex Code
 */
class ApexTrigger extends ApexNode{

    /**
     * Constructor to create an ApexTrigger instance
     * @param {String | Object} idOrObject Node id or Object with ApexTrigger fields
     * @param {String} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrObject, name, startToken){
        super(idOrObject, ApexNodeType.TRIGGER, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.sObject = idOrObject.sObject;
            this.beforeInsert = idOrObject.beforeInsert;
            this.afterInsert = idOrObject.afterInsert;
            this.beforeUpdate = idOrObject.beforeUpdate;
            this.afterUpdate = idOrObject.afterUpdate;
            this.beforeDelete = idOrObject.beforeDelete;
            this.afterDelete = idOrObject.afterDelete;
            this.beforeUndelete = idOrObject.beforeUndelete;
            this.afterUndelete = idOrObject.afterUndelete;
            this.variables = serialize(idOrObject.variables);
            this.queries = idOrObject.queries;
        } else {
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
     * @param {Object} child ApexVariable child to add 
     * @returns {ApexTrigger} Return the ApexTrigger instance
     */
     addChild(child) {
        if (child && child.nodeType === ApexNodeType.VARIABLE) {
            this.variables[child.name.toLowerCase()] = child;
            child.order = Utils.countKeys(this.variables);
            child.memberOrder = child.order;
        } else if (child.nodeType === ApexNodeType.SOQL) {
            this.queries.push(child);
        }
        return this;
    }
}
module.exports = ApexTrigger;

function serialize(objects) {
    if(!objects)
        return objects;
    for (const objKey of Object.keys(objects)) {
        const child = objects[objKey];
        objects[objKey] = serializeChild(child);
    }
    return objects;
}

function serializeChild(child) {
    if(!child)
        return child;
    if (child.nodeType === ApexNodeType.VARIABLE) {
        return new ApexVariable(child);
    }
    return child;
}