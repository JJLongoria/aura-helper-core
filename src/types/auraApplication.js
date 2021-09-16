const AuraRoot = require('../types/auraRoot');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraApplication extends AuraRoot {

    constructor(quelifiedNameOrObject, token) {
        super(quelifiedNameOrObject, AuraNodeType.APPLICATION, token);
        if (Utils.isObject(quelifiedNameOrObject)) {
            this.attributes = quelifiedNameOrObject.attributes;
            this.controller = quelifiedNameOrObject.controller;
            this.extends = quelifiedNameOrObject.extends;
            this.implements = quelifiedNameOrObject.implements;
            this.implementsValues = quelifiedNameOrObject.implementsValues;
            this.template = quelifiedNameOrObject.template;
            this.useAppcache = quelifiedNameOrObject.useAppcache;
            this.dependencies = quelifiedNameOrObject.dependencies;
            this.fileName = quelifiedNameOrObject.fileName;
        } else {
            this.attributes = [];
            this.controller = undefined;
            this.extends = undefined;
            this.implements = undefined;
            this.implementsValues = [];
            this.template = undefined;
            this.useAppcache = undefined;
            this.dependencies = [];
            this.fileName = undefined;
        }
    }

}
module.exports = AuraApplication;