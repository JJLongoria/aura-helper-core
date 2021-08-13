const FileReader = require('../../../src/fileSystem/fileReader');

describe('Testing ./src/fileSystem/fileReader.js', () => {
    test('Testing readDocument()', () => {
        const document = {
            lines: [
                {
                    text: 'textLine1',
                },
                {
                    text: 'textLine2',
                },
                {
                    text: 'textLine3',
                }
            ],
            lineCount: 3,
            lineAt: function(index) {
                return this.lines[index];
            }
        };
        const lines = FileReader.readDocument(document);
        expect(lines).toMatch('textLine1\ntextLine2\ntextLine3');
    });
    test('Testing readFileSync()', () => {
        const fileContent = FileReader.readFileSync('./test/assets/describeSObject.json');
        expect(fileContent).toMatch('Account');
    });
    test('Testing readFile()', async (done) => {
        FileReader.readFile('./test/assets/describeSObject.json', (err, data) => {
            expect(data).toMatch('Account');
            done();
        });
    });
    test('Testing readDirSync()', () => {
        let files = FileReader.readDirSync('./test/assets');
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() with empty filters', () => {
        let files = FileReader.readDirSync('./test/assets', {});
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() only folders', () => {
        let files = FileReader.readDirSync('./test', {
            onlyFolders: true
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() only Files', () => {
        let files = FileReader.readDirSync('./test/assets', {
            onlyFolders: false,
            onlyFiles: true,
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() only Files with filter extensions', () => {
        let files = FileReader.readDirSync('./test/assets', {
            onlyFolders: false,
            onlyFiles: true,
            extensions: [
                '.json'
            ]
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing readDirSync() filter extensions', () => {
        let files = FileReader.readDirSync('./test/assets', {
            onlyFolders: false,
            extensions: [
                '.json'
            ]
        });
        expect(files.length).toBeGreaterThan(0);
    });
    test('Testing getAllFiles()', async (done) => {
        let files = await FileReader.getAllFiles('./test');
        expect(files.length).toBeGreaterThan(0);
        done();
    });
    test('Testing getAllFiles() with Filters', async (done) => {
        let files = await FileReader.getAllFiles('./test', ['.json']);
        expect(files.length).toBeGreaterThan(0);
        done();
    });
    test('Testing getAllFiles() with Error', async (done) => {
        try{
            let files = await FileReader.getAllFiles('./testasdsa', ['.json']);
            expect(true).toBeFalsy();
        } catch(error){
            expect(error).toBeDefined();
        }   
        done();
    });
});