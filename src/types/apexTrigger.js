const ApexNode = require('./apexNode');
const ApexNodeType = require('../values/apexNodeTypes');
const Utils = require('../utils/utils');

class ApexTrigger extends ApexNode{

    constructor(idOrObject, name, startToken){
        super(idOrObject, ApexNodeType.TRIGGER, name, startToken);
        if(Utils.isObject(idOrObject)){
            this.beforeInsert = idOrObject.beforeInsert;
            this.afterInsert = idOrObject.afterInsert;
            this.beforeUpdate = idOrObject.beforeUpdate;
            this.afterUpdate = idOrObject.afterUpdate;
            this.beforeDelete = idOrObject.beforeDelete;
            this.afterDelete = idOrObject.afterDelete;
            this.beforeUndelete = idOrObject.beforeUndelete;
            this.afterUndelete = idOrObject.afterUndelete;
            this.variables = idOrObject.variables;
        } else {
            this.beforeInsert = false;
            this.afterInsert = false;
            this.beforeUpdate = false;
            this.afterUpdate = false;
            this.beforeDelete = false;
            this.afterDelete = false;
            this.beforeUndelete = false;
            this.afterUndelete = false;
            this.variables = {};
        }
    }
}
module.exports = ApexTrigger;