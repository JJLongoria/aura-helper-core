import { OSNotSupportedException } from '../../exceptions';

describe('Testing ./src/exceptions/osNotSuportedException.js', () => {
    test('Testing instance()', () => {
        const ex = new OSNotSupportedException();
        expect(ex.name).toMatch('OSNotSupportedException');
        expect(ex.message).toMatch('Operative System Not Supported');
    });
});