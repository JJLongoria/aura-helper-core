import { InvalidFilePathException } from '../../exceptions';

describe('Testing ./src/exceptions/invalidFilePathException.js', () => {
    test('Testing instance()', () => {
        const ex = new InvalidFilePathException('filePath');
        expect(ex.name).toMatch('InvalidFilePathException');
        expect(ex.message).toMatch('filePath');
        const ex2 = new InvalidFilePathException('filePath', 'fileName');
        expect(ex2.name).toMatch('InvalidFilePathException');
        expect(ex2.message).toMatch('filePath');
    });
});