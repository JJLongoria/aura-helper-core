import { FileReader } from '../../fileSystem';
import { TextDocument } from '../../types/textDocument';

describe('Testing ./src/fileSystem/fileReader.js', () => {
    test('Testing readDocument()', () => {
        const document = new TextDocument('fileName', 'uri', [
            {
                text: 'textLine1',
                isEmptyOrWhitespace: false,
                lineNumber: 0,
            },
            {
                text: 'textLine2',
                isEmptyOrWhitespace: false,
                lineNumber: 1,
            },
            {
                text: 'textLine3',
                isEmptyOrWhitespace: false,
                lineNumber: 2,
            }
        ], 'string', 1); 
        const lines = FileReader.readDocument(document);
        expect(lines).toMatch('textLine1\ntextLine2\ntextLine3');
    });
    test('Testing readFileSync()', () => {
        const fileContent = FileReader.readFileSync('./src/test/assets/describeSObject.json');
        expect(fileContent).toMatch('Account');
    });
    test('Testing readFile()', async () => {
        FileReader.readFile('./src/test/assets/describeSObject.json', (_err, data) => {
            expect(data).toMatch('Account');
        });
    });
    test('Testing readDirSync()', () => {
        let files = FileReader.readDirSync('./src/test/assets');
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() with empty filters', () => {
        let files = FileReader.readDirSync('./src/test/assets', {});
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() only folders', () => {
        let files = FileReader.readDirSync('./src/test', {
            onlyFolders: true
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() only Files', () => {
        let files = FileReader.readDirSync('./src/test/assets', {
            onlyFolders: false,
            onlyFiles: true,
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() only Files with filter extensions', () => {
        let files = FileReader.readDirSync('./src/test/assets', {
            onlyFolders: false,
            onlyFiles: true,
            extensions: [
                '.json'
            ]
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() only Files with filter extensions and absolutePath', () => {
        let files = FileReader.readDirSync('./src/test/assets', {
            onlyFolders: false,
            onlyFiles: true,
            extensions: [
                '.json'
            ],
            absolutePath: true
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() filter extensions', () => {
        let files = FileReader.readDirSync('./src/test/assets', {
            onlyFolders: false,
            extensions: [
                '.json'
            ]
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() filter extensions and absolute path', () => {
        let files = FileReader.readDirSync('./src/test/assets', {
            onlyFolders: false,
            extensions: [
                '.json'
            ],
            absolutePath: true
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing getAllFiles()', async () => {
        let files = await FileReader.getAllFiles('./src/test');
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing getAllFiles() with Filters', async () => {
        let files = await FileReader.getAllFiles('./src/test', ['.json']);
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing getAllFiles() with Error', async () => {
        try{
            let files = await FileReader.getAllFiles('./src/testasdsa', ['.json']);
            expect(true).toBeFalsy();
        } catch(error){
            expect(error).toBeDefined();
        }   
    });
});