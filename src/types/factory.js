const MetadataDetail = require('./metadataDetail');
const MetadataType = require('./metadataType');
const MetadataObject = require('./metadataObject');
const MetadataItem = require('./metadataItem');
const AuthOrg = require('./authOrg');
const SObject = require('./sObject');
const SObjectField = require('./sObjectField');
const PicklistValue = require('./picklistValue');
const RecordType = require('./recordType');
const Utils = require('../utils/utils');
const StrUtils = require('../utils/strUtils');
const FileReader = require('../fileSystem/fileReader');
const FileChecker = require('../fileSystem/fileChecker');
const XMLParser = require('../languages/xmlParser');
const FILE_SUFFIX_BY_TYPE = require('../values/metadataSuffixByType');
const MetadataTypes = require('../values/metadataTypes');
const NOT_INCLUDED_METADATA = require('../values/notIncludedMetadata');
const UNFILED_PUBLIC_FOLDER = 'unfiled$public';

METADATA_XML_RELATION = {
    Workflow: {
        outboundMessages: {
            fieldKey: 'fullName',
            type: MetadataTypes.WORKFLOW_OUTBOUND_MESSAGE
        },
        knowledgePublishes: {
            fieldKey: 'fullName',
            type: MetadataTypes.WORKFLOW_KNOWLEDGE_PUBLISH
        },
        tasks: {
            fieldKey: 'fullName',
            type: MetadataTypes.WORKFLOW_TASK
        },
        rules: {
            fieldKey: 'fullName',
            type: MetadataTypes.WORKFLOW_RULE
        },
        fieldUpdates: {
            fieldKey: 'fullName',
            type: MetadataTypes.WORKFLOW_FIELD_UPDATE
        },
        alerts: {
            fieldKey: 'fullName',
            type: MetadataTypes.WORKFLOW_ALERT
        }
    },
    SharingRules: {
        sharingCriteriaRules: {
            fieldKey: 'fullName',
            type: MetadataTypes.SHARING_CRITERIA_RULE
        },
        sharingOwnerRules: {
            fieldKey: 'fullName',
            type: MetadataTypes.SHARING_OWNER_RULE
        },
        sharingGuestRules: {
            fieldKey: 'fullName',
            type: MetadataTypes.SHARING_GUEST_RULE
        },
        sharingTerritoryRules: {
            fieldKey: 'fullName',
            type: MetadataTypes.SHARING_TERRITORY_RULE
        }
    },
    AssignmentRules: {
        assignmentRule: {
            fieldKey: 'fullName',
            type: MetadataTypes.ASSIGNMENT_RULE
        }
    },
    AutoResponseRules: {
        autoresponseRule: {
            fieldKey: 'fullName',
            type: MetadataTypes.AUTORESPONSE_RULE
        }
    },
    EscalationRules: {
        escalationRule: {
            fieldKey: 'fullName',
            type: MetadataTypes.ESCALATION_RULE
        }
    },
    MatchingRules: {
        matchingRules: {
            fieldKey: 'fullName',
            type: MetadataTypes.MATCHING_RULE
        }
    },
    CustomLabels: {
        labels: {
            fieldKey: 'fullName',
            type: MetadataTypes.CUSTOM_LABEL
        }
    }
}

class Factory {

    static createMetadataDetails(metadataFromSFDX) {
        const metadataDetails = [];
        if (metadataFromSFDX !== undefined) {
            metadataFromSFDX = Utils.forceArray(metadataFromSFDX);
            for (const metadata of metadataFromSFDX) {
                metadataDetails.push(new MetadataDetail(metadata));
                if (metadata.childXmlNames && metadata.childXmlNames.length > 0) {
                    for (const childXMLName of metadata.childXmlNames) {
                        let suffix = (FILE_SUFFIX_BY_TYPE[childXMLName]) ? FILE_SUFFIX_BY_TYPE[childXMLName] : metadata.suffix;
                        metadataDetails.push(new MetadataDetail(childXMLName, metadata.directoryName, suffix, metadata.inFolder, metadata.metaFile));
                    }
                }
            }
        }
        return metadataDetails;
    }

    static createAuthOrgs(orgs) {
        const authOrgs = [];
        if (orgs !== undefined) {
            orgs = Utils.forceArray(orgs);
            for (const org of orgs) {
                authOrgs.push(new AuthOrg(org));
            }
        }
        return authOrgs;
    }

