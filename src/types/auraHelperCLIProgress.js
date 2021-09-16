const AuraHelperCLIResponse = require('./auraHelperCLIResponse');
const Utils = require('../utils/utils');
const MathUtils = require('../utils/mathUtils');

class AuraHelperCLIProgress extends AuraHelperCLIResponse {

    constructor(statusOrObject, message, increment, percentage) {
        super(statusOrObject, message, undefined);
        if (!Utils.isObject(statusOrObject)) {
            percentage = (percentage !== undefined) ? (percentage > 100) ? 100 : MathUtils.round(percentage, 2) : -1;
            increment =  (increment !== undefined) ? (increment > 100) ? 100 : increment : -1;
            this.result = {
                increment: increment,
                percentage: percentage
            }
        }
        this.isProgress = true;
    }

}
module.exports = AuraHelperCLIProgress;