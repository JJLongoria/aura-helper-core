const AuraNode = require('../types/auraNode');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraAttribute extends AuraNode {

    constructor(nameOrObject, token) {
        super(nameOrObject, AuraNodeType.ATTRIBUTE, token);
        if (Utils.isObject(nameOrObject)) {
            this.access = nameOrObject.access;
            this.default = nameOrObject.default;
            this.type = nameOrObject.type;
            this.required = nameOrObject.required;
        } else {
            this.access = undefined;
            this.default = undefined;
            this.type = undefined;
            this.required = false;
        }
    }

}
module.exports = AuraAttribute;