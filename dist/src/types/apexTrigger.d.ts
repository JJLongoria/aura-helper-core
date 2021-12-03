import { ApexNode } from "./apexNode";
import { ApexVariable } from "./apexVariable";
import { SOQLQuery } from "./soqlQuery";
import { Token } from "./token";
/**
 * Class to represent an Apex Trigger Node when Parsing Apex Code
 */
export declare class ApexTrigger extends ApexNode {
    sObject?: string;
    beforeInsert: boolean;
    afterInsert: boolean;
    beforeUpdate: boolean;
    afterUpdate: boolean;
    beforeDelete: boolean;
    afterDelete: boolean;
    beforeUndelete: boolean;
    afterUndelete: boolean;
    variables: {
        [key: string]: ApexVariable;
    };
    queries: SOQLQuery[];
    /**
     * Constructor to create an ApexTrigger instance
     * @param {string | ApexTrigger} idOrTrigger Node id or Object with ApexTrigger fields
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrTrigger: string | ApexTrigger, name?: string, startToken?: Token);
    /**
     * Method to add the declared childs into the trigger code block
     * @param {ApexVariable | SOQLQuery} child ApexVariable child to add
     * @returns {ApexTrigger} Return the ApexTrigger instance
     */
    addChild(child: ApexVariable | SOQLQuery): this;
}
