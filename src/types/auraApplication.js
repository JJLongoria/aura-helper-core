const AuraRoot = require('../types/auraRoot');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraApplication extends AuraRoot {

    constructor(nameOrObject, token) {
        super(nameOrObject, AuraNodeType.APPLICATION, token);
        if (Utils.isObject(nameOrObject)) {
            this.attributes = nameOrObject.attributes;
            this.controller = nameOrObject.controller;
            this.extends = nameOrObject.extends;
            this.implements = nameOrObject.implements;
            this.template = nameOrObject.template;
            this.tokens = nameOrObject.tokens;
            this.useAppcache = nameOrObject.useAppcache;
            this.dependencies = nameOrObject.dependencies;
        } else {
            this.attributes = {};
            this.controller = undefined;
            this.extends = undefined;
            this.implements = [];
            this.template = undefined;
            this.tokens =[];
            this.useAppcache = false;
            this.dependencies = [];
        }
    }

}
module.exports = AuraApplication;