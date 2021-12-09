/**
 * Class to represent a Retrieve Warning section on Retriieve Result JSON Response
 */
export class RetrieveWarning {

    fileName: string;
    problem?: string;

    /**
     * Create new Retrieve Warning instance
     * @param {string | { [key: string]: any }} fileNameOrWarning Retrieve file name or Warning instance
     * @param {string} [problem] Problem description
     */
    constructor(fileNameOrWarning: string | { [key: string]: any }, problem?: string) {
        if (fileNameOrWarning && typeof fileNameOrWarning !== 'string') {
            this.fileName = fileNameOrWarning.fileName;
            this.problem = fileNameOrWarning.problem;
        } else {
            this.fileName = fileNameOrWarning;
            this.problem = problem;
        }
    }
}