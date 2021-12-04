import { ConnectionException } from '../../exceptions';

describe('Testing ./src/exceptions/connectionException.js', () => {
    test('Testing instance()', () => {
        const ex = new ConnectionException('message');
        expect(ex.name).toMatch('ConnectionException');
        expect(ex.message).toMatch('message');
    });
});