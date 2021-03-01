const FileChecker = require('../../../src/fileSystem/fileChecker');

describe('Testing ./src/fileSystem/fileChecker.js', () => {
    test('Testing isApexClass()', () => {
        expect(FileChecker.isApexClass('file.cls')).toBeTruthy();
        expect(FileChecker.isApexClass('file.clss')).toBeFalsy();
    });
    test('Testing isApexTrigger()', () => {
        expect(FileChecker.isApexTrigger('file.trigger')).toBeTruthy();
        expect(FileChecker.isApexTrigger('file.triggers')).toBeFalsy();
    });
    test('Testing isJavaScript()', () => {
        expect(FileChecker.isJavaScript('file.js')).toBeTruthy();
        expect(FileChecker.isJavaScript('file.jss')).toBeFalsy();
    });
    test('Testing isAuraDoc()', () => {
        expect(FileChecker.isAuraDoc('file.auradoc')).toBeTruthy();
        expect(FileChecker.isAuraDoc('file.auradocs')).toBeFalsy();
    });
    test('Testing isAuraComponent()', () => {
        expect(FileChecker.isAuraComponent('file.cmp')).toBeTruthy();
        expect(FileChecker.isAuraComponent('file.cmps')).toBeFalsy();
    });
    test('Testing isAuraComponentFolder()', () => {
        expect(FileChecker.isAuraComponentFolder('folder/aura/')).toBeTruthy();
        expect(FileChecker.isAuraComponentFolder('folder\\aura\\')).toBeTruthy();
        expect(FileChecker.isAuraComponentFolder('folder/auras/')).toBeFalsy();
        expect(FileChecker.isAuraComponentFolder('folder\\auras\\')).toBeFalsy();
    });
    test('Testing isProfile()', () => {
        expect(FileChecker.isProfile('file.profile-meta.xml')).toBeTruthy();
        expect(FileChecker.isProfile('file.profiles-meta.xml')).toBeFalsy();
    });
    test('Testing isPermissionSet()', () => {
        expect(FileChecker.isPermissionSet('file.permissionset-meta.xml')).toBeTruthy();
        expect(FileChecker.isPermissionSet('file.permissionsets-meta.xml')).toBeFalsy();
    });
    test('Testing isProfileFolder()', () => {
        expect(FileChecker.isProfileFolder('folder/profiles')).toBeTruthy();
        expect(FileChecker.isProfileFolder('folder\\profiles')).toBeTruthy();
        expect(FileChecker.isProfileFolder('folder/profiles/file')).toBeFalsy();
        expect(FileChecker.isProfileFolder('folder\\profiles\\file')).toBeFalsy();
    });
    test('Testing isPermissionSetFolder()', () => {
        expect(FileChecker.isPermissionSetFolder('folder/permissionsets')).toBeTruthy();
        expect(FileChecker.isPermissionSetFolder('folder\\permissionsets')).toBeTruthy();
        expect(FileChecker.isPermissionSetFolder('folder/permissionsets/file')).toBeFalsy();
        expect(FileChecker.isPermissionSetFolder('folder\\permissionsets\\file')).toBeFalsy();
    });
    test('Testing isExists()', () => {
        expect(FileChecker.isExists('folder/permissionsets')).toBeFalsy();
        expect(FileChecker.isExists('./test')).toBeTruthy();
    });
    test('Testing isSFDXRootPath()', () => {
        expect(FileChecker.isSFDXRootPath('folder/permissionsets')).toBeFalsy();
        expect(FileChecker.isSFDXRootPath('./test/assets')).toBeTruthy();
    });
});