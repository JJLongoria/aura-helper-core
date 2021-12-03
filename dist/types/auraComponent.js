"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraComponent = void 0;
const values_1 = require("../values");
const auraRoot_1 = require("./auraRoot");
/**
 * Class to represent an Aura Component Node on XML language when analize and parse Aura XML Files
 */
class AuraComponent extends auraRoot_1.AuraRoot {
    /**
     * Create new Aura Component instance
     * @param {string | AuraComponent} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode, token) {
        super(quelifiedNameOrNode, values_1.AuraNodeTypes.COMPONENT, token);
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
        }
        else {
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
exports.AuraComponent = AuraComponent;
//# sourceMappingURL=auraComponent.js.map