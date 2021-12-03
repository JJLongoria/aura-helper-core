"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraApplication = void 0;
const values_1 = require("../values");
const auraRoot_1 = require("./auraRoot");
/**
 * Class to represent an Aura Application Node on XML language when analize and parse Aura XML Files
 */
class AuraApplication extends auraRoot_1.AuraRoot {
    /**
     * Create new Aura Application instance
     * @param {string | AuraApplication} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode, token) {
        super(quelifiedNameOrNode, values_1.AuraNodeTypes.APPLICATION, token);
        if (quelifiedNameOrNode instanceof AuraApplication) {
            this.attributes = quelifiedNameOrNode.attributes;
            this.controller = quelifiedNameOrNode.controller;
            this.extends = quelifiedNameOrNode.extends;
            this.implements = quelifiedNameOrNode.implements;
            this.implementsValues = quelifiedNameOrNode.implementsValues;
            this.template = quelifiedNameOrNode.template;
            this.useAppcache = quelifiedNameOrNode.useAppcache;
            this.dependencies = quelifiedNameOrNode.dependencies;
            this.fileName = quelifiedNameOrNode.fileName;
        }
        else {
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
exports.AuraApplication = AuraApplication;
//# sourceMappingURL=auraApplication.js.map