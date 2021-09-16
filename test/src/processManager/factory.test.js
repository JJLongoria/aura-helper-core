const ProcessFactory = require('../../../src/processManager/factory');

describe('Testing ./src/process/factory.js', () => {
    test('Testing updateNPM()', () => {
        const process = ProcessFactory.updateNPM();
        expect(process.name).toEqual('npm-install');
    });
    test('Testing listAuthOurgs()', () => {
        const process = ProcessFactory.listAuthOurgs();
        expect(process.name).toEqual('force:auth:list');
    });
    test('Testing listMetadataTypes()', () => {
        const process = ProcessFactory.listMetadataTypes('MyOrg', '50.0');
        expect(process.name).toEqual('force:mdapi:describemetadata');
        ProcessFactory.listMetadataTypes('MyOrg');
        try {
            ProcessFactory.listMetadataTypes(undefined, '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }

    });
    test('Testing describeMetadataType()', () => {
        const process = ProcessFactory.describeMetadataType('MyOrg', 'Report', 'unfiled$public', '50.0');
        expect(process.name).toEqual('force:mdapi:listmetadata-Report');
        ProcessFactory.describeMetadataType('MyOrg', 'Report', 'unfiled$public');
        ProcessFactory.describeMetadataType('MyOrg', 'CustomObject');
        try {
            ProcessFactory.describeMetadataType(undefined, 'Report', 'unfiled$public', '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.describeMetadataType('MyOrg', undefined, 'unfiled$public', '50.0');
        } catch (error) {
            expect(error.message).toMatch('metadataType is Required.');
        }
    });
    test('Testing listSObjects()', () => {
        const process = ProcessFactory.listSObjects('MyOrg', undefined, '50.0');
        expect(process.name).toEqual('force:schema:sobject:list');
        ProcessFactory.listSObjects('MyOrg', 'Custom', '50.0');
        ProcessFactory.listSObjects('MyOrg', 'Custom');
        try {
            ProcessFactory.listSObjects(undefined, undefined, '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
    });
    test('Testing getSObjectSchema()', () => {
        const process = ProcessFactory.getSObjectSchema('MyOrg', 'CustomObject', '50.0');
        ProcessFactory.getSObjectSchema('MyOrg', 'CustomObject');
        expect(process.name).toEqual('force:schema:sobject:describe-CustomObject');
        try {
            ProcessFactory.getSObjectSchema(undefined, undefined, '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.getSObjectSchema('MyOrg', undefined, '50.0');
        } catch (error) {
            expect(error.message).toMatch('sObject is Required.');
        }
    });
    test('Testing sourceRetrievePackage()', () => {
        const process = ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', './', '50.0', 1);
        expect(process.name).toEqual('force:source:retrieve-package');
        ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', './', '50.0', 1);
        ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', './', '50.0');
        ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', './');
        try {
            ProcessFactory.sourceRetrievePackage(undefined, './manifest/package.xml', './', '50.0', 1);
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.sourceRetrievePackage('MyOrg', undefined, './', '50.0', 1);
        } catch (error) {
            expect(error.message).toMatch('packageFile is Required.');
        }
        try {
            ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', undefined, '50.0', 1);
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing sourceValidatePackage()', () => {
        const process = ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0', 1);
        expect(process.name).toEqual('force:source:deploy-validatePackage');
        ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName');
        ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest');
        ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './');
        try {
            ProcessFactory.sourceValidatePackage(undefined, './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.sourceValidatePackage('MyOrg', undefined, './', 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('packageFile is Required.');
        }
        try {
            ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', undefined, 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing sourceDeployPackage()', () => {
        const process = ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0', 1);
        expect(process.name).toEqual('force:source:deploy-package');
        ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName');
        ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest');
        ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './');
        try {
            ProcessFactory.sourceDeployPackage(undefined, './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.sourceDeployPackage('MyOrg', undefined, './', 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('packageFile is Required.');
        }
        try {
            ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', undefined, 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing sourceDeploy()', () => {
        let process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile');
        process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile', 'testLevel');
        process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile', 'testLevel', 'runTest');
        process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile', 'testLevel', 'runTest', '50.0');
        process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile', 'testLevel', 'runTest', '50.0', 33);
        expect(process.name).toEqual('force:source:deploy-types');
        try {
            ProcessFactory.sourceDeploy(undefined, './', 'Profile', 'testLevel', 'runTest', '50.0', 33);
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.sourceDeploy('MyOrg', undefined, 'Profile', 'testLevel', 'runTest', '50.0', 33);
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.sourceDeploy('MyOrg', './', undefined, 'testLevel', 'runTest', '50.0', 33);
        } catch (error) {
            expect(error.message).toMatch('types is Required.');
        }
    });
    test('Testing sourceQuickDeploy()', () => {
        const process = ProcessFactory.sourceQuickDeploy('MyOrg', 'deployId', './', '50.0');
        expect(process.name).toEqual('force:source:deploy-quick');
        ProcessFactory.sourceQuickDeploy('MyOrg', 'deployId', './');
        try {
            ProcessFactory.sourceQuickDeploy(undefined, 'deployId', './', '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.sourceQuickDeploy('MyOrg', undefined, './', '50.0');
        } catch (error) {
            expect(error.message).toMatch('deployId is Required.');
        }
        try {
            ProcessFactory.sourceQuickDeploy('MyOrg', 'deployId', undefined, '50.0');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing sourceCancelDeploy()', () => {
        const process = ProcessFactory.sourceCancelDeploy('MyOrg', 'deployId', '1');
        expect(process.name).toEqual('force:source:deploy:cancel');
        ProcessFactory.sourceCancelDeploy('MyOrg', 'deployId');
        try {
            ProcessFactory.sourceCancelDeploy(undefined, 'deployId', '1');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.sourceCancelDeploy('MyOrg', undefined, '1');
        } catch (error) {
            expect(error.message).toMatch('deployId is Required.');
        }
    });
    test('Testing sourceDeployReport()', () => {
        const process = ProcessFactory.sourceDeployReport('MyOrg', 'deployId', '50.0');
        expect(process.name).toEqual('force:source:deploy:report');
        ProcessFactory.sourceDeployReport('MyOrg', 'deployId');
        try {
            ProcessFactory.sourceDeployReport(undefined, 'deployId');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.sourceDeployReport('MyOrg', undefined);
        } catch (error) {
            expect(error.message).toMatch('deployId is Required.');
        }
    });
    test('Testing mdapiRetrievePackage()', () => {
        const process = ProcessFactory.mdapiRetrievePackage('MyOrg', './manifest/package.xml', './', 'target/dir', '50.0', 1);
        expect(process.name).toEqual('force:mdapi:retrieve-package');
        ProcessFactory.mdapiRetrievePackage('MyOrg', './manifest/package.xml', './', 'target/dir');
        try {
            ProcessFactory.mdapiRetrievePackage(undefined, './manifest/package.xml', './', 'target/dir', '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.mdapiRetrievePackage('MyOrg', undefined, './', 'target/dir', '50.0');
        } catch (error) {
            expect(error.message).toMatch('packageFolder is Required.');
        }
        try {
            ProcessFactory.mdapiRetrievePackage('MyOrg', './manifest/package.xml', undefined, 'target/dir', '50.0');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.mdapiRetrievePackage('MyOrg', './manifest/package.xml', './', undefined, '50.0');
        } catch (error) {
            expect(error.message).toMatch('targetDir is Required.');
        }
    });
    test('Testing mdapiValidatePackage()', () => {
        const process = ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0', 1);
        expect(process.name).toEqual('force:mdapi:deploy-validatePackage');
        ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName');
        ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest');
        ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', './');
        try {
            ProcessFactory.mdapiValidatePackage(undefined, './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.mdapiValidatePackage('MyOrg', undefined, './', 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('packageFolder is Required.');
        }
        try {
            ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', undefined, 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    }); test('Testing mdapiDeployPackage()', () => {
        const process = ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0', 1);
        expect(process.name).toEqual('force:mdapi:deploy-package');
        ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName');
        ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest');
        ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './');
        try {
            ProcessFactory.mdapiDeployPackage(undefined, './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.mdapiDeployPackage('MyOrg', undefined, './', 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('packageFolder is Required.');
        }
        try {
            ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', undefined, 'runLocalTest', 'ApexClassName', '50.0');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing mdapiQuickDeploy()', () => {
        const process = ProcessFactory.mdapiQuickDeploy('MyOrg', 'deployId', ',/', '50.0');
        expect(process.name).toEqual('force:mdapi:deploy-quick');
        ProcessFactory.mdapiQuickDeploy('MyOrg', 'deployId', ',/');
        try {
            ProcessFactory.mdapiQuickDeploy(undefined, 'deployId', ',/', '50.0');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.mdapiQuickDeploy('MyOrg', undefined, ',/', '50.0');
        } catch (error) {
            expect(error.message).toMatch('deployId is Required.');
        }
        try {
            ProcessFactory.mdapiQuickDeploy('MyOrg', 'deployId', undefined, '50.0');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing mdapiRetrieveReport()', () => {
        const process = ProcessFactory.mdapiRetrieveReport('MyOrg', 'retrieveId', 'targetDir');
        expect(process.name).toEqual('force:mdapi:retrieve:report');
        try {
            ProcessFactory.mdapiRetrieveReport(undefined, 'deployId', 'targetDir');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.mdapiRetrieveReport('MyOrg', undefined, 'targetDir');
        } catch (error) {
            expect(error.message).toMatch('retrieveId is Required.');
        }
        try {
            ProcessFactory.mdapiRetrieveReport('MyOrg', 'retrieveId', undefined);
        } catch (error) {
            expect(error.message).toMatch('targetDir is Required.');
        }
    });
    test('Testing mdapiDeployReport()', () => {
        const process = ProcessFactory.mdapiDeployReport('MyOrg', 'deployId', 1);
        expect(process.name).toEqual('force:mdapi:deploy:report');
        ProcessFactory.mdapiDeployReport('MyOrg', 'deployId');
        try {
            ProcessFactory.mdapiDeployReport(undefined, 'deployId');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.mdapiDeployReport('MyOrg', undefined);
        } catch (error) {
            expect(error.message).toMatch('deployId is Required.');
        }
    });
    test('Testing mdapiCancelDeploy()', () => {
        const process = ProcessFactory.mdapiCancelDeploy('MyOrg', 'deployId', 1);
        expect(process.name).toEqual('mdapi:deploy:cancel');
        ProcessFactory.mdapiCancelDeploy('MyOrg', 'deployId');
        try {
            ProcessFactory.mdapiCancelDeploy(undefined, 'deployId');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.mdapiCancelDeploy('MyOrg', undefined);
        } catch (error) {
            expect(error.message).toMatch('deployId is Required.');
        }
    });
    test('Testing query()', () => {
        const process = ProcessFactory.query('MyOrg', 'Select Id from Account', true);
        expect(process.name).toEqual('force:data:soql:query-Select Id from Account');
        ProcessFactory.query('MyOrg', 'Select Id from Account', false);
        ProcessFactory.query('MyOrg', 'Select Id from Account');
        try {
            ProcessFactory.query(undefined, 'deployId');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.query('MyOrg', undefined);
        } catch (error) {
            expect(error.message).toMatch('query is Required.');
        }
    });
    test('Testing convertToSFDX()', () => {
        const process = ProcessFactory.convertToSFDX('./manifest', './manifest/package.xml', '../convertedProject', '50.0');
        expect(process.name).toEqual('force:mdapi:convert');
        ProcessFactory.convertToSFDX('./manifest', './manifest/package.xml', '../convertedProject');
        try {
            ProcessFactory.convertToSFDX(undefined, './manifest/package.xml', '../convertedProject', '50.0');
        } catch (error) {
            expect(error.message).toMatch('packageFolder is Required.');
        }
        try {
            ProcessFactory.convertToSFDX('./manifest', undefined, '../convertedProject', '50.0');
        } catch (error) {
            expect(error.message).toMatch('packageFile is Required.');
        }
        try {
            ProcessFactory.convertToSFDX('./manifest', './manifest/package.xml', undefined, '50.0');
        } catch (error) {
            expect(error.message).toMatch('targetFolder is Required.');
        }
    });
    test('Testing convertToMetadataAPI()', () => {
        const process = ProcessFactory.convertToMetadataAPI('./manifest/package.xml', './', '../convertedProject', '50.0');
        expect(process.name).toEqual('force:source:convert');
        ProcessFactory.convertToMetadataAPI('./manifest/package.xml', './', '../convertedProject');
        try {
            ProcessFactory.convertToMetadataAPI(undefined, './', '../convertedProject');
        } catch (error) {
            expect(error.message).toMatch('packageFile is Required.');
        }
        try {
            ProcessFactory.convertToMetadataAPI('./manifest/package.xml', undefined, '../convertedProject');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.convertToMetadataAPI('./manifest/package.xml', './', undefined);
        } catch (error) {
            expect(error.message).toMatch('targetFolder is Required.');
        }
    });
    test('Testing createSFDXProject()', () => {
        const process = ProcessFactory.createSFDXProject('MyOrg', './', 'empty', 'acn', true);
        expect(process.name).toEqual('force:project:create-MyOrg');
        ProcessFactory.createSFDXProject('MyOrg', './', 'empty', 'acn', false);
        ProcessFactory.createSFDXProject('MyOrg', './', 'empty', 'acn');
        ProcessFactory.createSFDXProject('MyOrg', './', 'empty');
        ProcessFactory.createSFDXProject('MyOrg', './');
        try {
            ProcessFactory.createSFDXProject(undefined, './', 'empty', 'acn', true);
        } catch (error) {
            expect(error.message).toMatch('projectName is Required.');
        }
        try {
            ProcessFactory.createSFDXProject('MyOrg', undefined, 'empty', 'acn', true);
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing setAuthOrg()', () => {
        const process = ProcessFactory.setAuthOrg('MyOrg', './');
        expect(process.name).toEqual('force:config:set-defaultusername');
        try {
            ProcessFactory.setAuthOrg(undefined, './');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.setAuthOrg('MyOrg', undefined);
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing exportTreeData()', () => {
        const process = ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', './exported', 'prefix', '50.0');
        expect(process.name).toEqual('force:data:tree:export-Select Id from Account');
        ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', './exported', 'prefix');
        ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', './exported');
        try {
            ProcessFactory.exportTreeData(undefined, 'Select Id from Account', './exported', 'prefix');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.exportTreeData('MyOrg', undefined, './exported', 'prefix');
        } catch (error) {
            expect(error.message).toMatch('query is Required.');
        }
        try {
            ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', undefined, 'prefix');
        } catch (error) {
            expect(error.message).toMatch('outputPath is Required.');
        }
    });
    test('Testing importTreeData()', () => {
        const process = ProcessFactory.importTreeData('MyOrg', './exported.json', '50.0');
        expect(process.name).toEqual('force:data:tree:import-./exported.json');
        ProcessFactory.importTreeData('MyOrg', './exported.json');
        try {
            ProcessFactory.importTreeData(undefined, './exported.json');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.importTreeData('MyOrg', undefined);
        } catch (error) {
            expect(error.message).toMatch('file is Required.');
        }
    });
    test('Testing bulkDelete()', () => {
        const process = ProcessFactory.bulkDelete('MyOrg', './dataToDelete.csv', 'CustomObject', './', '50.0');
        expect(process.name).toEqual('force:data:bulk:delete-CustomObject');
        ProcessFactory.bulkDelete('MyOrg', './dataToDelete.csv', 'CustomObject', './');
        try {
            ProcessFactory.bulkDelete('MyOrg', './dataToDelete.csv', 'CustomObject', undefined);
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.bulkDelete(undefined, './dataToDelete.csv', 'CustomObject', './');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.bulkDelete('MyOrg', undefined, 'CustomObject', './');
        } catch (error) {
            expect(error.message).toMatch('csvFile is Required.');
        }
        try {
            ProcessFactory.bulkDelete('MyOrg', './dataToDelete.csv', undefined, './');
        } catch (error) {
            expect(error.message).toMatch('sobject is Required.');
        }
    });
    test('Testing executeApexAnonymous()', () => {
        const process = ProcessFactory.executeApexAnonymous('MyOrg', './scriptFile.apex', './', '50.0');
        expect(process.name).toEqual('force:apex:execute-./scriptFile.apex');
        ProcessFactory.executeApexAnonymous('MyOrg', './scriptFile.apex', './');
        try {
            ProcessFactory.executeApexAnonymous('MyOrg', './scriptFile.apex', undefined);
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.executeApexAnonymous(undefined, './scriptFile.apex', './');
        } catch (error) {
            expect(error.message).toMatch('usernameOrAlias is Required.');
        }
        try {
            ProcessFactory.executeApexAnonymous('MyOrg', undefined, './');
        } catch (error) {
            expect(error.message).toMatch('scriptFile is Required.');
        }
    });
    test('Testing gitGetConfig()', () => {
        const process = ProcessFactory.gitGetConfig('./', 'author.name');
        ProcessFactory.gitGetConfig('./');
        expect(process.name).toEqual('git:config');
        try {
            ProcessFactory.gitGetConfig(undefined, 'author.name');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing gitGetTags()', () => {
        const process = ProcessFactory.gitGetTags('./', 'committerdate');
        ProcessFactory.gitGetTags('./');
        expect(process.name).toEqual('git:tag');
        try {
            ProcessFactory.gitGetConfig(undefined, 'committerdate');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing gitLog()', () => {
        const process = ProcessFactory.gitLog('./', 'medium');
        expect(process.name).toEqual('git:log--pretty');
        ProcessFactory.gitLog('./');
        ProcessFactory.gitLog('./');
        try {
            ProcessFactory.gitLog(undefined);
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing gitGetBranches()', () => {
        const process = ProcessFactory.gitGetBranches('./');
        expect(process.name).toEqual('git:branch-a');
        try {
            ProcessFactory.gitGetBranches(undefined);
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing gitFetch()', () => {
        const process = ProcessFactory.gitFetch('./');
        expect(process.name).toEqual('git:fetch');
        try {
            ProcessFactory.gitFetch(undefined);
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing gitDiff()', () => {
        const process = ProcessFactory.gitDiff('./', 'source', 'target');
        expect(process.name).toEqual('git:diff-source-target');
        ProcessFactory.gitDiff('./', 'source');
        try {
            ProcessFactory.gitDiff(undefined, 'source', 'target');
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.gitDiff('./', undefined, 'target');
        } catch (error) {
            expect(error.message).toMatch('source is Required.');
        }
    });
    test('Testing auraHelperCompressFolder()', () => {
        const process = ProcessFactory.auraHelperCompressFolder('./', {
            folder: './folder',
        });
        expect(process.name).toEqual('ah:compress:folder-./folder');
        ProcessFactory.auraHelperCompressFolder('./', {
            folder: './folder',
            sortOrder: 'order'
        });
        try {
            ProcessFactory.auraHelperCompressFolder(undefined, {
                folder: './folder',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.auraHelperCompressFolder('./', {
                folder: undefined,
            });
        } catch (error) {
            expect(error.message).toMatch('folder is Required.');
        }
        try {
            ProcessFactory.auraHelperCompressFolder('./', undefined);
        } catch (error) {
            expect(error.message).toMatch('options is Required.');
        }
    });
    test('Testing auraHelperCompressFile()', () => {
        const process = ProcessFactory.auraHelperCompressFile('./', {
            file: './file',
        });
        ProcessFactory.auraHelperCompressFile('./', {
            file: './file',
            sortOrder: 'order'
        });
        expect(process.name).toEqual('ah:compress:file-./file');
        try {
            ProcessFactory.auraHelperCompressFile(undefined, {
                file: './file',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.auraHelperCompressFile('./', {
                file: undefined,
            });
        } catch (error) {
            expect(error.message).toMatch('file is Required.');
        }
        try {
            ProcessFactory.auraHelperCompressFile('./', undefined);
        } catch (error) {
            expect(error.message).toMatch('options is Required.');
        }
    });
    test('Testing auraHelperOrgCompare()', () => {
        const process = ProcessFactory.auraHelperOrgCompare('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:org:compare');
        ProcessFactory.auraHelperOrgCompare('./', {});
        try {
            ProcessFactory.auraHelperOrgCompare(undefined, {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing auraHelperOrgCompareBetween()', () => {
        const process = ProcessFactory.auraHelperOrgCompareBetween('./', {
            apiVersion: '50.0',
            target: 'target',
        });
        expect(process.name).toEqual('ah:org:compare:between');
        ProcessFactory.auraHelperOrgCompareBetween('./', {
            apiVersion: '50.0',
            source: 'source',
            target: 'target',
        });
        ProcessFactory.auraHelperOrgCompareBetween('./', {
            source: 'source',
            target: 'target',
        });
        try {
            ProcessFactory.auraHelperOrgCompareBetween(undefined, {
                apiVersion: '50.0',
                target: 'target',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.auraHelperOrgCompareBetween('./', {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('target is Required.');
        }
        try {
            ProcessFactory.auraHelperOrgCompareBetween('./', undefined);
        } catch (error) {
            expect(error.message).toMatch('options is Required.');
        }
    });
    test('Testing auraHelperDescribeMetadata()', () => {
        const process = ProcessFactory.auraHelperDescribeMetadata('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:metadata:local:describe');
        ProcessFactory.auraHelperDescribeMetadata('./', {});
        ProcessFactory.auraHelperDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: true,
            downloadAll: true,
        });
        ProcessFactory.auraHelperDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: true,
            downloadAll: false,
        });
        ProcessFactory.auraHelperDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: true,
        });
        ProcessFactory.auraHelperDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: false,
        });
        ProcessFactory.auraHelperDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: false,
            types: ['CustomObject']
        });
        try {
            ProcessFactory.auraHelperDescribeMetadata(undefined, {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.auraHelperDescribeMetadata('./', undefined);
        } catch (error) {
            expect(error.message).toMatch('options is Required.');
        }
    });
    test('Testing auraHelperRetrieveSpecial()', () => {
        const process = ProcessFactory.auraHelperRetrieveSpecial('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:metadata:local:retrieve:special');
        ProcessFactory.auraHelperRetrieveSpecial('./', {
            fromOrg: false,
        });
        ProcessFactory.auraHelperRetrieveSpecial('./', {
            apiVersion: '50.0',
            fromOrg: true,
            downloadAll: true,
        });
        ProcessFactory.auraHelperRetrieveSpecial('./', {
            apiVersion: '50.0',
            fromOrg: true,
            downloadAll: false,
        });
        ProcessFactory.auraHelperRetrieveSpecial('./', {
            apiVersion: '50.0',
            downloadAll: false,
            includeOrg: true,
        });
        ProcessFactory.auraHelperRetrieveSpecial('./', {
            apiVersion: '50.0',
            downloadAll: false,
            includeOrg: true,
            compress: true,
        });
        ProcessFactory.auraHelperRetrieveSpecial('./', {
            apiVersion: '50.0',
            downloadAll: false,
            includeOrg: true,
            compress: true,
            sortOrder: 'order'
        });
        ProcessFactory.auraHelperRetrieveSpecial('./', {
            apiVersion: '50.0',
            downloadAll: false,
            includeOrg: true,
            compress: true,
            sortOrder: 'order',
            types: ['CustomObject']
        });
        try {
            ProcessFactory.auraHelperRetrieveSpecial(undefined, {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.auraHelperRetrieveSpecial('./', undefined);
        } catch (error) {
            expect(error.message).toMatch('options is Required.');
        }
    });
    test('Testing auraHelperLoadPermissions()', () => {
        const process = ProcessFactory.auraHelperLoadPermissions('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:metadata:org:permissions');
        ProcessFactory.auraHelperLoadPermissions('./', {});
        try {
            ProcessFactory.auraHelperLoadPermissions(undefined, {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing auraHelperPackageGenerator()', () => {
        const process = ProcessFactory.auraHelperPackageGenerator('./', {
            createFrom: 'git',
            source: 'this',
        });
        expect(process.name).toEqual('ah:metadata:local:package:create');
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            outputPath: 'path'
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            createType: 'type'
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            createFrom: 'from'
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            createFrom: 'from',
            deleteOrder: 'after'
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            createFrom: 'from',
            deleteOrder: 'after',
            target: 'target'
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            createFrom: 'from',
            deleteOrder: 'after',
            target: 'target',
            raw: true,
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            createFrom: 'from',
            deleteOrder: 'after',
            target: 'target',
            raw: true,
            useIgnore: true,
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            createFrom: 'from',
            deleteOrder: 'after',
            target: 'target',
            raw: true,
            useIgnore: true,
            ignoreFile: 'file'
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            createFrom: 'from',
            deleteOrder: 'after',
            target: 'target',
            raw: true,
            useIgnore: true,
            ignoreFile: 'file',
            explicit: true
        });
        try {
            ProcessFactory.auraHelperPackageGenerator(undefined, {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
        try {
            ProcessFactory.auraHelperPackageGenerator('./', {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('createFrom is Required.');
        }
        try {
            ProcessFactory.auraHelperPackageGenerator('./', {
                apiVersion: '50.0',
                createFrom: 'git'
            });
        } catch (error) {
            expect(error.message).toMatch('source is Required.');
        }
        try {
            ProcessFactory.auraHelperPackageGenerator('./', undefined);
        } catch (error) {
            expect(error.message).toMatch('options is Required.');
        }
    });
    test('Testing auraHelperRepairDependencies()', () => {
        const process = ProcessFactory.auraHelperRepairDependencies('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:metadata:local:repair');
        ProcessFactory.auraHelperRepairDependencies('./');
        ProcessFactory.auraHelperRepairDependencies('./', {});
        ProcessFactory.auraHelperRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject']
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
            useIgnore: true,
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
            useIgnore: true,
            ignoreFile: 'file'
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
            useIgnore: true,
            ignoreFile: 'file',
            outputFile: 'output'
        });
        try {
            ProcessFactory.auraHelperRepairDependencies(undefined, {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing auraHelperIgnore()', () => {
        const process = ProcessFactory.auraHelperIgnore('./', {});
        expect(process.name).toEqual('ah:metadata:local:ignore');
        ProcessFactory.auraHelperIgnore('./');
        ProcessFactory.auraHelperIgnore('./', {
            types: ['CustomObject'],
        });
        ProcessFactory.auraHelperIgnore('./', {
            types: ['CustomObject'],
            ignoreFile: 'file'
        });
        ProcessFactory.auraHelperIgnore('./', {
            types: ['CustomObject'],
            ignoreFile: 'file',
            compress: true,
        });
        ProcessFactory.auraHelperIgnore('./', {
            types: ['CustomObject'],
            ignoreFile: 'file',
            compress: true,
            sortOrder: 'order'
        });
        try {
            ProcessFactory.auraHelperIgnore(undefined, {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('projectFolder is Required.');
        }
    });
    test('Testing isAuraHelperInstalled()', () => {
        const process = ProcessFactory.isAuraHelperInstalled();
        expect(process.name).toEqual('ah:aura-helper');
    });
    test('Testing auraHelperVersion()', () => {
        const process = ProcessFactory.auraHelperVersion();
        expect(process.name).toEqual('ah:version');
    });
    test('Testing auraHelperUpdate()', () => {
        const process = ProcessFactory.auraHelperUpdate();
        expect(process.name).toEqual('ah:update');
    });
    test('Testing auraHelperUpdateNPM()', () => {
        const process = ProcessFactory.auraHelperUpdateNPM();
        expect(process.name).toEqual('npm:update');
    });
});