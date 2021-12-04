import { WrongFormatException } from '../../exceptions';

describe('Testing ./src/exceptions/wrongFormatException.js', () => {
    test('Testing instance()', () => {
        const ex = new WrongFormatException('message');
        expect(ex.name).toMatch('WrongFormatException');
        expect(ex.message).toMatch('message');
    });
});