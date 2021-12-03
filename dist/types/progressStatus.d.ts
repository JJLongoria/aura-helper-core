/**
 * Class to represent a Callback progress status
 */
export declare class ProgressStatus {
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
    constructor(incrementOrStatus: number | ProgressStatus, percentage?: number, entityType?: string, entityObject?: string, entityItem?: string, data?: any);
}
