/**
 * Class to represent Aura Helper CLI Response JSON Object
 */
export class AuraHelperCLIResponse {

    status: number | string;
    message?: string;
    result: any;

    /**
     * Create new Aura Helper CLI Response
     * @param {number | string | { [key: string]: any }} statusOrResponse Response status or Response instance
     * @param {string} [message] Response message
     * @param {any} [result] Response result data
     */
    constructor(statusOrResponse: number | string | { [key: string]: any }, message?: string, result?: any) {
        if (statusOrResponse && typeof statusOrResponse !== 'string' && typeof statusOrResponse !== 'number') {
            this.status = statusOrResponse.status;
            this.message = statusOrResponse.message;
            this.result = statusOrResponse.result;
        } else {
            this.status = statusOrResponse;
            this.message = message;
            this.result = result;
        }
    }

}