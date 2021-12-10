import { FileWriter } from '../../fileSystem';

describe('Testing ./src/fileSystem/fileWriter.js', () => {
    test('Testing createFile()', (done) => {
        FileWriter.createFile('./src/test/assets/testWriteFile.txt', 'file content', (_error) => {
            expect(_error).toBeNull();
            done();
        });
    });
    test('Testing createFile() With error', (done) => {
        FileWriter.createFile('./src/test/assetsss/testWriteFile.txt', 'file content', (error) => {
            expect(error).toBeDefined();
            done();
        });
    });
    test('Testing createFile() without callback', () => {
        FileWriter.createFile('./src/test/assetsss/testWriteFile.txt', 'file content');
    });
    test('Testing createFileSync()', () => {
        FileWriter.createFileSync('./src/test/assets/testWriteFile.txt', 'file content');
    });
    test('Testing createFolderSync()', () => {
        FileWriter.createFolderSync('./src/test/assets/folderToCreate/subFolder');
        FileWriter.delete('./src/test/assets/folderToCreate/subFolder');
    });
    test('Testing copyFileSync()', () => {
        FileWriter.copyFileSync('./src/test/assets/testWriteFile.txt', './src/test/assets/testWriteFileCopy.txt');
    });
    test('Testing copyFile()', (done) => {
        FileWriter.copyFile('./src/test/assets/testWriteFile.txt', './src/test/assets/testWriteFileCopy.txt', () => {
            done();
        });
    });
    test('Testing copyFolderSync()', () => {
        FileWriter.copyFolderSync('./src/test/assets/packages', './src/test/assets/packagesCopy', true);
    });
    test('Testing copyFolder()', (done) => {
        FileWriter.copyFolder('./src/test/assets/packages', './src/test/assets/packagesCopy', true, () => {
            done();
        });
    });
    test('Testing unzip()', (done) => {
        FileWriter.unzip('./src/test/assets/testZip.zip', './src/test/assets/folderToCreate/subFolder', () => {
            FileWriter.delete('./src/test/assets/folderToCreate/subFolder');
            done();
        });
    });
    test('Testing unzip() without callback', (done) => {
        FileWriter.createFolderSync('./src/test/assets/folderToCreate/subFolder');
        FileWriter.unzip('./src/test/assets/testZip.zip', './src/test/assets/folderToCreate/subFolder', () => {
            done();
        });
    });
    test('Testing delete()', () => {
        FileWriter.delete('./src/test/assets/testWriteFile.txt');
        FileWriter.delete('./src/test/assets/testWriteFileCopy.txt');
        FileWriter.delete('./src/test/assets/folderToCreate');
        FileWriter.delete('./src/test/assets/packagesCopy');
    });
    test('Testing delete() with not exists folder', () => {
        FileWriter.delete('./src/test/assetsss');
    });
});