    static createMetadataTypeFromRecords(metadataTypeName, records, foldersByType, namespacePrefix, downloadAll) {
        const metadataType = new MetadataType(metadataTypeName);
        for (const record of records) {
            const folderDevName = getFolderDeveloperName(foldersByType[metadataTypeName], (record.FolderId || record.FolderName), metadataTypeName !== MetadataTypes.REPORT);
            if (folderDevName === undefined)
                continue;
            if (downloadAll || (!record.NamespacePrefix || record.NamespacePrefix === namespacePrefix)) {
                metadataType.addChild(folderDevName, new MetadataObject(folderDevName));
                metadataType.getChild(folderDevName).addChild(record.DeveloperName, new MetadataItem(record.DeveloperName));
            }
        }
        return metadataType;
    }

    static createMetedataTypeFromResponse(response, metadataTypeName, downloadAll, namespacePrefix) {
        if (!response)
            return undefined;
        let metadataType;
        if (response.status === 0) {
            let dataList = Utils.forceArray(response.result);
            if (dataList === undefined)
                return undefined;
            metadataType = new MetadataType(metadataTypeName);
            for (const obj of dataList) {
                let separator;
                if (metadataTypeName === MetadataTypes.LAYOUT || metadataTypeName === MetadataTypes.CUSTOM_OBJECT_TRANSLATIONS || metadataTypeName === MetadataTypes.FLOW || metadataTypeName === MetadataTypes.STANDARD_VALUE_SET_TRANSLATION) {
                    separator = '-';
                } else {
                    separator = '.';
                }
                let name;
                let item;
                if (obj) {
                    if (obj.fullName.indexOf(separator) != -1) {
                        name = obj.fullName.substring(0, obj.fullName.indexOf(separator));
                        item = obj.fullName.substring(obj.fullName.indexOf(separator) + 1);
                    } else {
                        name = obj.fullName;
                    }
                    if (downloadAll) {
                        if (!item) {
                            metadataType.addChild(name, new MetadataObject(name));
                        } else {
                            metadataType.addChild(name, new MetadataObject(name));
                            metadataType.getChild(name).addChild(item, new MetadataItem(item));
                        }
                    } else {
                        if (!item && (!obj.namespacePrefix || obj.namespacePrefix === namespacePrefix)) {
                            metadataType.addChild(name, new MetadataObject(name));
                        } else if (!obj.namespacePrefix || obj.namespacePrefix === namespacePrefix) {
                            metadataType.addChild(name, new MetadataObject(name));
                            metadataType.getChild(name).addChild(item, new MetadataItem(item));
                        }
                    }
                }
            }
        }
        return metadataType;
    }

    static createNotIncludedMetadataType(metadataTypeName) {
        const metadataType = new MetadataType(metadataTypeName);
        for (const element of NOT_INCLUDED_METADATA[metadataTypeName].elements) {
            metadataType.addChild(new MetadataObject(element));
        }
        return metadataType;
    }

