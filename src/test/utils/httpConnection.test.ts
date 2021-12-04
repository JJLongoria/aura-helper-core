import { HTTPConnection } from '../../utils';

describe('Testing ./src/utils/httpConnection.js', () => {
    test('Testing getRequest()', async () => {
        await HTTPConnection.getRequest('https://www.google.es');
        return;
    });
    test('Testing getRequest() with error', async () => {
        try {
            await HTTPConnection.getRequest('https://www.googles.es');
        } catch (error) {
            const errData = error as Error;
            expect(errData.message).toMatch('Host: www.googles.es. is not in the cert');
        }
        return;
    });
});