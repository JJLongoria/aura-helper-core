const AuraNode = require('../types/auraNode');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraEvent extends AuraNode {

    constructor(nameOrObject, token) {
        super(nameOrObject, AuraNodeType.EVENT, token);
        if (Utils.isObject(nameOrObject)) {
            this.attributes = nameOrObject.attributes;
            this.access = nameOrObject.access;
            this.extends = nameOrObject.extends;
            this.type = nameOrObject.type;
        } else {
            this.attributes = {};
            this.access = undefined;
            this.extends = undefined;
            this.type = undefined;
        }
    }

}
module.exports = AuraEvent;