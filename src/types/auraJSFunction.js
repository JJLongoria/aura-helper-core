const Utils = require('../utils/utils');
const AuraNodeType = require('../values/auraNodeType');

class AuraJSFunction {

    constructor(nameOrObject, token, comment) {
        this.nodeType = AuraNodeType.FUNCTION;
        if (Utils.isObject(nameOrObject)) {
            this.name = nameOrObject.name;
            this.token = nameOrObject.token;
            this.params = nameOrObject.params;
            this.comment = nameOrObject.comment;
            this.signature = nameOrObject.signature;
            this.auraSignature = nameOrObject.auraSignature;
            this.positionData = nameOrObject.positionData;
        } else {
            this.name = nameOrObject;
            this.token = token;
            this.params = [];
            this.comment = comment;
            if(!Utils.isNull(comment))
                this.comment.processComment();
            this.signature = undefined;
            this.auraSignature = undefined;
            this.positionData = undefined;
        }
    }

}
module.exports = AuraJSFunction;