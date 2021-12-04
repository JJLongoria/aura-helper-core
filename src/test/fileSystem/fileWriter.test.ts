import { FileWriter } from '../../fileSystem';

describe('Testing ./src/fileSystem/fileWriter.js', () => {
    test('Testing createFile()', async () => {
        FileWriter.createFile('./src/test/assets/testWriteFile.txt', 'file content', (path, _error) => {
            expect(path).toMatch('./src/test/assets/testWriteFile.txt');
        });
    });
    test('Testing createFile() With error', async () => {
        FileWriter.createFile('./src/test/assetsss/testWriteFile.txt', 'file content', (_path, error) => {
            expect(error).toBeDefined();
        });
    });
    test('Testing createFile() without callback', async () => {
        FileWriter.createFile('./src/test/assetsss/testWriteFile.txt', 'file content');
    });
    test('Testing createFileSync()', () => {
        FileWriter.createFileSync('./src/test/assets/testWriteFile.txt', 'file content');
    });
    test('Testing createFolderSync()', () => {
        FileWriter.createFolderSync('./src/test/assets/folderToCreate/subFolder');
        FileWriter.delete('./src/test/assets/folderToCreate/subFolder');
    });
    test('Testing copyFile()', async () => {
        FileWriter.copyFile('./src/test/assets/testWriteFile.txt', './src/test/assets/testWriteFileCopy.txt', () => {
        });
    });
    test('Testing copyFileSync()', () => {
        FileWriter.copyFileSync('./src/test/assets/testWriteFile.txt', './src/test/assets/testWriteFileCopy.txt');
    });
    test('Testing copyFolder()', async () => {
        FileWriter.copyFolder('./src/test/assets/packages', './src/test/assets/packagesCopy', true, () => {
        });
    });
    test('Testing copyFolderSync()', () => {
        FileWriter.copyFolderSync('./src/test/assets/packages', './src/test/assets/packagesCopy', true);
    });
    test('Testing unzip()', async () => {
        FileWriter.unzip('./src/test/assets/testZip.zip', './src/test/assets/folderToCreate/subFolder', () => {
            FileWriter.delete('./src/test/assets/folderToCreate/subFolder');
        });
    });
    test('Testing unzip() without callback', async () => {
        FileWriter.createFolderSync('./src/test/assets/folderToCreate/subFolder');
        FileWriter.unzip('./src/test/assets/testZip.zip', './src/test/assets/folderToCreate/subFolder', () => {
            
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