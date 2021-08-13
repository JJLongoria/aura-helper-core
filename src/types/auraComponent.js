const AuraRoot = require('../types/auraRoot');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraComponent extends AuraRoot {

    constructor(nameOrObject, token) {
        super(nameOrObject, AuraNodeType.COMPONENT, token);
        if (Utils.isObject(nameOrObject)) {
            this.attributes = nameOrObject.attributes;
            this.events = nameOrObject.events;
            this.handlers = nameOrObject.handlers;
            this.extends = nameOrObject.extends;
            this.controller = nameOrObject.controller;
            this.isTemplate = nameOrObject.isTemplate;
            this.template = nameOrObject.template;
            this.implements = nameOrObject.implements;
            this.controllerFunctions = nameOrObject.controllerFunctions;
            this.helperFunctions = nameOrObject.helperFunctions;
            this.apexFunctions = nameOrObject.apexFunctions;
        } else {
            this.attributes = {};
            this.events = [];
            this.handlers = [];
            this.extends = undefined;
            this.controller = undefined;
            this.isTemplate = false;
            this.template = undefined;
            this.implements = [];
            this.controllerFunctions = {};
            this.helperFunctions = {};
            this.apexFunctions = {};
        }
    }
}
module.exports = AuraComponent;