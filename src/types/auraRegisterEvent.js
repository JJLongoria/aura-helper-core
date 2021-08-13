const Utils = require('../utils/utils');
const AuraNode = require('../types/auraNode');
const AuraNodeType = require('../values/auraNodeType');

class AuraRegisterEvent extends AuraNode {

    constructor(nameOrObject, token) {
        super(nameOrObject, AuraNodeType.REGISTER_EVENT, token);
        if (Utils.isObject(nameOrObject)) {
            this.type = nameOrObject.type;
        } else {
            this.type = undefined;
        }
    }

}
module.exports = AuraRegisterEvent;