/**
 * Class to represent a Retrieve Warning section on Retriieve Result JSON Response
 */
export declare class RetrieveWarning {
    fileName: string;
    problem?: string;
    /**
     * Create new Retrieve Warning instance
     * @param {string | RetrieveWarning} fileNameOrWarning Retrieve file name or Warning instance
     * @param {string} [problem] Problem description
     */
    constructor(fileNameOrWarning: string | RetrieveWarning, problem?: string);
}
