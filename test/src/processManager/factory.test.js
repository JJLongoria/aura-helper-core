const ProcessFactory = require('../../../src/processManager/factory');

describe('Testing ./src/process/factory.js', () => {
    test('Testing listAuthOurgs()', () => {
        const process = ProcessFactory.listAuthOurgs();
        expect(process.name).toEqual('force:auth:list');
    });
    test('Testing listMetadataTypes()', () => {
        const process = ProcessFactory.listMetadataTypes('MyOrg', '50.0');
        expect(process.name).toEqual('force:mdapi:describemetadata');
        try{
            ProcessFactory.listMetadataTypes(undefined, '50.0');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        
    });
    test('Testing describeMetadataType()', () => {
        const process = ProcessFactory.describeMetadataType('MyOrg', 'Report', 'unfiled$public', '50.0');
        expect(process.name).toEqual('force:mdapi:listmetadata-Report');
        try{
            ProcessFactory.describeMetadataType(undefined, 'Report', 'unfiled$public', '50.0');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.describeMetadataType('MyOrg', undefined, 'unfiled$public', '50.0');
        } catch(error){
            expect(error.message).toMatch('metadataType is Required.');
        }
    });
    test('Testing listSObjects()', () => {
        const process = ProcessFactory.listSObjects('MyOrg', undefined, '50.0');
        expect(process.name).toEqual('force:schema:sobject:list');
        try{
            ProcessFactory.listSObjects(undefined, undefined, '50.0');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
    });
    test('Testing getSObjectSchema()', () => {
        const process = ProcessFactory.getSObjectSchema('MyOrg', 'CustomObject', '50.0');
        expect(process.name).toEqual('force:schema:sobject:describe-CustomObject');
        try{
            ProcessFactory.getSObjectSchema(undefined, undefined, '50.0');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.getSObjectSchema('MyOrg', undefined, '50.0');
        } catch(error){
            expect(error.message).toMatch('sObject is Required.');
        }
    });
    test('Testing sourceRetrievePackage()', () => {
        const process = ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', '50.0', './');
        expect(process.name).toEqual('force:source:retrieve-package');
        try{
            ProcessFactory.sourceRetrievePackage(undefined, undefined, '50.0', './');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.sourceRetrievePackage('MyOrg', undefined, '50.0', './');
        } catch(error){
            expect(error.message).toMatch('packageFile is Required.');
        }
        try{
            ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', '50.0', undefined);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing sourceValidatePackage()', () => {
        const process = ProcessFactory.sourceValidatePackage('MyOrg', 'runLocalTest', 'ApexClassName', './manifest/package.xml', '50.0', './');
        expect(process.name).toEqual('force:source:deploy-validatePackage');
        try{
            ProcessFactory.sourceValidatePackage(undefined, './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', './');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.sourceValidatePackage('MyOrg', undefined, 'runLocalTest', 'ApexClassName', '50.0', './');
        } catch(error){
            expect(error.message).toMatch('packageFile is Required.');
        }
        try{
            ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', undefined);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing sourceDeployPackage()', () => {
        const process = ProcessFactory.sourceDeployPackage('MyOrg', 'runLocalTest', 'ApexClassName', './manifest/package.xml', '50.0', './');
        expect(process.name).toEqual('force:source:deploy-package');
        try{
            ProcessFactory.sourceValidatePackage(undefined, './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', './');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.sourceValidatePackage('MyOrg', undefined, 'runLocalTest', 'ApexClassName', '50.0', './');
        } catch(error){
            expect(error.message).toMatch('packageFile is Required.');
        }
        try{
            ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', undefined);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing sourceQuickDeploy()', () => {
        const process = ProcessFactory.sourceQuickDeploy('MyOrg', 'deployId', '50.0', './');
        expect(process.name).toEqual('force:source:deploy-quick');
        try{
            ProcessFactory.sourceQuickDeploy(undefined, 'deployId', '50.0', './');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.sourceQuickDeploy('MyOrg', undefined, '50.0', './');
        } catch(error){
            expect(error.message).toMatch('deployId is Required.');
        }
        try{
            ProcessFactory.sourceQuickDeploy('MyOrg', 'deployId', '50.0', undefined);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing sourceCancelDeploy()', () => {
        const process = ProcessFactory.sourceCancelDeploy('MyOrg', 'deployId', '1');
        expect(process.name).toEqual('force:source:deploy:cancel');
        try{
            ProcessFactory.sourceCancelDeploy(undefined, 'deployId', '1');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.sourceCancelDeploy('MyOrg', undefined, '1');
        } catch(error){
            expect(error.message).toMatch('deployId is Required.');
        }
    });
    test('Testing sourceDeployReport()', () => {
        const process = ProcessFactory.sourceDeployReport('MyOrg', 'deployId', '50.0');
        expect(process.name).toEqual('force:source:deploy:report');
        try{
            ProcessFactory.sourceDeployReport(undefined, 'deployId');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.sourceDeployReport('MyOrg', undefined);
        } catch(error){
            expect(error.message).toMatch('deployId is Required.');
        }
    });
    test('Testing mdapiRetrievePackage()', () => {
        const process = ProcessFactory.mdapiRetrievePackage('MyOrg', './manifest/package.xml', '50.0', 'target/dir', './');
        expect(process.name).toEqual('force:mdapi:retrieve-package');
        try{
            ProcessFactory.mdapiRetrievePackage(undefined, './manifest/package.xml', '50.0', 'target/dir', './');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.mdapiRetrievePackage('MyOrg', undefined, '50.0', 'target/dir', './');
        } catch(error){
            expect(error.message).toMatch('packageFolder is Required.');
        }
        try{
            ProcessFactory.mdapiRetrievePackage('MyOrg', './manifest/package.xml', '50.0', 'target/dir', undefined);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing mdapiValidatePackage()', () => {
        const process = ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', './');
        expect(process.name).toEqual('force:mdapi:deploy-validatePackage');
        try{
            ProcessFactory.mdapiValidatePackage(undefined, './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', './');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.mdapiValidatePackage('MyOrg', undefined, 'runLocalTest', 'ApexClassName', '50.0', './');
        } catch(error){
            expect(error.message).toMatch('packageFolder is Required.');
        }
        try{
            ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', undefined);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing mdapiDeployPackage()', () => {
        const process = ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', './');
        expect(process.name).toEqual('force:mdapi:deploy-package');
        try{
            ProcessFactory.mdapiDeployPackage(undefined, './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', './');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.mdapiDeployPackage('MyOrg', undefined, 'runLocalTest', 'ApexClassName', '50.0', './');
        } catch(error){
            expect(error.message).toMatch('packageFolder is Required.');
        }
        try{
            ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', 'runLocalTest', 'ApexClassName', '50.0', undefined);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing mdapiQuickDeploy()', () => {
        const process = ProcessFactory.mdapiQuickDeploy('MyOrg', 'deployId', '50.0');
        expect(process.name).toEqual('force:mdapi:deploy-quick');
        try{
            ProcessFactory.mdapiQuickDeploy(undefined, 'deployId');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.mdapiQuickDeploy('MyOrg', undefined);
        } catch(error){
            expect(error.message).toMatch('deployId is Required.');
        }
    });
    test('Testing mdapiRetrieveReport()', () => {
        const process = ProcessFactory.mdapiRetrieveReport('MyOrg', 'retrieveId', 'targetDir');
        expect(process.name).toEqual('force:mdapi:retrieve:report');
        try{
            ProcessFactory.mdapiRetrieveReport(undefined, 'deployId', 'targetDir');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.mdapiRetrieveReport('MyOrg', undefined, 'targetDir');
        } catch(error){
            expect(error.message).toMatch('retrieveId is Required.');
        }
        try{
            ProcessFactory.mdapiRetrieveReport('MyOrg', 'retrieveId', undefined);
        } catch(error){
            expect(error.message).toMatch('targetDir is Required.');
        }
    });
    test('Testing mdapiDeployReport()', () => {
        const process = ProcessFactory.mdapiDeployReport('MyOrg', 'deployId');
        expect(process.name).toEqual('force:mdapi:deploy:report');
        try{
            ProcessFactory.mdapiDeployReport(undefined, 'deployId');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.mdapiDeployReport('MyOrg', undefined);
        } catch(error){
            expect(error.message).toMatch('deployId is Required.');
        }
    });
    test('Testing mdapiCancelDeploy()', () => {
        const process = ProcessFactory.mdapiCancelDeploy('MyOrg', 'deployId');
        expect(process.name).toEqual('mdapi:deploy:cancel');
        try{
            ProcessFactory.mdapiCancelDeploy(undefined, 'deployId');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.mdapiCancelDeploy('MyOrg', undefined);
        } catch(error){
            expect(error.message).toMatch('deployId is Required.');
        }
    });
    test('Testing query()', () => {
        const process = ProcessFactory.query('MyOrg', 'Select Id from Account', true);
        expect(process.name).toEqual('force:data:soql:query-Select Id from Account');
        try{
            ProcessFactory.query(undefined, 'deployId');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.query('MyOrg', undefined);
        } catch(error){
            expect(error.message).toMatch('query is Required.');
        }
    });
    test('Testing convertToSFDX()', () => {
        const process = ProcessFactory.convertToSFDX('./manifest', './manifest/package.xml', '../convertedProject', '50.0');
        expect(process.name).toEqual('force:mdapi:convert');
        try{
            ProcessFactory.convertToSFDX(undefined, './manifest/package.xml', '../convertedProject', '50.0');
        } catch(error){
            expect(error.message).toMatch('packageFolder is Required.');
        }
        try{
            ProcessFactory.convertToSFDX('./manifest', undefined, '../convertedProject', '50.0');
        } catch(error){
            expect(error.message).toMatch('packageFile is Required.');
        }
        try{
            ProcessFactory.convertToSFDX('./manifest', './manifest/package.xml', undefined, '50.0');
        } catch(error){
            expect(error.message).toMatch('targetFolder is Required.');
        }
    });
    test('Testing convertToMetadataAPI()', () => {
        const process = ProcessFactory.convertToMetadataAPI('./manifest/package.xml', '../convertedProject', './');
        expect(process.name).toEqual('force:source:convert');
        try{
            ProcessFactory.convertToMetadataAPI(undefined, '../convertedProject', './');
        } catch(error){
            expect(error.message).toMatch('packageFile is Required.');
        }
        try{
            ProcessFactory.convertToMetadataAPI('./manifest/package.xml', undefined, './');
        } catch(error){
            expect(error.message).toMatch('targetFolder is Required.');
        }
        try{
            ProcessFactory.convertToMetadataAPI('./manifest/package.xml', '../convertedProject', undefined);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing createSFDXProject()', () => {
        const process = ProcessFactory.createSFDXProject('MyOrg', './', 'empty', 'acn', true);
        expect(process.name).toEqual('force:project:create-MyOrg');
        try{
            ProcessFactory.createSFDXProject(undefined, './', 'empty', 'acn', true);
        } catch(error){
            expect(error.message).toMatch('projectName is Required.');
        }
        try{
            ProcessFactory.createSFDXProject('MyOrg', undefined, 'empty', 'acn', true);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing setAuthOrg()', () => {
        const process = ProcessFactory.setAuthOrg('MyOrg', './');
        expect(process.name).toEqual('force:config:set-defaultusername');
        try{
            ProcessFactory.setAuthOrg(undefined, './');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.setAuthOrg('MyOrg', undefined);
        } catch(error){
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing exportTreeData()', () => {
        const process = ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', 'prefix', './exported');
        expect(process.name).toEqual('force:data:tree:export-Select Id from Account');
        try{
            ProcessFactory.exportTreeData(undefined, 'Select Id from Account', 'prefix', './exported');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.exportTreeData('MyOrg', undefined, 'prefix', './exported');
        } catch(error){
            expect(error.message).toMatch('query is Required.');
        }
        try{
            ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', 'prefix', undefined);
        } catch(error){
            expect(error.message).toMatch('outputPath is Required.');
        }
    });
    test('Testing importTreeData()', () => {
        const process = ProcessFactory.importTreeData('MyOrg', './exported.json');
        expect(process.name).toEqual('force:data:tree:import-./exported.json');
        try{
            ProcessFactory.importTreeData(undefined, './exported.json');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.importTreeData('MyOrg', undefined);
        } catch(error){
            expect(error.message).toMatch('file is Required.');
        }
    });
    test('Testing bulkDelete()', () => {
        const process = ProcessFactory.bulkDelete('MyOrg', './dataToDelete.csv', 'CustomObject');
        expect(process.name).toEqual('force:data:bulk:delete-CustomObject');
        try{
            ProcessFactory.bulkDelete(undefined, './dataToDelete.csv', 'CustomObject');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.bulkDelete('MyOrg', undefined, 'CustomObject');
        } catch(error){
            expect(error.message).toMatch('csvFile is Required.');
        }
        try{
            ProcessFactory.bulkDelete('MyOrg', './dataToDelete.csv', undefined);
        } catch(error){
            expect(error.message).toMatch('sobject is Required.');
        }
    });
    test('Testing executeApexAnonymous()', () => {
        const process = ProcessFactory.executeApexAnonymous('MyOrg', './scriptFile.apex');
        expect(process.name).toEqual('force:apex:execute-./scriptFile.apex');
        try{
            ProcessFactory.executeApexAnonymous(undefined, './scriptFile.apex');
        } catch(error){
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try{
            ProcessFactory.executeApexAnonymous('MyOrg', undefined);
        } catch(error){
            expect(error.message).toMatch('scriptFile is Required.');
        }
    });
});