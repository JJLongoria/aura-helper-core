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
const FILE_SUFFIX_BY_TYPE = require('../values/metadataSuffixByType');
const MetadataTypes = require('../values/metadataTypes');
const NOT_INCLUDED_METADATA = require('../values/notIncludedMetadata');
const UNFILED_PUBLIC_FOLDER = 'unfiled$public';

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

    static createMetadataFromJSONSchema(strJson) {
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
                    if (rt.name)
                        sObject.addRecordType(rt);
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
                    if (rt.name)
                        sObject.addRecordType(rt);
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
}
module.exports = Factory;

function getJSONNameValuePair(line) {
    let tmpLine = StrUtils.replace(StrUtils.replace(line, '}', ''), '{', '');
    if (tmpLine.indexOf('[') !== -1 && tmpLine.indexOf(']') === -1)
        tmpLine = StrUtils.replace(tmpLine, '[', '');
    let splits = tmpLine.split(':');
    let fieldName;
    let fieldValue;
    if (splits.length >= 0 && splits[0]){
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