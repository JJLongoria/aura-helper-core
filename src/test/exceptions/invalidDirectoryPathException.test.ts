import { InvalidDirectoryPathException } from '../../exceptions';

describe('Testing ./src/exceptions/invalidDirectoryPathException.js', () => {
    test('Testing instance()', () => {
        const ex = new InvalidDirectoryPathException('folderPath');
        expect(ex.name).toMatch('InvalidDirectoryPathException');
        expect(ex.message).toMatch('folderPath');
        const ex2 = new InvalidDirectoryPathException('folderPath', 'folderName');
        expect(ex2.name).toMatch('InvalidDirectoryPathException');
        expect(ex2.message).toMatch('folderPath');
    });
});