    static createSObjectFromJSONSchema(strJson) {
        let isOnFields = false;
        let isOnRts = false;
        let isOnReference = false;
        let isOnPicklistVal = false;
        let bracketIndent = 0;
        let sObject = new SObject();
        let field = new SObjectField();
        let pickVal = new PicklistValue();
        let rt = new RecordType();
        for (let line of strJson.split('\n')) {
            line = line.trim();
            if (line.indexOf('{') !== -1)
                bracketIndent++;
            else if (line.indexOf('}') !== -1) {
                bracketIndent--;
                if (isOnRts) {
                    if (rt.developerName)
                        sObject.addRecordType(rt.developerName, rt);
                    rt = new RecordType();
                }
                if (isOnPicklistVal) {
                    if (pickVal.value)
                        field.addPicklistValue(pickVal);
                    pickVal = new PicklistValue();
                }
                else if (isOnFields) {
                    if (field.name) {
                        let splits = field.name.split('__');
                        let namespace = undefined;
                        if (splits.length > 2) {
                            namespace = splits[0].trim();
                        }
                        field.setNamespace(namespace);
                        sObject.addField(field.name, field);
                    }
                    field = new SObjectField();
                }
            }
            if (bracketIndent === 1) {
                if (line.indexOf('fields') !== -1 && line.indexOf(':') !== -1 && line.indexOf('[') !== -1)
                    isOnFields = true;
                if (isOnFields && line.indexOf(']') !== -1 && line.indexOf('[') === -1) {
                    isOnFields = false;
                    isOnReference = false;
                    isOnPicklistVal = false;
                    if (field.name) {
                        let splits = field.name.split('__');
                        let namespace = undefined;
                        if (splits.length > 2) {
                            namespace = splits[0].trim();
                        }
                        field.setNamespace(namespace);
                        sObject.addField(field.name, field);
                    }
                    field = new SObjectField();
                }

                if (line.indexOf('recordTypeInfos') !== -1 && line.indexOf(':') !== -1 && line.indexOf('[') !== -1)
                    isOnRts = true;
                if (isOnRts && line.indexOf(']') !== -1 && line.indexOf('[') === -1) {
                    isOnRts = false;
                    if (rt.developerName)
                        sObject.addRecordType(rt.developerName, rt);
                    rt = new RecordType();
                }
            }
            if (isOnReference && line.indexOf(']') !== -1) {
                isOnReference = false;
            }
            if (isOnPicklistVal && line.indexOf(']') !== -1) {
                isOnPicklistVal = false;
            }
            if (bracketIndent === 1 && !isOnFields && !isOnRts) {
                let keyValue = getJSONNameValuePair(line);
                if (keyValue.name === 'name') {
                    let splits = keyValue.value.split('__');
                    let namespace = undefined;
                    if (splits.length > 2) {
                        namespace = splits[0].trim();
                    }
                    sObject.setNamespace(namespace);
                    sObject.setName(keyValue.value);
                }
                if (keyValue.name === 'label')
                    sObject.setLabel(keyValue.value);
                if (keyValue.name === 'labelPlural')
                    sObject.setLabelPlural(keyValue.value);
                if (keyValue.name === 'keyPrefix')
                    sObject.setKeyPrefix(keyValue.value);
                if (keyValue.name === 'queryable')
                    sObject.setQueryable(keyValue.value);
                if (keyValue.name === 'custom')
                    sObject.setCustom(keyValue.value === 'true');
                if (keyValue.name === 'customSetting')
                    sObject.setCustomSetting(keyValue.value === 'true')
            } else if (isOnReference && line.indexOf('[') === -1) {
                field.addReferenceTo(StrUtils.replace(line, '"', '').trim());
            } else if (isOnPicklistVal && line.indexOf('[') === -1) {
                let keyValue = getJSONNameValuePair(line);
                if (keyValue.name === 'active')
                    pickVal.setActive(keyValue.value === 'true')
                if (keyValue.name === 'defaultValue')
                    pickVal.setDefaultValue(keyValue.value === 'true');
                if (keyValue.name === 'label')
                    pickVal.setLabel(keyValue.value);
                if (keyValue.name === 'value')
                    pickVal.setValue(keyValue.value);
            } else if (isOnFields && !isOnPicklistVal && !isOnReference) {
                if (bracketIndent === 2) {
                    let keyValue = getJSONNameValuePair(line);
                    if (keyValue.name === 'name')
                        field.setName(keyValue.value);
                    if (keyValue.name === 'label')
                        field.setLabel(keyValue.value);
                    if (keyValue.name === 'type')
                        field.setType(keyValue.value);
                    if (keyValue.name === 'length')
                        field.setLenght(keyValue.value)
                    if (keyValue.name === 'custom')
                        field.setCustom(keyValue.value === 'true')
                    if (keyValue.name === 'nillable')
                        field.setNillable(keyValue.value === 'true');
                    if (keyValue.name === 'relationshipName' && keyValue.value != 'null')
                        field.setRelationshipName(keyValue.value);
                    if (keyValue.name === "referenceTo" && line.indexOf(']') === -1) {
                        isOnReference = true;
                        isOnPicklistVal = false;
                    }
                    if (keyValue.name === "picklistValues" && line.indexOf(']') === -1) {
                        isOnPicklistVal = true;
                        isOnReference = false;
                    }
                }
            } else if (isOnRts) {
                if (bracketIndent === 2) {
                    let keyValue = getJSONNameValuePair(line);
                    if (keyValue.name === 'name')
                        rt.setName(keyValue.value);
                    if (keyValue.name === 'developerName')
                        rt.setDeveloperName(keyValue.value);
                    if (keyValue.name === 'defaultRecordTypeMapping')
                        rt.setDefault(keyValue.value === 'true');
                }
            }
        }
        if (!sObject.name)
            return undefined;
        return sObject;
    }

