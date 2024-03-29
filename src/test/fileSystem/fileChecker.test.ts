import { FileChecker } from '../../fileSystem';

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
    test('Testing isAuraHelperJS()', () => {
        expect(FileChecker.isAuraHelperJS('Helper.js')).toBeTruthy();
        expect(FileChecker.isAuraHelperJS('Helpers.js')).toBeFalsy();
    });
    test('Testing isAuraControllerJS()', () => {
        expect(FileChecker.isAuraControllerJS('Controller.js')).toBeTruthy();
        expect(FileChecker.isAuraControllerJS('Controllers.js')).toBeFalsy();
    });
    test('Testing isAuraDoc()', () => {
        expect(FileChecker.isAuraDoc('file.auradoc')).toBeTruthy();
        expect(FileChecker.isAuraDoc('file.auradocs')).toBeFalsy();
    });
    test('Testing isAuraComponent()', () => {
        expect(FileChecker.isAuraComponent('file.cmp')).toBeTruthy();
        expect(FileChecker.isAuraComponent('file.cmps')).toBeFalsy();
    });
    test('Testing isAuraApplication()', () => {
        expect(FileChecker.isAuraApplication('file.app')).toBeTruthy();
        expect(FileChecker.isAuraApplication('file.apps')).toBeFalsy();
    });
    test('Testing isAuraEvent()', () => {
        expect(FileChecker.isAuraEvent('file.evt')).toBeTruthy();
        expect(FileChecker.isAuraEvent('file.evts')).toBeFalsy();
    });
    test('Testing isAuraComponentFolder()', () => {
        expect(FileChecker.isAuraComponentFolder('folder/aura/')).toBeTruthy();
        expect(FileChecker.isAuraComponentFolder('folder\\aura\\')).toBeTruthy();
        expect(FileChecker.isAuraComponentFolder('folder/auras/')).toBeFalsy();
        expect(FileChecker.isAuraComponentFolder('folder\\auras\\')).toBeFalsy();
    });
    test('Testing isAuraFile()', () => {
        expect(FileChecker.isAuraFile('folder/aura/file.evt')).toBeTruthy();
        expect(FileChecker.isAuraFile('folder\\aura\\file.evt')).toBeTruthy();
        expect(FileChecker.isAuraFile('folder/aura/file.app')).toBeTruthy();
        expect(FileChecker.isAuraFile('folder\\aura\\file.app')).toBeTruthy();
        expect(FileChecker.isAuraFile('folder/aura/file.cmp')).toBeTruthy();
        expect(FileChecker.isAuraFile('folder\\aura\\file.cmp')).toBeTruthy();
        expect(FileChecker.isAuraFile('folder/aura/file.evts')).toBeFalsy();
        expect(FileChecker.isAuraFile('folder\\aura\\file.evts')).toBeFalsy();
        expect(FileChecker.isAuraFile('folder/aura/file.apps')).toBeFalsy();
        expect(FileChecker.isAuraFile('folder\\aura\\file.apps')).toBeFalsy();
        expect(FileChecker.isAuraFile('folder/aura/file.cmps')).toBeFalsy();
        expect(FileChecker.isAuraFile('folder\\aura\\file.cmps')).toBeFalsy();
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
        expect(FileChecker.isExists('./src/test')).toBeTruthy();
    });
    test('Testing isDirectory()', () => {
        expect(FileChecker.isDirectory('./src/test/assets')).toBeTruthy();
        expect(FileChecker.isDirectory('./src/test/assetste')).toBeFalsy();
        expect(FileChecker.isDirectory('./src/test/assets/describeSObject.json')).toBeFalsy();
    });
    test('Testing isFile()', () => {
        expect(FileChecker.isFile('./src/test/assets')).toBeFalsy();
        expect(FileChecker.isFile('./src/test/assetste')).toBeFalsy();
        expect(FileChecker.isFile('./src/test/assets/describeSObject.json')).toBeTruthy();
    });
    test('Testing isSFDXRootPath()', () => {
        expect(FileChecker.isSFDXRootPath('folder/permissionsets')).toBeFalsy();
        expect(FileChecker.isSFDXRootPath('./src/test/assets')).toBeTruthy();
    });
    test('Testing isSalesforceXML()', () => {
        expect(FileChecker.isSalesforceXML('folder/permissionsets')).toBeFalsy();
        expect(FileChecker.isSalesforceXML('./src/test/assets-meta.xml')).toBeTruthy();
    });
});