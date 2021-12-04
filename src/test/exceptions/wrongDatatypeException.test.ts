import { WrongDatatypeException } from '../../exceptions';

describe('Testing ./src/exceptions/wrongDatatypeException.js', () => {
    test('Testing instance()', () => {
        const ex = new WrongDatatypeException('message');
        expect(ex.name).toMatch('WrongDatatypeException');
        expect(ex.message).toMatch('message');
    });
});