import * as https from 'https';



/**
 * Class to make HTTP request
 */
export class HTTPConnection {

    /**
     * Method to make a GET HTTP Request
     * @param {string} endpoint URL to make the request
     *  
     * @returns {Promise<string>} Returns the URL content
     */
    static getRequest(endpoint: string) {
        return new Promise<string>(function (resolve, reject) {
            https.get(endpoint, (resp: any) => {
                let data = '';
                resp.on('data', (chunk: any) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    resolve(data);
                });
            }).on("error", (err: Error) => {
                reject(err);
            });
        });
    }

    static postRequest(endpoint: string, body: string, headers?: { [key: string]: string }): Promise<string> {
        return new Promise<string>(function (resolve, reject) {
            const url = new URL(endpoint);
            const options = {
                hostname: url.hostname,
                path: url.pathname,
                method: 'POST',
                port: 443,
                headers: headers
            };
            const request = https.request(options, (resp: any) => {
                let data = '';
                resp.on('data', (chunk: any) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    resolve(data);
                });
            }).on("error", (err: Error) => {
                reject(err);
            });
            request.write(body);
            request.end();
        });
    }

}