import { ApexNode } from "./apexNode";
import { SOQLField } from "./soqlField";
import { Token } from "./token";
/**
 * Class to represent an Apex SOQL Query Node when Parsing Apex Code
 */
export declare class SOQLQuery extends ApexNode {
    from?: string;
    where?: any;
    orderBy?: any;
    groupBy?: any;
    projection?: SOQLField[];
    isDinamyc?: boolean;
    limit?: number;
    /**
     * Method to create new SOQL Query
     * @param {string | SOQLQuery} idOrQuery Node Id or query instance
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrQuery: string | SOQLQuery, name?: string, startToken?: Token);
}
