const Utils = require('../utils/utils');
const MathUtils = require('../utils/mathUtils');

class ProgressStatus {

    constructor(incrementOrObject, percentage, entityType, entityObject, entityItem, data){
        if(Utils.isObject(incrementOrObject)){
            this.increment = incrementOrObject.increment;
            this.percentage = incrementOrObject.percentage;
            this.entityType = incrementOrObject.entityType;
            this.entityObject = incrementOrObject.entityObject;
            this.entityItem = incrementOrObject.entityItem;
            this.data = incrementOrObject.data;
        } else {
            incrementOrObject = (Utils.isNull(incrementOrObject)) ? 0 : incrementOrObject;
            percentage = (Utils.isNull(percentage)) ? 0 : percentage;
            this.increment = incrementOrObject;
            this.percentage = MathUtils.round(percentage, 2);
            this.entityType = entityType;
            this.entityObject = entityObject;
            this.entityItem = entityItem;
            this.data = data
        }
    }
}
module.exports = ProgressStatus;