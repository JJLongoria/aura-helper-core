const Utils = require('../utils/utils');
const AuraNode = require('../types/auraNode');

class AuraRoot extends AuraNode {

    constructor(quelifiedNameOrObject, type, token) {
        super(quelifiedNameOrObject, type, token);
        if (Utils.isObject(quelifiedNameOrObject)) {
            this.access = quelifiedNameOrObject.access;
            this.abstract = quelifiedNameOrObject.abstract;
            this.extensible = quelifiedNameOrObject.extensible;
            this.support = quelifiedNameOrObject.support;
        } else {
            this.access = undefined;
            this.abstract = undefined;
            this.extensible = undefined;
            this.support = undefined;
        }
    }

}
module.exports = AuraRoot;