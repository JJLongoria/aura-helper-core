import { ProjectUtils } from "../../utils";

describe('Testing ./src/utils/projectUtils.js', () => {
    test('Testing getProjectConfig()', () => {
        let projectConfig = ProjectUtils.getProjectConfig('./src/test');
        expect(projectConfig).toBeUndefined();
        projectConfig = ProjectUtils.getProjectConfig('./src/test/assets/SFDXProject');
        expect(projectConfig !== undefined).toBeTruthy();
    });
    test('Testing getApiAsString()', () => {
        expect(ProjectUtils.getApiAsString(50)).toEqual('50.0');
        expect(ProjectUtils.getApiAsString(50.0)).toEqual('50.0');
        expect(ProjectUtils.getApiAsString(50.1)).toEqual('50.0');
        expect(ProjectUtils.getApiAsString('50')).toEqual('50.0');
        expect(ProjectUtils.getApiAsString('50.0')).toEqual('50.0');
        expect(ProjectUtils.getApiAsString('50.1')).toEqual('50.0');
    });
    test('Testing getApiAsNumber()', () => {
        expect(ProjectUtils.getApiAsNumber(50)).toEqual(50);
        expect(ProjectUtils.getApiAsNumber(50.0)).toEqual(50);
        expect(ProjectUtils.getApiAsNumber(50.1)).toEqual(50);
        expect(ProjectUtils.getApiAsNumber('50')).toEqual(50);
        expect(ProjectUtils.getApiAsNumber('50.0')).toEqual(50);
        expect(ProjectUtils.getApiAsNumber('50.1')).toEqual(50);
    });
    test('Testing getOrgAlias()', () => {
        expect(ProjectUtils.getOrgAlias('./src/test/assets/SFDXProject')).toEqual('MyORG');
        expect(ProjectUtils.getOrgAlias('./src/test/assets')).toEqual(undefined);
    });
    test('Testing getOrgNamespace()', () => {
        expect(ProjectUtils.getOrgNamespace('./src/test/assets/SFDXProject')).toEqual('');
        expect(ProjectUtils.getOrgNamespace('./src/test/assets')).toEqual('');
    });
    test('Testing getLastVersion()', () => {
        expect(ProjectUtils.getLastVersion([
            {
                version: '1',
                label: "veersion",
                url: "",
            },
            {
                version: '2',
                label: "veersion",
                url: "",
            },
            {
                version: '3',
                label: "veersion",
                url: "",
            }
        ])).toEqual(3);
        expect(ProjectUtils.getLastVersion([])).toEqual(undefined);
    });
    test('Testing getOrgAvailableVersions()', () => {
        ProjectUtils.getOrgAvailableVersions('https://jjlongoria-dev-ed.my.salesforce.com');
    });
});