    static createFolderMetadataMap(metadataDetails) {
        let folderMetadataMap = {};
        for (const metadataDetail of metadataDetails) {
            if (metadataDetail.xmlName === MetadataTypes.CUSTOM_FIELD) {
                folderMetadataMap[metadataDetail.directoryName + '/fields'] = metadataDetail;
            } else if (metadataDetail.xmlName === MetadataTypes.INDEX) {
                folderMetadataMap[metadataDetail.directoryName + '/indexes'] = metadataDetail;
            } else if (metadataDetail.xmlName === MetadataTypes.BUSINESS_PROCESS) {
                folderMetadataMap[metadataDetail.directoryName + '/businessProcesses'] = metadataDetail;
            } else if (metadataDetail.xmlName === MetadataTypes.COMPACT_LAYOUT) {
                folderMetadataMap[metadataDetail.directoryName + '/compactLayouts'] = metadataDetail;
            } else if (metadataDetail.xmlName === MetadataTypes.RECORD_TYPE) {
                folderMetadataMap[metadataDetail.directoryName + '/recordTypes'] = metadataDetail;
            } else if (metadataDetail.xmlName === MetadataTypes.WEBLINK) {
                folderMetadataMap[metadataDetail.directoryName + '/webLinks'] = metadataDetail;
            } else if (metadataDetail.xmlName === MetadataTypes.VALIDATION_RULE) {
                folderMetadataMap[metadataDetail.directoryName + '/validationRules'] = metadataDetail;
            } else if (metadataDetail.xmlName === MetadataTypes.SHARING_REASON) {
                folderMetadataMap[metadataDetail.directoryName + '/sharingReasons'] = metadataDetail;
            } else if (metadataDetail.xmlName === MetadataTypes.LISTVIEW) {
                folderMetadataMap[metadataDetail.directoryName + '/listViews'] = metadataDetail;
            } else if (metadataDetail.xmlName === MetadataTypes.FIELD_SET) {
                folderMetadataMap[metadataDetail.directoryName + '/fieldSets'] = metadataDetail;
            } else if (!folderMetadataMap[metadataDetail.directoryName]) {
                folderMetadataMap[metadataDetail.directoryName] = metadataDetail;
            }
        }
        return folderMetadataMap;
    }

    static createMetadataTypesFromFileSystem(folderMetadataMap, root) {
        let metadata = {};
        let projectConfig = getProjectConfig(root);
        for (const packageDirectory of projectConfig.packageDirectories) {
            let directory = root + '/' + packageDirectory.path + '/main/default';
            let folders = FileReader.readDirSync(directory);
            for (const folder of folders) {
                let metadataType = folderMetadataMap[folder];
                if (metadataType) {
                    let folderPath = directory + '/' + folder;
                    if (folder == 'objects') {
                        metadata = getCustomObjectsMetadata(metadata, folderPath);
                    } else if (folder == 'approvalProcesses') {
                        metadata[metadataType.xmlName] = getMetadataFromFolders(folderPath, metadataType, '.');
                    } else if (folder == 'customMetadata') {
                        metadata[metadataType.xmlName] = getMetadataFromFolders(folderPath, metadataType, '.');
                    } else if (folder == 'dashboards') {
                        metadata[metadataType.xmlName] = getDashboardsMetadataFromFolder(folderPath, metadataType);
                    } else if (folder == 'documents') {
                        metadata[metadataType.xmlName] = getDocumentsMetadataFromFolder(folderPath, metadataType);
                    } else if (folder == 'duplicateRules') {
                        metadata[metadataType.xmlName] = getMetadataFromFolders(folderPath, metadataType, '.');
                    } else if (folder == 'email') {
                        metadata[metadataType.xmlName] = getEmailTemplateMetadataFromFolder(folderPath, metadataType);
                    } else if (folder == 'flows') {
                        metadata[metadataType.xmlName] = getFlowsMetadataFromFolder(folderPath, metadataType);
                    } else if (folder == 'layouts') {
                        metadata[metadataType.xmlName] = getLayoutsMetadataFromFolder(folderPath, metadataType);
                    } else if (folder == 'objectTranslations') {
                        metadata[metadataType.xmlName] = getMetadataFromFolders(folderPath, metadataType, '-');
                    } else if (folder == 'reports') {
                        metadata[metadataType.xmlName] = getReportsMetadataFromFolder(folderPath, metadataType);
                    } else if (folder == 'quickActions') {
                        metadata[metadataType.xmlName] = getMetadataFromFolders(folderPath, metadataType);
                    } else if (folder == 'standardValueSetTranslations') {
                        metadata[metadataType.xmlName] = getStandardValueSetTranslationMetadataFromFolder(folderPath, metadataType);
                    } else if (folder == 'lwc') {
                        let newMetadata = new MetadataType(metadataType.xmlName, false, folderPath, metadataType.suffix);
                        newMetadata.childs = getMetadataObjects(folderPath, true);
                        if (newMetadata.childs && Object.keys(newMetadata.childs).length > 0) {
                            metadata[metadataType.xmlName] = newMetadata;
                        }
                    } else if (folder == 'aura') {
                        let newMetadata = new MetadataType(metadataType.xmlName, false, folderPath, metadataType.suffix);
                        newMetadata.childs = getMetadataObjects(folderPath, true);
                        if (newMetadata.childs && Object.keys(newMetadata.childs).length > 0) {
                            metadata[metadataType.xmlName] = newMetadata;
                        }
                    } else if (METADATA_XML_RELATION[metadataType.xmlName]) {
                        getMetadataFromFiles(metadataType, metadata, folderPath);
                    } else {
                        let newMetadata = new MetadataType(metadataType.xmlName, false, folderPath, metadataType.suffix);
                        let childs = getMetadataObjects(folderPath);
                        if (childs && Object.keys(childs).length > 0) {
                            newMetadata.childs = childs;
                            metadata[metadataType.xmlName] = newMetadata;
                        }
                    }
                }
            }
        }
        metadata = Utils.orderMetadata(metadata);
        return metadata;
    }
}
module.exports = Factory;

