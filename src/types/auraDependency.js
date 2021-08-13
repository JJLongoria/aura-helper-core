const AuraNode = require('../types/auraNode');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraDependency extends AuraNode {

    constructor(nameOrObject, token) {
        super(nameOrObject, AuraNodeType.DEPENDENCY, token);
        if (Utils.isObject(nameOrObject)) {
            this.resource = nameOrObject.resource;
            this.type = nameOrObject.type;
        } else {
            this.resource = undefined;
            this.type = undefined;
        }
    }

}
module.exports = AuraDependency;