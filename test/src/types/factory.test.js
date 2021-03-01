const AuthOrg = require('../../../src/types/authOrg');
const TypesFactory = require('../../../src/types/factory');
const fs = require('fs');

describe('Testing ./src/types/factory.js', () => {
    test('Testing createMetadataDetails()', () => {
        const objects = [
            {
                directoryName: 'objects',
                inFolder: true,
                metaFile: true,
                suffix: 'object',
                xmlName: 'CustomObject',
                childXmlNames: [
                    'CustomField',
                    'RecordType',
                    'ValidationRule',
                    'Index',
                    'CompactLayout',
                    'BussinesProcess'
                ]
            },
            {
                directoryName: 'layouts',
                inFolder: true,
                metaFile: true,
                suffix: 'layout',
                xmlName: 'Layout',
            }
        ];
        const result = TypesFactory.createMetadataDetails(objects);
        expect(result.length).toEqual(8);
    });
    test('Testing createAuthOrgs()', () => {
        const authOrgs = [
            new AuthOrg('alias1', 'username1', 'orgId1', 'instanceURL1', 'accessToken1', 'oauthMethod1'),
            new AuthOrg('alias2', 'username2', 'orgId2', 'instanceURL2', 'accessToken2', 'oauthMethod2'),
            new AuthOrg('alias3', 'username3', 'orgId3', 'instanceURL3', 'accessToken3', 'oauthMethod3'),
        ];
        const result = TypesFactory.createAuthOrgs(authOrgs);
        expect(result.length).toEqual(3);
    });
    test('Testing createMetadataTypeFromRecords()', () => {
        const records = [
            {
                FolderName: 'FolderName1',
                NamespacePrefix: '',
                DeveloperName: 'devName1'
            },
            {
                FolderName: 'Private Reports',
                NamespacePrefix: '',
                DeveloperName: 'devName3'
            },
            {
                FolderName: 'FolderName2',
                NamespacePrefix: '',
                DeveloperName: 'devName2'
            }
        ];
        const foldersByType = {
            Report: [
                {
                    Name: 'FolderName1',
                    Id: 'folder1',
                    DeveloperName: 'folder1',
                },
                {
                    Name: 'FolderName2',
                    Id: 'folder2',
                    DeveloperName: 'folder2',
                }
            ]
        };
        const metadataType = TypesFactory.createMetadataTypeFromRecords('Report', records, foldersByType, '', true);
        expect(metadataType.name).toEqual('Report');
        expect(metadataType.getChild('folder1').name).toEqual('folder1');
        expect(metadataType.getChild('folder2').name).toEqual('folder2');
        expect(metadataType.getChild('folder1').getChild('devName1').name).toEqual('devName1');
        expect(metadataType.getChild('folder2').getChild('devName2').name).toEqual('devName2');
    });
    test('Testing createMetedataTypeFromResponse()', () => {
        const response1 = {
            status: 0,
            result: [
                {
                    fullName: 'Account',
                },
                {
                    fullName: 'Case',
                }
            ]
        }    
        const metadataType1 = TypesFactory.createMetedataTypeFromResponse(response1, 'CustomObject', true, '');
        expect(metadataType1.name).toEqual('CustomObject');
        expect(metadataType1.getChild('Account').name).toEqual('Account');
        expect(metadataType1.getChild('Case').name).toEqual('Case');
        const response2 = {
            status: 0,
            result: [
                {
                    fullName: 'Account.Name',
                },
                {
                    fullName: 'Account.FirstName',
                }
            ]
        };
        const metadataType2 = TypesFactory.createMetedataTypeFromResponse(response2, 'CustomField', true, '');
        expect(metadataType2.name).toEqual('CustomField');
        expect(metadataType2.getChild('Account').name).toEqual('Account');
        expect(metadataType2.getChild('Account').getChild('Name').name).toEqual('Name');
        expect(metadataType2.getChild('Account').getChild('FirstName').name).toEqual('FirstName');
        const response3 = {
            status: 0,
            result: [
                {
                    fullName: 'Account',
                },
                {
                    fullName: 'Case',
                }
            ]
        };
        const metadataType3 = TypesFactory.createMetedataTypeFromResponse(response3, 'CustomObject', false, '');
        expect(metadataType3.name).toEqual('CustomObject');
        expect(metadataType3.getChild('Account').name).toEqual('Account');
        expect(metadataType3.getChild('Case').name).toEqual('Case');
        const response4 = {
            status: 0,
            result: [
                {
                    fullName: 'Account.Name',
                },
                {
                    fullName: 'Account.FirstName',
                }
            ]
        };
        const metadataType4 = TypesFactory.createMetedataTypeFromResponse(response4, 'CustomField', false, '');
        expect(metadataType4.name).toEqual('CustomField');
        expect(metadataType4.getChild('Account').name).toEqual('Account');
        expect(metadataType4.getChild('Account').getChild('Name').name).toEqual('Name');
        expect(metadataType4.getChild('Account').getChild('FirstName').name).toEqual('FirstName');
        const response5 = {
            status: 0,
            result: [
                {
                    fullName: 'Account-Account_Layout1',
                },
                {
                    fullName: 'Account-Account_Layout2',
                }
            ]
        };
        const metadataType5 = TypesFactory.createMetedataTypeFromResponse(response5, 'Layout', false, '');
        expect(metadataType5.name).toEqual('Layout');
        expect(metadataType5.getChild('Account').name).toEqual('Account');
        expect(metadataType5.getChild('Account').getChild('Account_Layout1').name).toEqual('Account_Layout1');
        expect(metadataType5.getChild('Account').getChild('Account_Layout2').name).toEqual('Account_Layout2');
        
        const response6 = undefined;
        const metadataType6 = TypesFactory.createMetedataTypeFromResponse(response6, 'Layout', false, '');
        expect(metadataType6).toBeUndefined();

        const response7 = {
            status: 0,
            result: undefined
        };
        const metadataType7 = TypesFactory.createMetedataTypeFromResponse(response7, 'Layout', false, '');
        expect(metadataType7).toBeUndefined();
    });
    test('Testing createNotIncludedMetadataType()', () => {
        const metadataType = TypesFactory.createNotIncludedMetadataType('StandardValueSet');
        expect(metadataType.name).toEqual('StandardValueSet');
    });
    test('Testing createSObjectFromJSONSchema()', () => {
        const data = fs.readFileSync('./test/assets/describeSObject.json', 'utf8');
        const Sobject = TypesFactory.createSObjectFromJSONSchema(data);
        expect(Sobject.name).toEqual('Account');
    });
    test('Testing createMetadataTypesFromFileSystem()', () => {
        const metadata = JSON.parse(fs.readFileSync('./test/assets/metadataTypes.json', 'utf8'));
        const metadataDetails = TypesFactory.createMetadataDetails(metadata.result.metadataObjects);
        const folderMetadataMap = TypesFactory.createFolderMetadataMap(metadataDetails);
        const metadataTypes = TypesFactory.createMetadataTypesFromFileSystem(folderMetadataMap, './test/assets/SFDXProject');
        expect(metadataTypes['CustomObject'].name).toEqual('CustomObject');
    });
});