const AuraRoot = require('../types/auraRoot');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraComponent extends AuraRoot {

    constructor(quelifiedNameOrObject, token) {
        super(quelifiedNameOrObject, AuraNodeType.COMPONENT, token);
        if (Utils.isObject(quelifiedNameOrObject)) {
            this.attributes = quelifiedNameOrObject.attributes;
            this.events = quelifiedNameOrObject.events;
            this.handlers = quelifiedNameOrObject.handlers;
            this.extends = quelifiedNameOrObject.extends;
            this.controller = quelifiedNameOrObject.controller;
            this.isTemplate = quelifiedNameOrObject.isTemplate;
            this.template = quelifiedNameOrObject.template;
            this.implements = quelifiedNameOrObject.implements;
            this.implementsValues = quelifiedNameOrObject.implementsValues;
            this.controllerFunctions = quelifiedNameOrObject.controllerFunctions;
            this.helperFunctions = quelifiedNameOrObject.helperFunctions;
            this.apexFunctions = quelifiedNameOrObject.apexFunctions;
            this.fileName = quelifiedNameOrObject.fileName;
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
module.exports = AuraComponent;