function getProjectConfig(projectFolder) {
    if(FileChecker.isExists(projectFolder))
        return JSON.parse(FileReader.readFileSync(projectFolder + '/sfdx-project.json'));
    return undefined;
}

function getJSONNameValuePair(line) {
    let tmpLine = StrUtils.replace(StrUtils.replace(line, '}', ''), '{', '');
    if (tmpLine.indexOf('[') !== -1 && tmpLine.indexOf(']') === -1)
        tmpLine = StrUtils.replace(tmpLine, '[', '');
    let splits = tmpLine.split(':');
    let fieldName;
    let fieldValue;
    if (splits.length >= 0 && splits[0]) {
        fieldName = StrUtils.replace(StrUtils.replace(splits[0].trim(), "'", ''), '"', '');
    }
    if (splits.length >= 1 && splits[1]) {
        fieldValue = StrUtils.replace(StrUtils.replace(splits[1].trim(), "'", ''), '"', '');
        if (fieldValue.endsWith(","))
            fieldValue = fieldValue.substring(0, fieldValue.length - 1);
        else
            fieldValue = fieldValue.substring(0, fieldValue.length);
    }
    return {
        name: fieldName,
        value: fieldValue
    };
}

function getFolderDeveloperName(folders, idOrName, searchById) {
    if (folders) {
        if (idOrName === 'Private Reports')
            return undefined;
        for (const folder of folders) {
            if (searchById && folder.Id === idOrName) {
                return folder.DeveloperName;
            } else if (!searchById && folder.Name === idOrName && idOrName !== undefined) {
                return folder.DeveloperName
            }
        }
    }
    return UNFILED_PUBLIC_FOLDER;
}

function getMetadataFromFiles(metadataType, metadata, folderPath) {
    let mainObject = new MetadataDetail(metadataType.xmlName, false, folderPath, metadataType.suffix);
    mainObject.childs = getMetadataObjects(folderPath, false);
    metadata[metadataType.xmlName] = mainObject;
    let files = FileReader.readDirSync(folderPath);
    let collectionsData = METADATA_XML_RELATION[metadataType.xmlName];
    for (const file of files) {
        let path = folderPath + '/' + file;
        let xmlData = XMLParser.parseXML(FileReader.readFileSync(path));
        if (metadataType.xmlName === MetadataTypes.CUSTOM_LABELS) {
            if (xmlData[metadataType.xmlName]) {
                Object.keys(collectionsData).forEach(function (collectionName) {
                    let collectionData = collectionsData[collectionName];
                    if (xmlData[metadataType.xmlName][collectionName]) {
                        xmlData[metadataType.xmlName][collectionName] = Utils.forceArray(xmlData[metadataType.xmlName][collectionName]);
                        for (let xmlElement of xmlData[metadataType.xmlName][collectionName]) {
                            let elementKey = xmlElement[collectionData.fieldKey];
                            if (!metadata[collectionData.type])
                                metadata[collectionData.type] = new MetadataType(collectionData.type, false, folderPath, metadataType.suffix);
                            if (!metadata[collectionData.type].childs[elementKey])
                                metadata[collectionData.type].childs[elementKey] = new MetadataObject(elementKey, false, path);
                        }
                    }
                });
            }
        } else {
            if (xmlData[metadataType.xmlName]) {
                Object.keys(collectionsData).forEach(function (collectionName) {
                    let collectionData = collectionsData[collectionName];
                    if (xmlData[metadataType.xmlName][collectionName]) {
                        let sObj = file.substring(0, file.indexOf('.'));
                        if (!metadata[collectionData.type])
                            metadata[collectionData.type] = new MetadataType(collectionData.type, false, folderPath, metadataType.suffix);
                        if (!metadata[collectionData.type].childs[sObj])
                            metadata[collectionData.type].childs[sObj] = new MetadataObject(sObj, false);
                        xmlData[metadataType.xmlName][collectionName] = Utils.forceArray(xmlData[metadataType.xmlName][collectionName]);
                        for (let xmlElement of xmlData[metadataType.xmlName][collectionName]) {
                            let elementKey = xmlElement[collectionData.fieldKey];
                            if (!metadata[collectionData.type].childs[sObj].childs[elementKey])
                                metadata[collectionData.type].childs[sObj].childs[elementKey] = new MetadataItem(elementKey, false, path);
                        }
                    }
                });
            }
        }
    }
}

