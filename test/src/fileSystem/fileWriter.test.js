const FileWriter = require('../../../src/fileSystem/fileWriter');

describe('Testing ./src/fileSystem/fileWriter.js', () => {
    test('Testing createFile()', async (done) => {
        FileWriter.createFile('./test/assets/testWriteFile.txt', 'file content', (path, error) => {
            expect(path).toMatch('./test/assets/testWriteFile.txt');
            done();
        });
    });
    test('Testing createFileSync()', () => {
        FileWriter.createFileSync('./test/assets/testWriteFile.txt', 'file content');
    });
    test('Testing createFolderSync()', () => {
        FileWriter.createFolderSync('./test/assets/folderToCreate/subFolder');
        FileWriter.delete('./test/assets/folderToCreate/subFolder');
    });
    test('Testing copyFile()', async (done) => {
        FileWriter.copyFile('./test/assets/testWriteFile.txt', './test/assets/testWriteFileCopy.txt', () => {
            done();
        });
    });
    test('Testing copyFileSync()', () => {
        FileWriter.copyFileSync('./test/assets/testWriteFile.txt', './test/assets/testWriteFileCopy.txt');
    });
    test('Testing unzip()', async (done) => {
        FileWriter.unzip('./test/assets/testZip.zip', './test/assets/folderToCreate/subFolder', () => {
            done();
        });
    });
    test('Testing delete()', () => {
        FileWriter.delete('./test/assets/testWriteFile.txt');
        FileWriter.delete('./test/assets/testWriteFileCopy.txt');
        FileWriter.delete('./test/assets/folderToCreate');
    });
});