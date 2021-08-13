const HttpConnection = require('../../../src/utils/httpConnection');

describe('Testing ./src/utils/httpConnection.js', () => {
    test('Testing getRequest()', async (done) => {
        await HttpConnection.getRequest('https://www.google.es');
        done();
    });
});