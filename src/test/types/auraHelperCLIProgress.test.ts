import { AuraHelperCLIProgress } from "../../types";


describe('Testing ./src/types/auraHelperCLIProgress.js', () => {
    test('Testing instance', () => {
        const error = new AuraHelperCLIProgress('status', 'message', 1, 5);
        expect(error.message).toMatch('message');
        expect(error.status).toMatch('status');
        const error2 = new AuraHelperCLIProgress(error);
        expect(error2.message).toMatch('message');
        expect(error2.status).toMatch('status');
    });
});