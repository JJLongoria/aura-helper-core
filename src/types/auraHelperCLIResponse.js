const Utils = require('../utils/utils');

class AuraHelperCLIResponse {

    constructor(statusOrObject, message, result) {
        if (Utils.isObject(statusOrObject)) {
            this.status = statusOrObject.status;
            this.message = statusOrObject.message;
            this.result = statusOrObject.result;
        } else {
            this.status = statusOrObject;
            this.message = message;
            this.result = result;
        }
    }

}
module.exports = AuraHelperCLIResponse;