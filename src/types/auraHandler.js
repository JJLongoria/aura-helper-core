const AuraNode = require('../types/auraNode');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraHandler extends AuraNode {

    constructor(quelifiedNameOrObject, token) {
        super(quelifiedNameOrObject, AuraNodeType.HANDLER, token);
        if (Utils.isObject(quelifiedNameOrObject)) {
            this.action = quelifiedNameOrObject.action;
            this.event = quelifiedNameOrObject.event;
            this.phase = quelifiedNameOrObject.phase;
            this.includeFacets = quelifiedNameOrObject.includeFacets;
            this.name = quelifiedNameOrObject.name;
        } else {
            this.action = undefined;
            this.event = undefined;
            this.phase = undefined;
            this.includeFacets = undefined;
            this.name = undefined;
        }
    }

}
module.exports = AuraHandler;
