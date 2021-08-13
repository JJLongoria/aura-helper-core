const Utils = require('../utils/utils');
const AuraNode = require('../types/auraNode');

class AuraRoot extends AuraNode {

    constructor(nameOrObject, type, token) {
        super(nameOrObject, type, token);
        if (Utils.isObject(nameOrObject)) {
            this.access = nameOrObject.access;
            this.abstract = nameOrObject.abstract;
            this.extensible = nameOrObject.extensible;
            this.support = nameOrObject.support;
        } else {
            this.access = undefined;
            this.abstract = false;
            this.extensible = false;
            this.support = undefined;
        }
    }

}
module.exports = AuraRoot;