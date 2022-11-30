import { ProcessFactory, ProcessHandler } from "../../processManager";

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
        ProcessFactory.gitLog('./', 'origin/Desa01');
        ProcessFactory.gitLog('./', 'origin/Desa01', 'origin/master');
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
    test('Testing gitListFiles()', () => {
        const process = ProcessFactory.gitListFiles('./');
        expect(process.name).toEqual('git ls-files');
    });
    test('Testing auraHelperCompressFolder()', () => {
        const process = ProcessFactory.auraHelperCompressFolder('./', {
            folder: ['./folder'],
        });
        expect(process.name).toEqual('ah:compress:folder-./folder');
        ProcessFactory.auraHelperCompressFolder('./', {
            folder: ['./folder'],
            sortOrder: 'order'
        });
        try {
            ProcessFactory.auraHelperCompressFolder('./', {
                folder: [''],
            });
        } catch (error) {
            expect(error.message).toMatch('folder is Required.');
        }
    });
    test('Testing auraHelperCompressFile()', () => {
        const process = ProcessFactory.auraHelperCompressFile('./', {
            file: ['./file'],
        });
        ProcessFactory.auraHelperCompressFile('./', {
            file: ['./file'],
            sortOrder: 'order'
        });
        expect(process.name).toEqual('ah:compress:file-./file');
        try {
            ProcessFactory.auraHelperCompressFile('./', {
                file: [''],
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
                target: '',
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
                createFrom: '',
                source: '',
            });
        } catch (error) {
            expect(error.message).toMatch('createFrom is Required.');
        }
        try {
            ProcessFactory.auraHelperPackageGenerator('./', {
                apiVersion: '50.0',
                createFrom: 'git',
                source: '',
            });
        } catch (error) {
            expect(error.message).toMatch('source is Required.');
        }
    });
    test('Testing auraHelperRepairDependencies()', () => {
        const process = ProcessFactory.auraHelperRepairDependencies('./', {
        });
        expect(process.name).toEqual('ah:metadata:local:repair');
        ProcessFactory.auraHelperRepairDependencies('./');
        ProcessFactory.auraHelperRepairDependencies('./', {});
        ProcessFactory.auraHelperRepairDependencies('./', {
            onlyCheck: true,
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            onlyCheck: true,
            types: ['CustomObject']
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
            useIgnore: true,
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
            useIgnore: true,
            ignoreFile: 'file'
        });
        ProcessFactory.auraHelperRepairDependencies('./', {
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
    test('Testing auraHelperSFDXCompressFolder()', () => {
        const process = ProcessFactory.auraHelperSFDXCompressFolder('./', {
            folder: ['./folder'],
        });
        expect(process.name).toEqual('ah:compress:folder-./folder');
        ProcessFactory.auraHelperSFDXCompressFolder('./', {
            folder: ['./folder'],
            sortOrder: 'order'
        });
        try {
            ProcessFactory.auraHelperSFDXCompressFolder('./', {
                folder: [''],
            });
        } catch (error) {
            expect(error.message).toMatch('folder is Required.');
        }
    });
    test('Testing auraHelperSFDXCompressFile()', () => {
        const process = ProcessFactory.auraHelperSFDXCompressFile('./', {
            file: ['./file'],
        });
        ProcessFactory.auraHelperSFDXCompressFile('./', {
            file: ['./file'],
            sortOrder: 'order'
        });
        expect(process.name).toEqual('ah:metadata:local:compress:file-./file');
        try {
            ProcessFactory.auraHelperSFDXCompressFile('./', {
                file: [''],
            });
        } catch (error) {
            expect(error.message).toMatch('file is Required.');
        }
    });
    test('Testing auraHelperSFDXOrgCompare()', () => {
        const process = ProcessFactory.auraHelperSFDXOrgCompare('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:metadata:org:compare');
        ProcessFactory.auraHelperSFDXOrgCompare('./', {});
    });
    test('Testing auraHelperSFDXOrgCompareBetween()', () => {
        const process = ProcessFactory.auraHelperSFDXOrgCompareBetween('./', {
            apiVersion: '50.0',
            target: 'target',
        });
        expect(process.name).toEqual('ah:metadata:org:between:compare');
        ProcessFactory.auraHelperSFDXOrgCompareBetween('./', {
            apiVersion: '50.0',
            source: 'source',
            target: 'target',
        });
        ProcessFactory.auraHelperSFDXOrgCompareBetween('./', {
            source: 'source',
            target: 'target',
        });
        try {
            ProcessFactory.auraHelperSFDXOrgCompareBetween('./', {
                apiVersion: '50.0',
                target: '',
            });
        } catch (error) {
            expect(error.message).toMatch('target is Required.');
        }
    });
    test('Testing auraHelperSFDXDescribeMetadata()', () => {
        const process = ProcessFactory.auraHelperSFDXDescribeMetadata('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:metadata:local:describe');
        ProcessFactory.auraHelperSFDXDescribeMetadata('./', {});
        ProcessFactory.auraHelperSFDXDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: true,
            downloadAll: true,
        });
        ProcessFactory.auraHelperSFDXDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: true,
            downloadAll: false,
        });
        ProcessFactory.auraHelperSFDXDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: true,
        });
        ProcessFactory.auraHelperSFDXDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: false,
        });
        ProcessFactory.auraHelperSFDXDescribeMetadata('./', {
            apiVersion: '50.0',
            fromOrg: false,
            types: ['CustomObject']
        });
    });
    test('Testing auraHelperSFDXRetrieveSpecial()', () => {
        const process = ProcessFactory.auraHelperSFDXRetrieveSpecial('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:metadata:local:special:retrieve');
        ProcessFactory.auraHelperSFDXRetrieveSpecial('./', {
            fromOrg: false,
        });
        ProcessFactory.auraHelperSFDXRetrieveSpecial('./', {
            apiVersion: '50.0',
            fromOrg: true,
            downloadAll: true,
        });
        ProcessFactory.auraHelperSFDXRetrieveSpecial('./', {
            apiVersion: '50.0',
            fromOrg: true,
            downloadAll: false,
        });
        ProcessFactory.auraHelperSFDXRetrieveSpecial('./', {
            apiVersion: '50.0',
            downloadAll: false,
            includeOrg: true,
        });
        ProcessFactory.auraHelperSFDXRetrieveSpecial('./', {
            apiVersion: '50.0',
            downloadAll: false,
            includeOrg: true,
            compress: true,
        });
        ProcessFactory.auraHelperSFDXRetrieveSpecial('./', {
            apiVersion: '50.0',
            downloadAll: false,
            includeOrg: true,
            compress: true,
            sortOrder: 'order'
        });
        ProcessFactory.auraHelperSFDXRetrieveSpecial('./', {
            apiVersion: '50.0',
            downloadAll: false,
            includeOrg: true,
            compress: true,
            sortOrder: 'order',
            types: ['CustomObject']
        });
    });
    test('Testing auraHelperSFDXLoadPermissions()', () => {
        const process = ProcessFactory.auraHelperSFDXLoadPermissions('./', {
            apiVersion: '50.0',
        });
        ProcessFactory.auraHelperSFDXLoadPermissions('./', {
            apiVersion: '50.0',
            csv: true,
        });
        ProcessFactory.auraHelperSFDXLoadPermissions('./', {
            apiVersion: '50.0',
            csv: true,
            outputFile: 'path',
        });
        ProcessFactory.auraHelperSFDXLoadPermissions('./', {
            apiVersion: '50.0',
            csv: true,
            outputFile: 'path',
            logLevel: 'level'
        });
        expect(process.name).toEqual('ah:metadata:org:permissions:get');
        ProcessFactory.auraHelperSFDXLoadPermissions('./', {});
    });
    test('Testing auraHelperSFDXJSONPackage()', () => {
        const process = ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
        });
        expect(process.name).toEqual('ah:package:json:create');
        ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
            toDelete: true,
        });
        ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
            toDelete: true,
            deleteBefore: true,
        });
        ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
            toDelete: true,
            deleteBefore: true,
        });
        ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
            toDelete: true,
            deleteBefore: true,
            useIgnore: true,
        });
        ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
            toDelete: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore'
        });
        ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
            toDelete: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            wilcards: true,
        });
        ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
            toDelete: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            wilcards: true,
            outputPath: 'path',
        });
        ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
            toDelete: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            wilcards: true,
            outputPath: 'path',
            apiVersion: '50.0',
        });
        ProcessFactory.auraHelperSFDXJSONPackage('./', {
            source: 'dev',
            toDelete: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            wilcards: true,
            outputPath: 'path',
            apiVersion: '50.0',
            logLevel: 'debug'
        });
    });
    test('Testing auraHelperSFDXGitPackage()', () => {
        const process = ProcessFactory.auraHelperSFDXGitPackage('./', {});
        expect(process.name).toEqual('ah:package:git:create');
        ProcessFactory.auraHelperSFDXGitPackage('./');
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master'
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both'
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both',
            deleteBefore: true,
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both',
            deleteBefore: true,
            useIgnore: true,
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both',
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore'
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both',
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both',
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both',
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
            raw: true,
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both',
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
            raw: true,
            outputPath: 'path'
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both',
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
            raw: true,
            outputPath: 'path',
            apiVersion: '50.0',
        });
        ProcessFactory.auraHelperSFDXGitPackage('./', {
            source: 'dev',
            target: 'master',
            fileType: 'both',
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
            raw: true,
            outputPath: 'path',
            apiVersion: '50.0',
            logLevel: 'debug'
        });
    });
    test('Testing auraHelperSFDXMergePackage()', () => {
        const process = ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
        });
        expect(process.name).toEqual('ah:package:merge');
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            bytype: true
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            onlyPackage: true,
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            deleteBefore: true,
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            onlyDestructive: true,
            deleteBefore: true,
            useIgnore: true,
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            fullPackage: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore'
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            fullDestructive: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            fullDestructive: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            fullDestructive: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            fullDestructive: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
            outputPath: 'path'
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            fullDestructive: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
            outputPath: 'path',
            apiVersion: '50.0',
        });
        ProcessFactory.auraHelperSFDXMergePackage('./', {
            source: 'dev',
            fullDestructive: true,
            deleteBefore: true,
            useIgnore: true,
            ignoreFile: 'pathToIgnore',
            ignoreDestructive: true,
            destructiveIgnoreFile: 'destructiveIgnore',
            outputPath: 'path',
            apiVersion: '50.0',
            logLevel: 'debug'
        });
    });
    test('Testing auraHelperRepairSFDXDependencies()', () => {
        const process = ProcessFactory.auraHelperSFDXRepairDependencies('./', {
            apiVersion: '50.0',
        });
        expect(process.name).toEqual('ah:metadata:local:repair');
        ProcessFactory.auraHelperSFDXRepairDependencies('./');
        ProcessFactory.auraHelperSFDXRepairDependencies('./', {});
        ProcessFactory.auraHelperSFDXRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
        });
        ProcessFactory.auraHelperSFDXRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject']
        });
        ProcessFactory.auraHelperSFDXRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true
        });
        ProcessFactory.auraHelperSFDXRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
        });
        ProcessFactory.auraHelperSFDXRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
            useIgnore: true,
        });
        ProcessFactory.auraHelperSFDXRepairDependencies('./', {
            apiVersion: '50.0',
            onlyCheck: true,
            types: ['CustomObject'],
            compress: true,
            sortOrder: 'order',
            useIgnore: true,
            ignoreFile: 'file'
        });
        ProcessFactory.auraHelperSFDXRepairDependencies('./', {
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
    test('Testing auraHelperSFDXIgnore()', () => {
        const process = ProcessFactory.auraHelperSFDXIgnore('./', {});
        expect(process.name).toEqual('ah:metadata:local:ignore');
        ProcessFactory.auraHelperSFDXIgnore('./');
        ProcessFactory.auraHelperSFDXIgnore('./', {
            types: ['CustomObject'],
        });
        ProcessFactory.auraHelperSFDXIgnore('./', {
            types: ['CustomObject'],
            ignoreFile: 'file'
        });
        ProcessFactory.auraHelperSFDXIgnore('./', {
            types: ['CustomObject'],
            ignoreFile: 'file',
            compress: true,
        });
        ProcessFactory.auraHelperSFDXIgnore('./', {
            types: ['CustomObject'],
            ignoreFile: 'file',
            compress: true,
            sortOrder: 'order'
        });
    });
    test('Testing getSFDXPlugins()', async () => {
        const process = ProcessFactory.getSFDXPlugins();
        try {
            const response = await ProcessHandler.runProcess(process);
            console.log(response);
        } catch (error) {
            
        }
        expect(process.name).toEqual('sfdx-plugins');
    }, 500000);
    test('Testing auraHelperSFDXVersion()', () => {
        const process = ProcessFactory.auraHelperSFDXVersion();
        expect(process.name).toEqual('ah:version');
    });
    test('Testing auraHelperSFDXUpdate()', () => {
        const process = ProcessFactory.auraHelperSFDXUpdate();
        expect(process.name).toEqual('sfdx-plugins:install');
    });
    test('Testing runScanner()', async () => {
        const process = ProcessFactory.runScanner('./', ['Best Practices', "Design", 'Code Style'], './file.txt');
        await ProcessHandler.runProcess(process);
        expect(process.name).toEqual('sfdx:scanner');
    }, 5000000);
    test('Testing installUpdateSFDXScanner()', () => {
        const process = ProcessFactory.installUpdateSFDXScanner();
        expect(process.name).toEqual('sfdx-plugins:install @salesforce/sfdx-scanner');
    });
});