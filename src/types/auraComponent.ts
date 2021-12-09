import { AuraNodeTypes } from "../values";
import { ApexMethod } from "./apexMethod";
import { AuraAttribute } from "./auraAttribute";
import { AuraRegisterEvent } from "./auraRegisterEvent";
import { AuraHandler } from "./auraHandler";
import { AuraJSFunction } from "./auraJSFunction";
import { AuraRoot } from "./auraRoot";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";
import { Utils } from "../utils";

/**
 * Class to represent an Aura Component Node on XML language when analize and parse Aura XML Files
 */
export class AuraComponent extends AuraRoot {

    attributes: AuraAttribute[];
    events: AuraRegisterEvent[];
    handlers: AuraHandler[];
    extends?: AuraTagData;
    controller?: AuraTagData;
    isTemplate?: AuraTagData;
    template?: AuraTagData;
    implements?: AuraTagData;
    implementsValues: string[];
    controllerFunctions: AuraJSFunction[];
    helperFunctions: AuraJSFunction[];
    apexFunctions: { [key: string]: ApexMethod };
    fileName?: string;

    /**
     * Create new Aura Component instance
     * @param {string | { [key: string]: any }} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | { [key: string]: any }, token?: Token) {
        super(quelifiedNameOrNode, AuraNodeTypes.COMPONENT, token);
        if (quelifiedNameOrNode && typeof quelifiedNameOrNode !== 'string') {
            this.attributes = serializeAttributes(quelifiedNameOrNode.attributes);
            this.events = serializeEvents(quelifiedNameOrNode.events);
            this.handlers = serializeHandlers(quelifiedNameOrNode.handlers);
            this.extends = quelifiedNameOrNode.extends;
            this.controller = quelifiedNameOrNode.controller;
            this.isTemplate = quelifiedNameOrNode.isTemplate;
            this.template = quelifiedNameOrNode.template;
            this.implements = quelifiedNameOrNode.implements;
            this.implementsValues = quelifiedNameOrNode.implementsValues as string[];
            this.controllerFunctions = serializeFunctions(quelifiedNameOrNode.controllerFunctions);
            this.helperFunctions = serializeFunctions(quelifiedNameOrNode.helperFunctions);
            this.apexFunctions = serializeMethods(quelifiedNameOrNode.apexFunctions);
            this.fileName = quelifiedNameOrNode.fileName;
        } else {
            this.attributes = [];
            this.events = [];
            this.handlers = [];
            this.extends = undefined;
            this.controller = undefined;
            this.isTemplate = undefined;
            this.template = undefined;
            this.implements = undefined;
            this.implementsValues = [];
            this.controllerFunctions = [];
            this.helperFunctions = [];
            this.apexFunctions = {};
            this.fileName = undefined;
        }
    }
}

function serializeAttributes(objects: any): AuraAttribute[] {
    const result: AuraAttribute[] = [];
    objects = Utils.forceArray(objects);
    if (objects) {
        for (const obj of objects) {
            result.push(new AuraAttribute(obj));
        }
    }
    return result;
}

function serializeEvents(objects: any): AuraRegisterEvent[] {
    const result: AuraRegisterEvent[] = [];
    objects = Utils.forceArray(objects);
    if (objects) {
        for (const obj of objects) {
            result.push(new AuraRegisterEvent(obj));
        }
    }
    return result;
}

function serializeHandlers(objects: any): AuraHandler[] {
    const result: AuraHandler[] = [];
    objects = Utils.forceArray(objects);
    if (objects) {
        for (const obj of objects) {
            result.push(new AuraHandler(obj));
        }
    }
    return result;
}

function serializeFunctions(objects: any): AuraJSFunction[] {
    const result: AuraJSFunction[] = [];
    objects = Utils.forceArray(objects);
    if (objects) {
        for (const obj of objects) {
            result.push(new AuraJSFunction(obj));
        }
    }
    return result;
}

function serializeMethods(objects: any): { [key: string]: ApexMethod } {
    const result: { [key: string]: ApexMethod } = {};
    if (objects) {
        for (const objKey of Object.keys(objects)) {
            const method = new ApexMethod(objects[objKey]);
            if (method.simplifiedSignature) {
                result[method.simplifiedSignature] = method;
            }
        }
    }
    return result;
}