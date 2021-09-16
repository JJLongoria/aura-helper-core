const AuraNode = require('../types/auraNode');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraAttribute extends AuraNode {

    constructor(quelifiedNameOrObject, token) {
        super(quelifiedNameOrObject, AuraNodeType.ATTRIBUTE, token);
        if (Utils.isObject(quelifiedNameOrObject)) {
            this.access = quelifiedNameOrObject.access;
            this.default = quelifiedNameOrObject.default;
            this.type = quelifiedNameOrObject.type;
            this.required = quelifiedNameOrObject.required;
            this.name = quelifiedNameOrObject.name;
        } else {
            this.access = undefined;
            this.default = undefined;
            this.type = undefined;
            this.required = undefined;
            this.name;
        }
    }

}
module.exports = AuraAttribute;