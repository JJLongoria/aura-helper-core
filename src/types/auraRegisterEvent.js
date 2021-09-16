const Utils = require('../utils/utils');
const AuraNode = require('../types/auraNode');
const AuraNodeType = require('../values/auraNodeType');

class AuraRegisterEvent extends AuraNode {

    constructor(quelifiedNameOrObject, token) {
        super(quelifiedNameOrObject, AuraNodeType.REGISTER_EVENT, token);
        if (Utils.isObject(quelifiedNameOrObject)) {
            this.type = quelifiedNameOrObject.type;
            this.name = quelifiedNameOrObject.name;
        } else {
            this.type = undefined;
            this.name = undefined;
        }
    }

}
module.exports = AuraRegisterEvent;