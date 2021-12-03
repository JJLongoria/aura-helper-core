/**
 * Class to make HTTP request
 */
export declare class HTTPConnection {
    /**
     * Method to make a GET HTTP Request
     * @param {string} endpoint URL to make the request
     *
     * @returns {Promise<string>} Returns the URL content
     */
    static getRequest(endpoint: string): Promise<string>;
}
