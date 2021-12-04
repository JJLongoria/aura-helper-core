import { DirectoryNotFoundException } from '../../exceptions';

describe('Testing ./src/exceptions/directoryNotFoundException.js', () => {
    test('Testing instance()', () => {
        const ex = new DirectoryNotFoundException('folderPath');
        expect(ex.name).toMatch('DirectoryNotFoundException');
        expect(ex.message).toMatch('folderPath');
        const ex2 = new DirectoryNotFoundException('folderPath', 'folderName');
        expect(ex2.name).toMatch('DirectoryNotFoundException');
        expect(ex2.message).toMatch('folderPath');
    });
});