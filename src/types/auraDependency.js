const AuraNode = require('../types/auraNode');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraDependency extends AuraNode {

    constructor(quelifiedNameOrObject, token) {
        super(quelifiedNameOrObject, AuraNodeType.DEPENDENCY, token);
        if (Utils.isObject(quelifiedNameOrObject)) {
            this.resource = quelifiedNameOrObject.resource;
            this.type = quelifiedNameOrObject.type;
        } else {
            this.resource = undefined;
            this.type = undefined;
        }
    }

}
module.exports = AuraDependency;