function getMetadataFromFolders(folderPath, type, separator) {
    let files = FileReader.readDirSync(folderPath);
    let metadataType = new MetadataType(type.xmlName, false, folderPath, type.suffix);
    let metadataObjects = {};
    for (const file of files) {
        let path = folderPath + '/' + file;
        let fileParts = file.split(separator);
        let sObj = fileParts[0];
        let metadataName = fileParts[1];
        if (!metadataObjects[sObj])
            metadataObjects[sObj] = new MetadataObject(sObj, false, folderPath);
        if (metadataName && metadataName.length > 0 && !metadataObjects[sObj].childs[metadataName])
            metadataObjects[sObj].childs[metadataName] = new MetadataItem(metadataName, false, path);
    }
    metadataType.childs = metadataObjects;
    return metadataType;
}

function getDashboardsMetadataFromFolder(folderPath, type) {
    let files = FileReader.readDirSync(folderPath);
    let metadataType = new MetadataType(type.xmlName, false, folderPath, type.suffix);
    let metadataObjects = {};
    for (const dashboardFolder of files) {
        let fPath = folderPath + '/' + dashboardFolder;
        if (dashboardFolder.indexOf('.') === -1) {
            if (!metadataObjects[dashboardFolder])
                metadataObjects[dashboardFolder] = new MetadataObject(dashboardFolder, false, fPath);
            let dashboards = FileReader.readDirSync(fPath);
            for (const dashboard of dashboards) {
                let path = fPath + '/' + dashboard;
                let name = dashboard.substring(0, dashboard.indexOf('.'));
                if (name && name.length > 0 && !metadataObjects[dashboardFolder].childs[name])
                    metadataObjects[dashboardFolder].childs[name] = new MetadataItem(name, false, path);
            }
        }
    }
    metadataType.childs = metadataObjects;
    return metadataType;
}

function getReportsMetadataFromFolder(folderPath, type) {
    let files = FileReader.readDirSync(folderPath);
    let metadataType = new MetadataType(type.xmlName, false, folderPath, type.suffix);
    let metadataObjects = {};
    for (const reportsFolder of files) {
        let fPath = folderPath + '/' + reportsFolder;
        if (reportsFolder.indexOf('.') === -1) {
            if (!metadataObjects[reportsFolder])
                metadataObjects[reportsFolder] = new MetadataObject(reportsFolder, false, fPath);
            let reports = FileReader.readDirSync(fPath);
            for (const report of reports) {
                let path = fPath + '/' + report;
                let name = report.substring(0, report.indexOf('.'));
                if (name && name.length > 0 && !metadataObjects[reportsFolder].childs[name])
                    metadataObjects[reportsFolder].childs[name] = new MetadataItem(name, false, path);
            }
        }
    }
    metadataType.childs = metadataObjects;
    return metadataType;
}

function getDocumentsMetadataFromFolder(folderPath, type) {
    let files = FileReader.readDirSync(folderPath);
    let metadataType = new MetadataType(type.xmlName, false, folderPath, type.suffix);
    let metadataObjects = {};
    for (const docFolder of files) {
        let fPath = folderPath + '/' + docFolder;
        if (docFolder.indexOf('.') === -1) {
            if (!metadataObjects[docFolder])
                metadataObjects[docFolder] = new MetadataObject(docFolder, false, fPath);
            let docs = FileReader.readDirSync(fPath);
            for (const doc of docs) {
                let path = fPath + '/' + doc;
                if (doc.indexOf('.document-meta.xml') === -1) {
                    if (doc && doc.length > 0 && !metadataObjects[docFolder].childs[doc])
                        metadataObjects[docFolder].childs[doc] = new MetadataItem(doc, false, path);
                }
            }
        }
    }
    metadataType.childs = metadataObjects;
    return metadataType;
}

