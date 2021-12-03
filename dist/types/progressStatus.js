"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressStatus = void 0;
const utils_1 = require("../utils");
/**
 * Class to represent a Callback progress status
 */
class ProgressStatus {
    /**
     * Create new Progress Status instance
     * @param {number | ProgressStatus} incrementOrStatus Progress Increment value or Progress Status instance
     * @param {number} percentage Progress percentage
     * @param {string} entityType Progress Entity Type
     * @param {string} entityObject Progress Entity Object
     * @param {string} entityItem Progress Entity Item
     * @param {any} data Related progress data
     */
    constructor(incrementOrStatus, percentage, entityType, entityObject, entityItem, data) {
        if (incrementOrStatus instanceof ProgressStatus) {
            this.increment = incrementOrStatus.increment;
            this.percentage = incrementOrStatus.percentage;
            this.entityType = incrementOrStatus.entityType;
            this.entityObject = incrementOrStatus.entityObject;
            this.entityItem = incrementOrStatus.entityItem;
            this.data = incrementOrStatus.data;
        }
        else {
            incrementOrStatus = (incrementOrStatus === undefined) ? 0 : incrementOrStatus;
            percentage = (percentage === undefined) ? 0 : percentage;
            this.increment = incrementOrStatus;
            this.percentage = utils_1.MathUtils.round(percentage, 2);
            this.entityType = entityType;
            this.entityObject = entityObject;
            this.entityItem = entityItem;
            this.data = data;
        }
    }
}
exports.ProgressStatus = ProgressStatus;
//# sourceMappingURL=progressStatus.js.map