const AuraNode = require('../types/auraNode');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraEvent extends AuraNode {

    constructor(quelifiedNameOrObject, token) {
        super(quelifiedNameOrObject, AuraNodeType.EVENT, token);
        if (Utils.isObject(quelifiedNameOrObject)) {
            this.attributes = quelifiedNameOrObject.attributes;
            this.access = quelifiedNameOrObject.access;
            this.extends = quelifiedNameOrObject.extends;
            this.type = quelifiedNameOrObject.type;
            this.fileName = quelifiedNameOrObject.fileName;
        } else {
            this.attributes = [];
            this.access = undefined;
            this.extends = undefined;
            this.type = undefined;
            this.fileName = undefined;
        }
    }

}
module.exports = AuraEvent;