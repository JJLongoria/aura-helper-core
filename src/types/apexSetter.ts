import { Utils } from "../utils";
import { ApexNodeTypes } from "../values";
import { ApexNode } from "./apexNode";
import { ApexVariable } from "./apexVariable";
import { SOQLQuery } from "./soqlQuery";
import { Token } from "./token";

/**
 * Class to represent a Property Apex Getter Node when Parsing Apex Code
 */
export class ApexSetter extends ApexNode {

    variables: { [key: string]: ApexVariable };
    queries: SOQLQuery[];

    /**
     * Constructor to create an ApexSetter instance
     * @param {string | ApexSetter} idOrGetter Node id or Object with ApexSetter fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrGetter: string | ApexSetter, name?: string, startToken?: Token) {
        super(idOrGetter, ApexNodeTypes.SETTER, name, startToken);
        if (idOrGetter instanceof ApexSetter) {
            this.variables = serialize(idOrGetter.variables);
            this.queries = idOrGetter.queries;
        } else {
            this.variables = {};
            this.queries = [];
        }
    }

    /**
     * Method to add the declared variables into the getter code block
     * @param {ApexVariable} child ApexVariable child to add 
     * @returns {ApexSetter} Return the ApexSetter instance
     */
    addChild(child: ApexVariable | SOQLQuery): ApexSetter {
        if (child && child.nodeType === ApexNodeTypes.VARIABLE && child instanceof ApexVariable) {
            this.variables[child.name.toLowerCase()] = child;
            child.order = Utils.countKeys(this.variables);
            child.memberOrder = child.order;
        } else if (child && child.nodeType === ApexNodeTypes.SOQL) {
            this.queries.push(child);
        }
        return this;
    }

    /**
     * Method to get the last child into the getter body
     * @returns {ApexVariable | undefined} Return the last ApexVariable declared or undefined if not found any variables
     */
    getLastChild(): ApexVariable | undefined {
        if (!Utils.hasKeys(this.variables)) {
            return undefined;
        }
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
     * Method to get the first child into the getter body
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getFirstChild(): ApexVariable | undefined {
        if (!Utils.hasKeys(this.variables)) {
            return undefined;
        }
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
     * Method to get the first child into the getter body (Equals to getFirstChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbosluteFirstChild(): ApexVariable | undefined {
        return this.getFirstChild();
    }

    /**
     * Method to get the last child into the getter body (Equals to getLastChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbsoluteLastChild(): ApexVariable | undefined {
        return this.getLastChild();
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