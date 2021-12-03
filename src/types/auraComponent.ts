import { AuraNodeTypes } from "../values";
import { AuraAttribute } from "./auraAttribute";
import { AuraEvent } from "./auraEvent";
import { AuraHandler } from "./auraHandler";
import { AuraJSFunction } from "./auraJSFunction";
import { AuraRoot } from "./auraRoot";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";

/**
 * Class to represent an Aura Component Node on XML language when analize and parse Aura XML Files
 */
export class AuraComponent extends AuraRoot {

    attributes: AuraAttribute[];
    events: AuraEvent[];
    handlers: AuraHandler[];
    extends?: AuraTagData;
    controller?: AuraTagData;
    isTemplate?: AuraTagData;
    template?: AuraTagData;
    implements?: AuraTagData;
    implementsValues?: string[];
    controllerFunctions?: AuraJSFunction[];
    helperFunctions?: AuraJSFunction[];
    apexFunctions?: any;
    fileName?: string;

    /**
     * Create new Aura Component instance
     * @param {string | AuraComponent} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
     constructor(quelifiedNameOrNode: string | AuraComponent, token?: Token) {
        super(quelifiedNameOrNode, AuraNodeTypes.COMPONENT, token);
        if (quelifiedNameOrNode instanceof AuraComponent) {
            this.attributes = quelifiedNameOrNode.attributes;
            this.events = quelifiedNameOrNode.events;
            this.handlers = quelifiedNameOrNode.handlers;
            this.extends = quelifiedNameOrNode.extends;
            this.controller = quelifiedNameOrNode.controller;
            this.isTemplate = quelifiedNameOrNode.isTemplate;
            this.template = quelifiedNameOrNode.template;
            this.implements = quelifiedNameOrNode.implements;
            this.implementsValues = quelifiedNameOrNode.implementsValues;
            this.controllerFunctions = quelifiedNameOrNode.controllerFunctions;
            this.helperFunctions = quelifiedNameOrNode.helperFunctions;
            this.apexFunctions = quelifiedNameOrNode.apexFunctions;
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