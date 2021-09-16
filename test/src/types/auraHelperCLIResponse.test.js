const AuraHelperCLIResponse = require('../../../src/types/auraHelperCLIResponse');

describe('Testing ./src/types/auraHelperCLIResponse.js', () => {
    test('Testing instance', () => {
        const error = new AuraHelperCLIResponse('status', 'message', {});
        expect(error.message).toMatch('message');
        expect(error.status).toMatch('status');
        const error2 = new AuraHelperCLIResponse(error);
        expect(error2.message).toMatch('message');
        expect(error2.status).toMatch('status');
    });
});