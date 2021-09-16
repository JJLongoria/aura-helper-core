const AuraHelperCLIResponse = require('./auraHelperCLIResponse');
const Utils = require('../utils/utils');

class AuraHelperCLIError extends AuraHelperCLIResponse {

    constructor(statusOrObject, name, code, message) {
        super(statusOrObject, message, undefined);
        if (Utils.isObject(statusOrObject)) {
            this.code = statusOrObject.code;
            this.name = statusOrObject.name;
        } else {
            this.code = code;
            this.name = name;
        }
    }

}
module.exports = AuraHelperCLIError;