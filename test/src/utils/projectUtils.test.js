const ProjectUtils = require('../../../src/utils/projectUtils');

describe('Testing ./src/utils/projectUtils.js', () => {
    test('Testing getProjectConfig()', () => {
        let projectConfig = ProjectUtils.getProjectConfig('./test');
        expect(projectConfig).toBeUndefined();
        projectConfig = ProjectUtils.getProjectConfig('./test/assets/SFDXProject');
        expect(projectConfig !== undefined).toBeTruthy();
        try{
            ProjectUtils.getProjectConfig({value:''});
        } catch(error){
            expect(error.message).toMatch('Wrong projectFolder path. Expect a folder path and receive');
        }
    });
    test('Testing getApiAsString()', () => {
        expect(ProjectUtils.getApiAsString(50)).toEqual('50.0');
        expect(ProjectUtils.getApiAsString(50.0)).toEqual('50.0');
        expect(ProjectUtils.getApiAsString(50.1)).toEqual('50.0');
        expect(ProjectUtils.getApiAsString('50')).toEqual('50.0');
        expect(ProjectUtils.getApiAsString('50.0')).toEqual('50.0');
        expect(ProjectUtils.getApiAsString('50.1')).toEqual('50.0');
        try{
            ProjectUtils.getApiAsString(true)
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get boolean. Value: true');
        }
        try{
            ProjectUtils.getApiAsString([])
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get object. Value: ');
        }
        try{
            ProjectUtils.getApiAsString({})
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get object. Value: [object Object]');
        }
        try{
            ProjectUtils.getApiAsString(undefined)
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get undefined. Value: undefined');
        }
        try{
            ProjectUtils.getApiAsString(null)
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get object. Value: null');
        }
    });
    test('Testing getApiAsNumber()', () => {
        expect(ProjectUtils.getApiAsNumber(50)).toEqual(50);
        expect(ProjectUtils.getApiAsNumber(50.0)).toEqual(50);
        expect(ProjectUtils.getApiAsNumber(50.1)).toEqual(50);
        expect(ProjectUtils.getApiAsNumber('50')).toEqual(50);
        expect(ProjectUtils.getApiAsNumber('50.0')).toEqual(50);
        expect(ProjectUtils.getApiAsNumber('50.1')).toEqual(50);
        try{
            ProjectUtils.getApiAsNumber(true)
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get boolean. Value: true');
        }
        try{
            ProjectUtils.getApiAsNumber([])
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get object. Value: ');
        }
        try{
            ProjectUtils.getApiAsNumber({})
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get object. Value: [object Object]');
        }
        try{
            ProjectUtils.getApiAsNumber(undefined)
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get undefined. Value: undefined');
        }
        try{
            ProjectUtils.getApiAsNumber(null)
        } catch(error){
            expect(error.message).toMatch('Wrong API Version Datatype. Expect string or number but get object. Value: null');
        }
    });
    test('Testing getOrgAlias()', () => {
        expect(ProjectUtils.getOrgAlias('./test/assets/SFDXProject')).toEqual('MyORG');
    });
    test('Testing getOrgNamespace()', () => {
        expect(ProjectUtils.getOrgNamespace('./test/assets/SFDXProject')).toEqual('');
    });
    test('Testing getLastVersion()', () => {
        expect(ProjectUtils.getLastVersion([
            {
                version: '1',
            },
            {
                version: '2',
            },
            {
                version: '3',
            }
        ])).toEqual(3);
    });
    test('Testing getOrgAvailableVersions()', () => {
        ProjectUtils.getOrgAvailableVersions('https://test.salesforce.com');
    });
});