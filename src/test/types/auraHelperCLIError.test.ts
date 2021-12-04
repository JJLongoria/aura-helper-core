import { AuraHelperCLIError } from "../../types";

describe('Testing ./src/types/auraHelperCLIError.js', () => {
    test('Testing instance', () => {
        const error = new AuraHelperCLIError('status', 'name', 'code', 'message');
        expect(error.name).toMatch('name');
        expect(error.status).toMatch('status');
        const error2 = new AuraHelperCLIError(error);
        expect(error2.name).toMatch('name');
        expect(error2.status).toMatch('status');
    });
});