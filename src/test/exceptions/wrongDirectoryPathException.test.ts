import { WrongDirectoryPathException } from '../../exceptions';

describe('Testing ./src/exceptions/wrongDirectoryPathException.js', () => {
    test('Testing instance()', () => {
        const ex = new WrongDirectoryPathException('message');
        expect(ex.name).toMatch('WrongDirectoryPathException');
        expect(ex.message).toMatch('message');
    });
});