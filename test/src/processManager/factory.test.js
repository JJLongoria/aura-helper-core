const ProcessFactory = require('../../../src/processManager/factory');

describe('Testing ./src/process/factory.js', () => {
    test('Testing listAuthOurgs()', () => {
        const process = ProcessFactory.listAuthOurgs();
        expect(process.name).toEqual('force:auth:list');
    });
    test('Testing listMetadataTypes()', () => {
        const process = ProcessFactory.listMetadataTypes('MyOrg', '50.0');
        expect(process.name).toEqual('force:mdapi:describemetadata');
    });
    test('Testing describeMetadataType()', () => {
        const process = ProcessFactory.describeMetadataType('MyOrg', 'Report', 'unfiled$public', '50.0');
        expect(process.name).toEqual('force:mdapi:listmetadata-Report');
    });
    test('Testing listSObjects()', () => {
        const process = ProcessFactory.listSObjects('MyOrg', undefined, '50.0');
        expect(process.name).toEqual('force:schema:sobject:list');
    });
    test('Testing getSObjectSchema()', () => {
        const process = ProcessFactory.getSObjectSchema('MyOrg', 'CustomObject', '50.0');
        expect(process.name).toEqual('force:schema:sobject:describe-CustomObject');
    });
    test('Testing sourceRetrievePackage()', () => {
        const process = ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', '50.0', './');
        expect(process.name).toEqual('force:source:retrieve-package');
    });
    test('Testing sourceValidatePackage()', () => {
        const process = ProcessFactory.sourceValidatePackage('MyOrg', 'runLocalTest', 'ApexClassName', './manifest/package.xml', '50.0', './');
        expect(process.name).toEqual('force:source:deploy-validatePackage');
    });
    test('Testing sourceDeployPackage()', () => {
        const process = ProcessFactory.sourceDeployPackage('MyOrg', 'runLocalTest', 'ApexClassName', './manifest/package.xml', '50.0', './');
        expect(process.name).toEqual('force:source:deploy-package');
    });
    test('Testing sourceQuickDeploy()', () => {
        const process = ProcessFactory.sourceQuickDeploy('MyOrg', 'deployId', '50.0');
        expect(process.name).toEqual('force:source:deploy-quick');
    });
    test('Testing sourceCancelDeploy()', () => {
        const process = ProcessFactory.sourceCancelDeploy('MyOrg', 'deployId', '1');
        expect(process.name).toEqual('force:source:deploy:cancel');
    });
    test('Testing sourceDeployReport()', () => {
        const process = ProcessFactory.sourceDeployReport('MyOrg', 'deployId', '50.0');
        expect(process.name).toEqual('force:source:deploy:report');
    });
    test('Testing mdapiRetrievePackage()', () => {
        const process = ProcessFactory.mdapiRetrievePackage('MyOrg', './manifest/package.xml', '50.0', './');
        expect(process.name).toEqual('force:mdapi:retrieve-package');
    });
    test('Testing mdapiValidatePackage()', () => {
        const process = ProcessFactory.mdapiValidatePackage('MyOrg', 'runLocalTest', 'ApexClassName', './manifest/package.xml', '50.0', './');
        expect(process.name).toEqual('force:mdapi:deploy-validatePackage');
    });
    test('Testing mdapiDeployPackage()', () => {
        const process = ProcessFactory.mdapiDeployPackage('MyOrg', 'runLocalTest', 'ApexClassName', './manifest/package.xml', '50.0', './');
        expect(process.name).toEqual('force:mdapi:deploy-package');
    });
    test('Testing mdapiQuickDeploy()', () => {
        const process = ProcessFactory.mdapiQuickDeploy('MyOrg', 'deployId', '50.0');
        expect(process.name).toEqual('force:mdapi:deploy-quick');
    });
    test('Testing mdapiRetrieveReport()', () => {
        const process = ProcessFactory.mdapiRetrieveReport('MyOrg', 'retrieveId');
        expect(process.name).toEqual('force:mdapi:retrieve:report');
    });
    test('Testing mdapiDeployReport()', () => {
        const process = ProcessFactory.mdapiDeployReport('MyOrg', 'deployId');
        expect(process.name).toEqual('force:mdapi:deploy:report');
    });
    test('Testing mdapiCancelDeploy()', () => {
        const process = ProcessFactory.mdapiCancelDeploy('MyOrg', 'deployId');
        expect(process.name).toEqual('mdapi:deploy:cancel');
    });
    test('Testing query()', () => {
        const process = ProcessFactory.query('MyOrg', 'Select Id from Account', true);
        expect(process.name).toEqual('force:data:soql:query-Select Id from Account');
    });
    test('Testing convertToSFDX()', () => {
        const process = ProcessFactory.convertToSFDX('./manifest', './manifest/package.xml', '../convertedProject', '50.0');
        expect(process.name).toEqual('force:mdapi:convert');
    });
    test('Testing convertToMetadataAPI()', () => {
        const process = ProcessFactory.convertToMetadataAPI('./manifest/package.xml', '../convertedProject', '50.0');
        expect(process.name).toEqual('force:source:convert');
    });
    test('Testing createSFDXProject()', () => {
        const process = ProcessFactory.createSFDXProject('MyOrg', './', 'empty', 'acn', true);
        expect(process.name).toEqual('force:project:create-MyOrg');
    });
    test('Testing setAuthOrg()', () => {
        const process = ProcessFactory.setAuthOrg('MyOrg', './');
        expect(process.name).toEqual('force:config:set-defaultusername');
    });
    test('Testing exportTreeData()', () => {
        const process = ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', 'prefix', './exported');
        expect(process.name).toEqual('force:data:tree:export-Select Id from Account');
    });
    test('Testing importTreeData()', () => {
        const process = ProcessFactory.importTreeData('MyOrg', './exported.json', './');
        expect(process.name).toEqual('force:data:tree:import-./exported.json');
    });
    test('Testing bulkDelete()', () => {
        const process = ProcessFactory.bulkDelete('MyOrg', './dataToDelete.csv', 'CustomObject', './');
        expect(process.name).toEqual('force:data:bulk:delete-CustomObject');
    });
    test('Testing executeApexAnonymous()', () => {
        const process = ProcessFactory.executeApexAnonymous('MyOrg', './scriptFile.apex', './');
        expect(process.name).toEqual('force:apex:execute-./scriptFile.apex');
    });
});