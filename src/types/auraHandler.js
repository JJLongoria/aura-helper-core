const AuraNode = require('../types/auraNode');
const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraHandler extends AuraNode {

    constructor(nameOrObject, token) {
        super(nameOrObject, AuraNodeType.HANDLER, token);
        if (Utils.isObject(nameOrObject)) {
            this.action = nameOrObject.action;
            this.event = nameOrObject.event;
            this.phase = nameOrObject.phase;
            this.includeFacets = nameOrObject.includeFacets;
        } else {
            this.action = undefined;
            this.event = undefined;
            this.phase = undefined;
            this.includeFacets = undefined;
        }
    }

}
module.exports = AuraHandler;
