const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const Utils = require('../utils/utils');

class SOQLQuery extends ApexNode {

    constructor(idOrObject, name, startToken) {
        super(idOrObject, ApexNodeType.SOQL, name, startToken);
        if (Utils.isObject(idOrObject)) {
            this.from = idOrObject.from;
            this.where = idOrObject.where;
            this.orderBy = idOrObject.orderBy;
            this.groupBy = idOrObject.groupBy;
            this.limit = idOrObject.limit;
            this.projection = idOrObject.projection;
            this.isDinamyc = idOrObject.isDinamyc;
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
module.exports = SOQLQuery;
