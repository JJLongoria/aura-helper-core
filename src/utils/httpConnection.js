const https = require('https');

/**
 * Class to make HTTP request
 */
class HTTPConnection {

    /**
     * Method to make a GET HTTP Request
     * @param {String} endpoint URL to make the request
     *  
     * @returns {Promise<String>} Returns the URL content
     */
    static getRequest(endpoint) {
        return new Promise(function (resolve, reject) {
            https.get(endpoint, (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    resolve(data);
                });
            }).on("error", (err) => {
                reject(err);
            });
        });
    }  

}
module.exports = HTTPConnection;