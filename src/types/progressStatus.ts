import { MathUtils } from "../utils";

/**
 * Class to represent a Callback progress status
 */
export class ProgressStatus {

    increment: number;
    percentage: number;
    entityType?: string;
    entityObject?: string;
    entityItem?: string;
    data?: any;

    /**
     * Create new Progress Status instance
     * @param {number | ProgressStatus} incrementOrStatus Progress Increment value or Progress Status instance
     * @param {number} percentage Progress percentage
     * @param {string} entityType Progress Entity Type
     * @param {string} entityObject Progress Entity Object
     * @param {string} entityItem Progress Entity Item
     * @param {any} data Related progress data
     */
    constructor(incrementOrStatus?: number | ProgressStatus, percentage?: number, entityType?: string, entityObject?: string, entityItem?: string, data?: any){
        if(incrementOrStatus instanceof ProgressStatus){
            this.increment = incrementOrStatus.increment;
            this.percentage = incrementOrStatus.percentage;
            this.entityType = incrementOrStatus.entityType;
            this.entityObject = incrementOrStatus.entityObject;
            this.entityItem = incrementOrStatus.entityItem;
            this.data = incrementOrStatus.data;
        } else {
            incrementOrStatus = (incrementOrStatus === undefined) ? 0 : incrementOrStatus;
            percentage = (percentage === undefined) ? 0 : percentage;
            this.increment = incrementOrStatus;
            this.percentage = MathUtils.round(percentage, 2);
            this.entityType = entityType;
            this.entityObject = entityObject;
            this.entityItem = entityItem;
            this.data = data;
        }
    }
}