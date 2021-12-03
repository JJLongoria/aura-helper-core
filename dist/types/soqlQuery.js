"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOQLQuery = void 0;
const values_1 = require("../values");
const apexNode_1 = require("./apexNode");
/**
 * Class to represent an Apex SOQL Query Node when Parsing Apex Code
 */
class SOQLQuery extends apexNode_1.ApexNode {
    /**
     * Method to create new SOQL Query
     * @param {string | SOQLQuery} idOrQuery Node Id or query instance
     * @param {string} [name] Node name
     * @param {Token} [startToken] Node start token
     */
    constructor(idOrQuery, name, startToken) {
        super(idOrQuery, values_1.ApexNodeTypes.SOQL, name, startToken);
        if (idOrQuery instanceof SOQLQuery) {
            this.from = idOrQuery.from;
            this.where = idOrQuery.where;
            this.orderBy = idOrQuery.orderBy;
            this.groupBy = idOrQuery.groupBy;
            this.limit = idOrQuery.limit;
            this.projection = idOrQuery.projection;
            this.isDinamyc = idOrQuery.isDinamyc;
        }
        else {
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
exports.SOQLQuery = SOQLQuery;
//# sourceMappingURL=soqlQuery.js.map