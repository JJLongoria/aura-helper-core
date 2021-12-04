import { ApexNodeTypes } from "../values";
import { ApexNode } from "./apexNode";
import { SOQLField } from "./soqlField";
import { Token } from "./token";

/**
 * Class to represent an Apex SOQL Query Node when Parsing Apex Code
 */
export class SOQLQuery extends ApexNode {

    from?: string;
    where?: any;
    orderBy?: any;
    groupBy?: any;
    projection?: SOQLField[];
    isDinamyc?: boolean;
    limit?: number;
    parentName?: string;

    /**
     * Method to create new SOQL Query
     * @param {string | SOQLQuery} idOrQuery Node Id or query instance
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrQuery: string | SOQLQuery, name?: string, startToken?: Token) {
        super(idOrQuery, ApexNodeTypes.SOQL, name, startToken);
        if (idOrQuery instanceof SOQLQuery) {
            this.from = idOrQuery.from;
            this.where = idOrQuery.where;
            this.orderBy = idOrQuery.orderBy;
            this.groupBy = idOrQuery.groupBy;
            this.limit = idOrQuery.limit;
            this.projection = idOrQuery.projection;
            this.isDinamyc = idOrQuery.isDinamyc;
        } else {
            this.from = undefined;
            this.where = undefined;
            this.orderBy = undefined;
            this.groupBy = undefined;
            this.limit = undefined;
            this.projection = [];
            this.isDinamyc = false;
        }
    }

}
