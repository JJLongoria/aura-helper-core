import { WrongFilePathException } from '../../exceptions';

describe('Testing ./src/exceptions/wrongFilePathException.js', () => {
    test('Testing instance()', () => {
        const ex = new WrongFilePathException('message');
        expect(ex.name).toMatch('WrongFilePathException');
        expect(ex.message).toMatch('message');
    });
});