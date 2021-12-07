import { ApexDeclarationNode } from ".";
import { Utils } from "../utils";
import { ApexNodeTypes } from "../values";
import { ApexVariable } from "./apexVariable";
import { SOQLQuery } from "./soqlQuery";
import { Token } from "./token";

/**
 * Class to represent an Apex Trigger Node when Parsing Apex Code
 */
export class ApexTrigger extends ApexDeclarationNode {

    sObject?: string;
    beforeInsert: boolean;
    afterInsert: boolean;
    beforeUpdate: boolean;
    afterUpdate: boolean;
    beforeDelete: boolean;
    afterDelete: boolean;
    beforeUndelete: boolean;
    afterUndelete: boolean;
    variables: { [key: string]: ApexVariable };
    queries: SOQLQuery[];

    /**
     * Constructor to create an ApexTrigger instance
     * @param {string | ApexTrigger} idOrTrigger Node id or Object with ApexTrigger fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrTrigger: string | ApexTrigger, name?: string, startToken?: Token) {
        super(idOrTrigger, ApexNodeTypes.TRIGGER, name, startToken);
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
     * @param {ApexVariable | SOQLQuery} child ApexVariable child to add 
     * @returns {ApexTrigger} Return the ApexTrigger instance
     */
    addChild(child: ApexVariable | SOQLQuery) {
        if (child && child.nodeType === ApexNodeTypes.VARIABLE && child instanceof ApexVariable) {
            this.variables[child.name.toLowerCase()] = child;
            child.order = Utils.countKeys(this.variables);
            child.memberOrder = child.order;
        } else if (child.nodeType === ApexNodeTypes.SOQL && child instanceof SOQLQuery) {
            this.queries.push(child);
        }
        return this;
    }
}

function serialize(objects: any) {
    if (!objects) {
        return objects;
    }
    for (const objKey of Object.keys(objects)) {
        const child = objects[objKey];
        objects[objKey] = serializeChild(child);
    }
    return objects;
}

function serializeChild(child: any) {
    if (!child) {
        return child;
    }
    if (child.nodeType === ApexNodeTypes.VARIABLE) {
        return new ApexVariable(child);
    }
    return child;
}