import { ProcessFactory } from "../../processManager";

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
    });
    test('Testing describeMetadataType()', () => {
        const process = ProcessFactory.describeMetadataType('MyOrg', 'Report', 'unfiled$public', '50.0');
        expect(process.name).toEqual('force:mdapi:listmetadata-Report');
        ProcessFactory.describeMetadataType('MyOrg', 'Report', 'unfiled$public');
        ProcessFactory.describeMetadataType('MyOrg', 'CustomObject');
    });
    test('Testing listSObjects()', () => {
        const process = ProcessFactory.listSObjects('MyOrg', undefined, '50.0');
        expect(process.name).toEqual('force:schema:sobject:list');
        ProcessFactory.listSObjects('MyOrg', 'Custom', '50.0');
        ProcessFactory.listSObjects('MyOrg', 'Custom');
    });
    test('Testing getSObjectSchema()', () => {
        const process = ProcessFactory.getSObjectSchema('MyOrg', 'CustomObject', '50.0');
        ProcessFactory.getSObjectSchema('MyOrg', 'CustomObject');
        expect(process.name).toEqual('force:schema:sobject:describe-CustomObject');
    });
    test('Testing sourceRetrievePackage()', () => {
        const process = ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', './', '50.0', 1);
        expect(process.name).toEqual('force:source:retrieve-package');
        ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', './', '50.0', 1);
        ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', './', '50.0');
        ProcessFactory.sourceRetrievePackage('MyOrg', './manifest/package.xml', './');
    });
    test('Testing sourceValidatePackage()', () => {
        const process = ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0', 1);
        expect(process.name).toEqual('force:source:deploy-validatePackage');
        ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName');
        ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest');
        ProcessFactory.sourceValidatePackage('MyOrg', './manifest/package.xml', './');
    });
    test('Testing sourceDeployPackage()', () => {
        const process = ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0', 1);
        expect(process.name).toEqual('force:source:deploy-package');
        ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName');
        ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest');
        ProcessFactory.sourceDeployPackage('MyOrg', './manifest/package.xml', './');
    });
    test('Testing sourceDeploy()', () => {
        let process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile');
        process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile', 'testLevel');
        process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile', 'testLevel', 'runTest');
        process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile', 'testLevel', 'runTest', '50.0');
        process = ProcessFactory.sourceDeploy('MyOrg', './', 'Profile', 'testLevel', 'runTest', '50.0', 33);
        expect(process.name).toEqual('force:source:deploy-types');
    });
    test('Testing sourceQuickDeploy()', () => {
        const process = ProcessFactory.sourceQuickDeploy('MyOrg', 'deployId', './', '50.0');
        expect(process.name).toEqual('force:source:deploy-quick');
        ProcessFactory.sourceQuickDeploy('MyOrg', 'deployId', './');
    });
    test('Testing sourceCancelDeploy()', () => {
        const process = ProcessFactory.sourceCancelDeploy('MyOrg', 'deployId', '1');
        expect(process.name).toEqual('force:source:deploy:cancel');
        ProcessFactory.sourceCancelDeploy('MyOrg', 'deployId');
    });
    test('Testing sourceDeployReport()', () => {
        const process = ProcessFactory.sourceDeployReport('MyOrg', 'deployId', '50.0');
        expect(process.name).toEqual('force:source:deploy:report');
        ProcessFactory.sourceDeployReport('MyOrg', 'deployId');
    });
    test('Testing mdapiRetrievePackage()', () => {
        const process = ProcessFactory.mdapiRetrievePackage('MyOrg', './manifest/package.xml', './', 'target/dir', '50.0', 1);
        expect(process.name).toEqual('force:mdapi:retrieve-package');
        ProcessFactory.mdapiRetrievePackage('MyOrg', './manifest/package.xml', './', 'target/dir');
    });
    test('Testing mdapiValidatePackage()', () => {
        const process = ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0', 1);
        expect(process.name).toEqual('force:mdapi:deploy-validatePackage');
        ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName');
        ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', './', 'runLocalTest');
        ProcessFactory.mdapiValidatePackage('MyOrg', './manifest/package.xml', './');
    }); test('Testing mdapiDeployPackage()', () => {
        const process = ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0', 1);
        expect(process.name).toEqual('force:mdapi:deploy-package');
        ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName', '50.0');
        ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest', 'ApexClassName');
        ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './', 'runLocalTest');
        ProcessFactory.mdapiDeployPackage('MyOrg', './manifest/package.xml', './');
    });
    test('Testing mdapiQuickDeploy()', () => {
        const process = ProcessFactory.mdapiQuickDeploy('MyOrg', 'deployId', ',/', '50.0');
        expect(process.name).toEqual('force:mdapi:deploy-quick');
        ProcessFactory.mdapiQuickDeploy('MyOrg', 'deployId', ',/');
    });
    test('Testing mdapiRetrieveReport()', () => {
        const process = ProcessFactory.mdapiRetrieveReport('MyOrg', 'retrieveId', 'targetDir');
        expect(process.name).toEqual('force:mdapi:retrieve:report');
    });
    test('Testing mdapiDeployReport()', () => {
        const process = ProcessFactory.mdapiDeployReport('MyOrg', 'deployId', 1);
        expect(process.name).toEqual('force:mdapi:deploy:report');
        ProcessFactory.mdapiDeployReport('MyOrg', 'deployId');
    });
    test('Testing mdapiCancelDeploy()', () => {
        const process = ProcessFactory.mdapiCancelDeploy('MyOrg', 'deployId', 1);
        expect(process.name).toEqual('mdapi:deploy:cancel');
        ProcessFactory.mdapiCancelDeploy('MyOrg', 'deployId');
    });
    test('Testing query()', () => {
        const process = ProcessFactory.query('MyOrg', 'Select Id from Account', true);
        expect(process.name).toEqual('force:data:soql:query-Select Id from Account');
        ProcessFactory.query('MyOrg', 'Select Id from Account', false);
        ProcessFactory.query('MyOrg', 'Select Id from Account');
    });
    test('Testing convertToSFDX()', () => {
        const process = ProcessFactory.convertToSFDX('./manifest', './manifest/package.xml', '../convertedProject', '50.0');
        expect(process.name).toEqual('force:mdapi:convert');
        ProcessFactory.convertToSFDX('./manifest', './manifest/package.xml', '../convertedProject');
    });
    test('Testing convertToMetadataAPI()', () => {
        const process = ProcessFactory.convertToMetadataAPI('./manifest/package.xml', './', '../convertedProject', '50.0');
        expect(process.name).toEqual('force:source:convert');
        ProcessFactory.convertToMetadataAPI('./manifest/package.xml', './', '../convertedProject');
    });
    test('Testing createSFDXProject()', () => {
        const process = ProcessFactory.createSFDXProject('MyOrg', './', 'empty', 'acn', true);
        expect(process.name).toEqual('force:project:create-MyOrg');
        ProcessFactory.createSFDXProject('MyOrg', './', 'empty', 'acn', false);
        ProcessFactory.createSFDXProject('MyOrg', './', 'empty', 'acn');
        ProcessFactory.createSFDXProject('MyOrg', './', 'empty');
        ProcessFactory.createSFDXProject('MyOrg', './');
    });
    test('Testing setAuthOrg()', () => {
        const process = ProcessFactory.setAuthOrg('MyOrg', './');
        expect(process.name).toEqual('force:config:set-defaultusername');
    });
    test('Testing exportTreeData()', () => {
        const process = ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', './exported', 'prefix', '50.0');
        expect(process.name).toEqual('force:data:tree:export-Select Id from Account');
        ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', './exported', 'prefix');
        ProcessFactory.exportTreeData('MyOrg', 'Select Id from Account', './exported');
    });
    test('Testing importTreeData()', () => {
        const process = ProcessFactory.importTreeData('MyOrg', './exported.json', '50.0');
        expect(process.name).toEqual('force:data:tree:import-./exported.json');
        ProcessFactory.importTreeData('MyOrg', './exported.json');
    });
    test('Testing bulkDelete()', () => {
        const process = ProcessFactory.bulkDelete('MyOrg', './dataToDelete.csv', 'CustomObject', './', '50.0');
        expect(process.name).toEqual('force:data:bulk:delete-CustomObject');
        ProcessFactory.bulkDelete('MyOrg', './dataToDelete.csv', 'CustomObject', './');
    });
    test('Testing executeApexAnonymous()', () => {
        const process = ProcessFactory.executeApexAnonymous('MyOrg', './scriptFile.apex', './', '50.0');
        expect(process.name).toEqual('force:apex:execute-./scriptFile.apex');
        ProcessFactory.executeApexAnonymous('MyOrg', './scriptFile.apex', './');
    });
    test('Testing gitGetConfig()', () => {
        const process = ProcessFactory.gitGetConfig('./', 'author.name');
        ProcessFactory.gitGetConfig('./');
        expect(process.name).toEqual('git:config');
    });
    test('Testing gitGetTags()', () => {
        const process = ProcessFactory.gitGetTags('./', 'committerdate');
        ProcessFactory.gitGetTags('./');
        expect(process.name).toEqual('git:tag');
    });
    test('Testing gitLog()', () => {
        const process = ProcessFactory.gitLog('./', 'medium');
        expect(process.name).toEqual('git:log--pretty');
        ProcessFactory.gitLog('./');
        ProcessFactory.gitLog('./');
    });
    test('Testing gitGetBranches()', () => {
        const process = ProcessFactory.gitGetBranches('./');
        expect(process.name).toEqual('git:branch-a');
    });
    test('Testing gitFetch()', () => {
        const process = ProcessFactory.gitFetch('./');
        expect(process.name).toEqual('git:fetch');
    });
    test('Testing gitDiff()', () => {
        const process = ProcessFactory.gitDiff('./', 'source', 'target');
        expect(process.name).toEqual('git:diff-source-target');
        ProcessFactory.gitDiff('./', 'source');
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
            ProcessFactory.auraHelperCompressFolder('./', {
                folder: undefined,
            });
        } catch (error) {
            expect(error.message).toMatch('folder is Required.');
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
            ProcessFactory.auraHelperCompressFile('./', {
                file: undefined,
            });
        } catch (error) {
            expect(error.message).toMatch('file is Required.');
        }
    });
    test('Testing auraHelperOrgCompare()', () => {
        const process = ProcessFactory.auraHelperOrgCompare('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:org:compare');
        ProcessFactory.auraHelperOrgCompare('./', {});
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
            ProcessFactory.auraHelperOrgCompareBetween('./', {
                apiVersion: '50.0',
            });
        } catch (error) {
            expect(error.message).toMatch('target is Required.');
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
    });
    test('Testing auraHelperLoadPermissions()', () => {
        const process = ProcessFactory.auraHelperLoadPermissions('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:metadata:org:permissions');
        ProcessFactory.auraHelperLoadPermissions('./', {});
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
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            deleteOrder: 'after'
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            deleteOrder: 'after',
            target: 'target'
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            deleteOrder: 'after',
            target: 'target',
            raw: true,
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
            deleteOrder: 'after',
            target: 'target',
            raw: true,
            useIgnore: true,
        });
        ProcessFactory.auraHelperPackageGenerator('./', {
            apiVersion: '50.0',
            createFrom: 'git',
            source: 'this',
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
            deleteOrder: 'after',
            target: 'target',
            raw: true,
            useIgnore: true,
            ignoreFile: 'file',
            explicit: true
        });
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