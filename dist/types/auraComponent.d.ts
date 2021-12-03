import { ApexMethod } from "./apexMethod";
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
export declare class AuraComponent extends AuraRoot {
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
    apexFunctions?: {
        [key: string]: ApexMethod;
    };
    fileName?: string;
    /**
     * Create new Aura Component instance
     * @param {string | AuraComponent} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | AuraComponent, token?: Token);
}
