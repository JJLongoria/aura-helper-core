import { FileNotFoundException } from '../../exceptions';

describe('Testing ./src/exceptions/fileNotFoundException.js', () => {
    test('Testing instance()', () => {
        const ex = new FileNotFoundException('filePath');
        expect(ex.name).toMatch('FileNotFoundException');
        expect(ex.message).toMatch('filePath');
        const ex2 = new FileNotFoundException('filePath', 'fileName');
        expect(ex2.name).toMatch('FileNotFoundException');
        expect(ex2.message).toMatch('filePath');
    });
});