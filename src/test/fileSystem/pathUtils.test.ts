import { PathUtils } from '../../fileSystem';

describe('Testing ./src/fileSystem/pathUtils.js', () => {
    test('Testing getBasename()', () => {
        expect(PathUtils.getBasename('./path/to/file.xml')).toEqual('file.xml');
        expect(PathUtils.getBasename('./path/to/file.xml', '.xml')).toEqual('file');
        expect(PathUtils.getBasename('./path/to')).toEqual('to');
    });
    test('Testing getAbsolutePath()', () => {
        expect(PathUtils.getAbsolutePath('./')).toMatch('D:/Workspace/NodeJS/Aura Helper Framework/ah-core');
    });
    test('Testing getDirname()', () => {
        expect(PathUtils.getDirname('D:/Workspace/NodeJS/Aura Helper Framework/ah-core')).toMatch('D:/Workspace/NodeJS/Aura Helper Framework');
    });
    test('Testing getAuraHelperCLIAppPath()', () => {
        const result = PathUtils.getAuraHelperCLIAppPath();
        expect(result.length).toBeGreaterThanOrEqual(1);
    });
    test('Testing getAuraHelperCLITempFilesPath()', () => {
        expect(PathUtils.getAuraHelperCLITempFilesPath()).toMatch('/AuraHelperCLI/TempFiles');
    });
    test('Testing removeFileExtension()', () => {
        expect(PathUtils.removeFileExtension('fileWithExtension.css')).toMatch('fileWithExtension');
    });
});