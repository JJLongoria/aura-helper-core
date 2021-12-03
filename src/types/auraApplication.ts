import { AuraNodeTypes } from "../values";
import { AuraAttribute } from "./auraAttribute";
import { AuraDependency } from "./auraDependency";
import { AuraRoot } from "./auraRoot";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";

/**
 * Class to represent an Aura Application Node on XML language when analize and parse Aura XML Files
 */
export class AuraApplication extends AuraRoot {

    attributes: AuraAttribute[];
    dependencies?: AuraDependency[];
    controller?: AuraTagData;
    extends?: AuraTagData;
    template?: AuraTagData;
    implements?: AuraTagData;
    implementsValues?: string[];
    useAppcache?: AuraTagData;
    fileName?: string;

    /**
     * Create new Aura Application instance
     * @param {string | AuraApplication} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraApplication, token?: Token) {
        super(quelifiedNameOrNode, AuraNodeTypes.APPLICATION, token);
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