function getEmailTemplateMetadataFromFolder(folderPath, type) {
    let files = FileReader.readDirSync(folderPath);
    let metadataType = new MetadataType(type.xmlName, false, folderPath, type.suffix);
    let metadataObjects = {};
    for (const emailFolder of files) {
        let fPath = folderPath + '/' + emailFolder;
        if (emailFolder.indexOf('.') === -1) {
            if (!metadataObjects[emailFolder])
                metadataObjects[emailFolder] = new MetadataObject(emailFolder, false, fPath);
            let emails = FileReader.readDirSync(folderPath + '/' + emailFolder);
            for (const email of emails) {
                let path = fPath + '/' + email;
                let name = email.substring(0, email.indexOf('.'));
                if (name && name.length > 0 && !metadataObjects[emailFolder].childs[name])
                    metadataObjects[emailFolder].childs[name] = new MetadataItem(name, false, path);
            }
        }
    }
    metadataType.childs = metadataObjects;
    return metadataType;
}

function getFlowsMetadataFromFolder(folderPath, type) {
    let files = FileReader.readDirSync(folderPath);
    let metadataType = new MetadataType(type.xmlName, false, folderPath, type.suffix);
    let metadataObjects = {};
    for (const flowFile of files) {
        let path = folderPath + '/' + flowFile;
        let name = flowFile.substring(0, flowFile.indexOf('.'));
        let flow = undefined
        let version = undefined;
        if (name.indexOf('-') !== -1) {
            flow = name.substring(0, name.indexOf('-')).trim();
            version = name.substring(name.indexOf('-') + 1).trim();
        } else {
            flow = name.trim();
        }
        if (!metadataObjects[flow])
            metadataObjects[flow] = new MetadataObject(flow, false, folderPath);
        if (version && version.length > 0)
            metadataObjects[flow].childs[version] = new MetadataItem(version, false, path);
    }
    metadataType.childs = metadataObjects;
    return metadataType;
}

function getStandardValueSetTranslationMetadataFromFolder(folderPath) {
    let files = FileReader.readDirSync(folderPath);
    let metadataType = new MetadataType(type.xmlName, false, folderPath);
    let metadataObjects = {};
    for (const translationFile of files) {
        let path = folderPath + '/' + flowFile;
        let name = translationFile.substring(0, translationFile.indexOf('.'));
        let translation = undefined
        let version = undefined;
        if (name.indexOf('-') !== -1) {
            translation = name.substring(0, name.indexOf('-')).trim();
            version = name.substring(name.indexOf('-') + 1).trim();
        } else {
            translation = name.trim();
        }
        if (!metadataObjects[translation])
            metadataObjects[translation] = new MetadataObject(translation, false, folderPath);
        if (version && version.length > 0)
            metadataObjects[translation].childs[version] = new MetadataItem(version, false, path);
    }
    metadataType.childs = metadataObjects;
    return metadataType;
}

function getLayoutsMetadataFromFolder(folderPath, type) {
    let files = FileReader.readDirSync(folderPath);
    let metadataType = new MetadataType(type.xmlName, false, folderPath, type.suffix);
    let metadataObjects = {};
    for (const layoutFile of files) {
        let path = folderPath + '/' + layoutFile;
        let name = layoutFile.substring(0, layoutFile.indexOf('.'));
        let sObj = name.substring(0, name.indexOf('-')).trim();
        let layout = name.substring(name.indexOf('-') + 1).trim();
        if (!metadataObjects[sObj])
            metadataObjects[sObj] = new MetadataObject(sObj, false, folderPath);
        if (layout && layout.length > 0)
            metadataObjects[sObj].childs[layout] = new MetadataItem(layout, false, path);
    }
    metadataType.childs = metadataObjects;
    return metadataType;
}

