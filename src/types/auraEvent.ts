import { Utils } from "../utils";
import { AuraNodeTypes } from "../values";
import { AuraAttribute } from "./auraAttribute";
import { AuraNode } from "./auraNode";
import { AuraTagData } from "./auraTagData";
import { Token } from "./token";

/**
 * Class to represent an Aura Event Node on XML language when analize and parse Aura XML Files
 */
export class AuraEvent extends AuraNode {

    attributes: AuraAttribute[];
    access?: AuraTagData;
    extends?: AuraTagData;
    type?: AuraTagData;
    fileName?: string;

    /**
     * Create new Aura Event instance
     * @param {string | { [key: string]: any }} quelifiedNameOrNode Qualified XML tag or Aura Node instance
     * @param {Token} [token] Tag first token
     */
    constructor(quelifiedNameOrNode: string | { [key: string]: any }, token?: Token) {
        super(quelifiedNameOrNode, AuraNodeTypes.EVENT, token);
        if (quelifiedNameOrNode && typeof quelifiedNameOrNode !== 'string') {
            this.attributes = serializeAttributes(quelifiedNameOrNode.attributes);
            this.access = quelifiedNameOrNode.access;
            this.extends = quelifiedNameOrNode.extends;
            this.type = quelifiedNameOrNode.type;
            this.fileName = quelifiedNameOrNode.fileName;
        } else {
            this.attributes = [];
            this.access = undefined;
            this.extends = undefined;
            this.type = undefined;
            this.fileName = undefined;
        }
    }

}

function serializeAttributes(objects: any): AuraAttribute[]{
    const result: AuraAttribute[]  = [];
    objects = Utils.forceArray(objects);
    if(objects){
        for(const obj of objects){
            result.push(new AuraAttribute(obj));
        }
    }
    return result;
}