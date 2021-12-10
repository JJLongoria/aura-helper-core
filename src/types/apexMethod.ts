import { Utils } from "../utils";
import { ApexNodeTypes } from "../values";
import { ApexDeclarationNode } from "./apexDeclarationNode";
import { ApexExceptionThrows } from "./apexExceptionThrows";
import { ApexVariable } from "./apexVariable";
import { SOQLQuery } from "./soqlQuery";
import { Token } from "./token";

/**
 * Class to represent an Apex Method Node when Parsing Apex Code
 */
export class ApexMethod extends ApexDeclarationNode {

    testMethod?: Token;
    variables: { [key: string]: ApexVariable };
    params: { [key: string]: ApexVariable };
    queries: SOQLQuery[];
    exceptions: ApexExceptionThrows[];

    /**
     * Constructor to create an ApexMethod instance
     * @param {String | { [key: string]: any }} idOrMethod Node id or Object with ApexMethod fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrMethod: string | { [key: string]: any }, name?: string, startToken?: Token) {
        super(idOrMethod, ApexNodeTypes.METHOD, name, startToken);
        if (idOrMethod && typeof idOrMethod !== 'string') {
            this.testMethod = idOrMethod.testMethod;
            this.variables = serialize(idOrMethod.variables);
            this.params = serialize(idOrMethod.params);
            this.queries = idOrMethod.queries;
            this.exceptions = idOrMethod.exceptions;
        } else {
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
    addChild(child: ApexVariable | SOQLQuery | ApexExceptionThrows) {
        if (!child) {
            return this;
        }
        if (child.nodeType === ApexNodeTypes.VARIABLE && child instanceof ApexVariable) {
            this.variables[child.name.toLowerCase()] = child;
        } else if (child.nodeType === ApexNodeTypes.SOQL && child instanceof SOQLQuery) {
            this.queries.push(child);
        } else if (child.nodeType === ApexNodeTypes.THROWS && child instanceof ApexExceptionThrows) {
            this.exceptions.push(child);
        }
        child.order = Utils.countKeys(this.variables);
        child.memberOrder = child.order;
        return this;
    }

    /**
     * Method to add the method parameters
     * @param {ApexVariable} child ApexVariable parameter to add 
     * @returns {ApexMethod} Return the ApexMethod instance
     */
    addParam(child: ApexVariable): ApexMethod {
        if (child && child.nodeType === ApexNodeTypes.VARIABLE) {
            this.params[child.name.toLowerCase()] = child;
            child.order = Utils.countKeys(this.params);
            child.memberOrder = child.order;
        }
        return this;
    }

    /**
     * Method to get an array with the method parameters ordered by position on the signature
     * @returns {ApexVariable[]} Return the method parameters ordered by position
     */
    getOrderedParams(): ApexVariable[] {
        let ordered = [];
        for (const key of Object.keys(this.params)) {
            ordered.push(this.params[key]);
        }
        return Utils.sort(ordered, ['order']);;
    }

    /**
     * Method to get an array with the method declared variables in order of declaration
     * @returns {ApexVariable[]} Return the method parameters ordered by declaration
     */
    getOrderedVariables(): ApexVariable[] {
        let ordered = [];
        for (const key of Object.keys(this.variables)) {
            ordered.push(this.variables[key]);
        }
        ordered = Utils.sort(ordered, ['order']);
        return ordered;
    }

    /**
     * Method to get the last child into the method body
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
     * Method to get the first child into the method body
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
     * Method to get the first child into the method body (Equals to getFirstChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbosluteFirstChild(): ApexVariable | undefined {
        return this.getFirstChild();
    }

    /**
     * Method to get the last child into the method body (Equals to getLastChild())
     * @returns {ApexVariable | undefined} Return the first ApexVariable declared or undefined if not found any variables
     */
    getAbsoluteLastChild(): ApexVariable | undefined {
        return this.getLastChild();
    }
}

function serialize(objects: any) {
    if (!objects){
        return objects;
    }
    for (const objKey of Object.keys(objects)) {
        const child = objects[objKey];
        objects[objKey] = serializeChild(child);
    }
    return objects;
}

function serializeChild(child: any) {
    if (!child){
        return child;
    }
    if (child.nodeType === ApexNodeTypes.VARIABLE) {
        return new ApexVariable(child);
    }
    return child;
}