function getCustomObjectsMetadata(metadata, objectsPath) {
    let files = FileReader.readDirSync(objectsPath);
    metadata[MetadataTypes.CUSTOM_OBJECT] = new MetadataType(MetadataTypes.CUSTOM_OBJECT, false, objectsPath, 'object');
    metadata[MetadataTypes.CUSTOM_FIELD] = new MetadataType(MetadataTypes.CUSTOM_FIELD, false, objectsPath, 'field');
    metadata[MetadataTypes.RECORD_TYPE] = new MetadataType(MetadataTypes.RECORD_TYPE, false, objectsPath, 'recordType');
    metadata[MetadataTypes.LISTVIEW] = new MetadataType(MetadataTypes.LISTVIEW, false, objectsPath, 'listView');
    metadata[MetadataTypes.BUSINESS_PROCESS] = new MetadataType(MetadataTypes.BUSINESS_PROCESS, false, objectsPath, 'businessProcess');
    metadata[MetadataTypes.COMPACT_LAYOUT] = new MetadataType(MetadataTypes.COMPACT_LAYOUT, false, objectsPath, 'compactLayout');
    metadata[MetadataTypes.VALIDATION_RULE] = new MetadataType(MetadataTypes.VALIDATION_RULE, false, objectsPath, 'validationRule');
    metadata[MetadataTypes.WEBLINK] = new MetadataType(MetadataTypes.WEBLINK, false, objectsPath, 'webLink');
    for (const objFolder of files) {
        let objPath = objectsPath + '/' + objFolder;
        let objFilePath = objPath + '/' + objFolder + '.object-meta.xml';
        if (FileChecker.isExists(objPath + '/fields')) {
            let fields = new MetadataObject(objFolder, false, objPath + '/fields');
            fields.childs = getMetadataItems(objPath + '/fields', false);
            metadata[MetadataTypes.CUSTOM_FIELD].childs[objFolder] = fields;
        }
        if (FileChecker.isExists(objPath + '/recordTypes')) {
            let recordTypes = new MetadataObject(objFolder, false, objPath + '/recordTypes');
            recordTypes.childs = getMetadataItems(objPath + '/recordTypes');
            metadata[MetadataTypes.RECORD_TYPE].childs[objFolder] = recordTypes;
        }
        if (FileChecker.isExists(objPath + '/listViews')) {
            let listviews = new MetadataObject(objFolder, false, objPath + '/listViews');
            listviews.childs = getMetadataItems(objPath + '/listViews');
            metadata[MetadataTypes.LISTVIEW].childs[objFolder] = listviews;
        }
        if (FileChecker.isExists(objPath + '/businessProcesses')) {
            let bussinesProcesses = new MetadataObject(objFolder, false, objPath + '/businessProcesses');
            bussinesProcesses.childs = getMetadataItems(objPath + '/businessProcesses');
            metadata[MetadataTypes.BUSINESS_PROCESS].childs[objFolder] = bussinesProcesses;
        }
        if (FileChecker.isExists(objPath + '/compactLayouts')) {
            let compactLayouts = new MetadataObject(objFolder, false, objPath + '/compactLayouts');
            compactLayouts.childs = getMetadataItems(objPath + '/compactLayouts');
            metadata[MetadataTypes.COMPACT_LAYOUT].childs[objFolder] = compactLayouts;
        }
        if (FileChecker.isExists(objPath + '/validationRules')) {
            let validationRules = new MetadataObject(objFolder, false, objPath + '/validationRules');
            validationRules.childs = getMetadataItems(objPath + '/validationRules');
            metadata[MetadataTypes.VALIDATION_RULE].childs[objFolder] = validationRules;
        }
        if (FileChecker.isExists(objPath + '/webLinks')) {
            let weblinks = new MetadataObject(objFolder, false, objPath + '/webLinks');
            weblinks.childs = getMetadataItems(objPath + '/webLinks');
            metadata[MetadataTypes.WEBLINK].childs[objFolder] = weblinks;
        }
        if (FileChecker.isExists(objFilePath)) {
            metadata[MetadataTypes.CUSTOM_OBJECT].childs[objFolder] = new MetadataObject(objFolder, false, objFilePath);
        }
    }
    return metadata;
}

function getMetadataObjects(folderPath, onlyFolders) {
    let objects;
    let objNamesAdded = [];
    if (FileChecker.isExists(folderPath)) {
        let files = FileReader.readDirSync(folderPath);
        if (files.length > 0)
            objects = {}
        for (const file of files) {
            let path = folderPath + '/' + file;
            if (onlyFolders && file.indexOf('.') == -1) {
                if (!objNamesAdded.includes(file)) {
                    objects[file] = new MetadataObject(file, false, path);
                    objNamesAdded.push(file);
                }
            } else if (!onlyFolders) {
                let name = file.substring(0, file.indexOf('.'));
                if (!objNamesAdded.includes(name)) {
                    objects[name] = new MetadataObject(name, false, path);
                    objNamesAdded.push(name);
                }
            }
        }
    }
    return objects;
}

function getMetadataItems(folderPath, onlyFolders) {
    let items = {};
    let itemsAdded = [];
    if (FileChecker.isExists(folderPath)) {
        let files = FileReader.readDirSync(folderPath);
        for (const file of files) {
            let path = folderPath + '/' + file;
            if (onlyFolders && file.indexOf('.') == -1) {
                if (!itemsAdded.includes(file)) {
                    items[file] = new MetadataItem(file, false, path);
                    itemsAdded.push(file);
                }
            } else {
                let name = file.substring(0, file.indexOf('.'));
                if (!itemsAdded.includes(name)) {
                    items[name] = new MetadataItem(name, false, path);
                    itemsAdded.push(name);
                }
            }
        }
    }
    return items;
}