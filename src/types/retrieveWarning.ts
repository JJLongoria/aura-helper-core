/**
 * Class to represent a Retrieve Warning JSON Response
 */
export class RetrieveWarning {

    fileName: string;
    problem: string;

    constructor(fileNameOrWarning: string | RetrieveWarning, problem: string) {
        if (fileNameOrWarning instanceof RetrieveWarning) {
            this.fileName = fileNameOrWarning.fileName;
            this.problem = fileNameOrWarning.problem;
        } else {
            this.fileName = fileNameOrWarning;
            this.problem = problem;
        }
    }
}