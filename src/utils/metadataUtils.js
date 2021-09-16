const MetadataType = require('../types/metadataType');
const MetadataObject = require('../types/metadataObject');
const MetadataItem = require('../types/metadataItem');
const StrUtils = require('../utils/strUtils');

/**
 * Class with utils methods to work with Aura Helper Metadata JSON Format or other Metadata Types like SObjects or XML Metadata Files
 */
class MetadataUtils {

    /**
     * Method to alphabetic sort a Metadata JSON
     * @param {Object} metadata Metadata JSON to sort
     * @param {Boolean} [deserialize] true if want to ensure the response are MetadataType, MetadataObject and MetadataItem instances.
     * 
     * @returns {Object} Returns the JSON data sort in alphabetic order 
     */
    static orderMetadata(metadata, deserialize) {
        let orderedMetadata = {};
        Object.keys(metadata).sort(function (keyA, keyB) {
            return keyA.toLowerCase().localeCompare(keyB.toLowerCase());
        }).forEach(function (key) {
            orderedMetadata[key] = metadata[key];
            if (metadata[key] && metadata[key].childs && Object.keys(metadata[key].childs).length > 0) {
                orderedMetadata[key].childs = MetadataUtils.orderMetadata(metadata[key].childs, false);
            }
        });
        if(!deserialize)
            return orderedMetadata;
        return deserializeMetadataTypes(orderedMetadata);
    }

    /**
     * Method to alphabetic sort a SObjects JSON
     * @param {Object} sObjects SObjects JSON to sort
     * 
     * @returns {Object} Returns the JSON data sort in alphabetic order
     */
    static orderSObjects(sObjects) {
        let orderedSObjects = {};
        Object.keys(sObjects).sort(function (keyA, keyB) {
            return keyA.toLowerCase().localeCompare(keyB.toLowerCase());
        }).forEach(function (key) {
            orderedSObjects[key] = sObjects[key];
            if (sObjects[key] && sObjects[key].fields && Object.keys(sObjects[key].fields).length > 0) {
                orderedSObjects[key].fields = MetadataUtils.orderSObjects(sObjects[key].fields);
            }
        });
        return orderedSObjects;
    }

    /**
     * Method to compare the Metadata JSON as source with the Metadata JSON as target with get the data that exists on source but does not exists on target
     * @param {Object} metadataSource Metadata JSON source to compare
     * @param {Object} metadataTarget Metadata JSON target to compare
     * 
     * @returns {Object} Returns a Metadata JSON with the existing data on source but not exists on target
     */
    static compareMetadata(metadataSource, metadataTarget) {
        let metadataOnOrg = {};
        Object.keys(metadataSource).forEach(function (key) {
            let metadataTypeFromFileSystem = metadataSource[key];
            let metadataTypeFromOrg = metadataTarget[key];
            if (metadataTypeFromOrg) {
                Object.keys(metadataTypeFromOrg.childs).forEach(function (childKey) {
                    let childFromOrg = metadataTypeFromOrg.childs[childKey];
                    let childFromFile = metadataTypeFromFileSystem.childs[childKey];
                    let grandChildsFromOrgKeys = (childFromOrg && childFromOrg.childs) ? Object.keys(childFromOrg.childs) : undefined;
                    if (grandChildsFromOrgKeys && grandChildsFromOrgKeys.length > 0) {
                        Object.keys(childFromOrg.childs).forEach(function (grandChildKey) {
                            let grandChildFromOrg = childFromOrg.childs[grandChildKey];
                            let grandChildFromFile = (childFromFile && childFromFile.childs) ? childFromFile.childs[grandChildKey] : undefined;
                            if (!grandChildFromFile) {
                                if (!metadataOnOrg[key]) {
                                    let clonedMetadata = JSON.parse(JSON.stringify(metadataTypeFromOrg));
                                    clonedMetadata.childs = {};
                                    metadataOnOrg[key] = clonedMetadata;
                                }
                                if (!metadataOnOrg[key].childs[childKey]) {
                                    let clonedObject = JSON.parse(JSON.stringify(childFromOrg));
                                    clonedObject.childs = {};
                                    metadataOnOrg[key].childs[childKey] = clonedObject;
                                }
                                metadataOnOrg[key].childs[childKey].childs[grandChildKey] = grandChildFromOrg;
                            }
                        });
                    } else {
                        if (!childFromFile) {
                            if (!metadataOnOrg[key]) {
                                let clonedMetadata = JSON.parse(JSON.stringify(metadataTypeFromOrg));
                                clonedMetadata.childs = {};
                                metadataOnOrg[key] = clonedMetadata;
                            }
                            metadataOnOrg[key].childs[childKey] = childFromOrg;
                        }
                    }
                });
            }
        });
        return deserializeMetadataTypes(metadataOnOrg);
    }

    /**
     * Method to check if has almost one element selected on MetadataTypes, MetadataObjects or MetadataItems
     * @param {Object} objects MetadataType childs or MetadataObject childs
     * 
     * @returns {Boolean} true if has almost one element selected, false in otherwise
     */
    static isAnyChecked(objects) {
        let nChecked = 0;
        let nUnchecked = 0;
        Object.keys(objects).forEach(function (key) {
            if (objects[key].checked)
                nChecked++;
            else
                nUnchecked++;
        });
        return nChecked > 0 && nUnchecked > 0;
    }

    /**
     * Method to check if has all elements selected on MetadataTypes, MetadataObjects or MetadataItems
     * @param {Object} objects MetadataType childs or MetadataObject childs
     * @returns {Boolean} true if has all elements selected, false in otherwise
     */
    static isAllChecked(objects) {
        let nChecked = 0;
        Object.keys(objects).forEach(function (key) {
            if (objects[key].checked)
                nChecked++;
        });
        return Object.keys(objects).length === nChecked;
    }

    /**
     * Method to check if a MetadataType or MetadataObject has childs
     * @param {MetadataType | MetadataObject | Object} object Element to check if has childs
     * 
     * @returns {Boolean} true if has childs, false in otherwise
     */
    static haveChilds(object) {
        return object && object.childs && Object.keys(object.childs).length > 0;
    }

    /**
     * Method to get the childs selected data. Count all elements selected and all childs to compare
     * @param {MetadataType | MetadataObject | Object} object Element to get childs data
     * 
     * @returns {Object} Returns an object with the data selected Items and subitems data, and total items and subitems.
     */
    static getChildsData(object) {
        let nChilds = -1;
        let totalItems = 0;
        let nSubChild = -1;
        let totalChilds = 0;
        if (object && MetadataUtils.haveChilds(object)) {
            if (nChilds === -1)
                nChilds = 0;
            Object.keys(object.childs).forEach(function (key) {
                totalItems++;
                if (object.childs[key].checked)
                    nChilds++;
                if (MetadataUtils.haveChilds(object.childs[key])) {
                    if (nSubChild === -1)
                        nSubChild = 0;
                    Object.keys(object.childs[key].childs).forEach(function (childKey) {
                        totalChilds++;
                        if (object.childs[key].childs[childKey].checked)
                            nSubChild++;
                    });
                }
            });
        }
        return {
            selectedItems: nChilds,
            selectedSubItems: nSubChild,
            totalItems: totalItems,
            totalSubItems: totalChilds
        };
    }

    /**
     * Method to check if an element or Metadata is available with your or version
     * @param {Object} elementData Element to check
     * @param {Number} lastVersion Last version to check if is available
     * @param {Number} orgVersion Org version to check if is available
     * 
     * @returns True if the element is available, false in otherwise
     */
    static availableOnVersion(elementData, lastVersion, orgVersion) {
        let maxVersion = (elementData.maxApi === -1) ? lastVersion : elementData.maxApi;
        let minVersion = elementData.minApi;
        if (!maxVersion)
            maxVersion = orgVersion
        return orgVersion >= minVersion && orgVersion <= maxVersion;
    }


    static handleUniqueFields(xmlFile, elementData, uniqueFields, xmlElementName, xmlSubelementName) {
        if (uniqueFields.length > 0) {
            for (const xmlElement of xmlFile[elementData.key]) {
                if (!xmlSubelementName && xmlElement[elementData.fieldKey] !== xmlElementName) {
                    for (const uniqueField of uniqueFields) {
                        if (xmlElement[uniqueField.field] === uniqueField.value) {
                            if (uniqueField.datatype === 'boolean') {
                                xmlElement[uniqueField.field] = !uniqueField.value;
                            } else {
                                // throw Error
                            }
                        }
                    }
                } else if (xmlSubelementName && xmlElement[elementData.fieldKey] !== xmlElementName + elementData.fields[elementData.fieldKey].separator + xmlSubelementName && xmlElement[elementData.fieldKey].startsWith(xmlElementName)) {
                    for (const uniqueField of uniqueFields) {
                        if (xmlElement[uniqueField.field] === uniqueField.value) {
                            if (uniqueField.datatype === 'boolean') {
                                xmlElement[uniqueField.field] = !uniqueField.value;
                            } else {
                                // throw Error
                            }
                        }
                    }
                }
            }
        }
    }

    static handleControlledFields(xmlFile, elementData, checkedOrUncheckedItems, xmlElementName, xmlSubelementName) {
        for (let item of checkedOrUncheckedItems) {
            if (elementData.fields[item] && elementData.fields[item].controlledFields && elementData.fields[item].controlledFields.length > 0) {
                for (let xmlElement of xmlFile[elementData.key]) {
                    if (!xmlSubelementName) {
                        if (xmlElement[elementData.fieldKey] === xmlElementName) {
                            for (let controlledField of elementData.fields[item].controlledFields) {
                                if (xmlElement[controlledField.field] !== undefined && xmlElement[item] === controlledField.valueToCompare) {
                                    xmlElement[controlledField.field] = controlledField.valueToSet;
                                }
                            }
                            break;
                        }
                    } else {
                        if (xmlElement[elementData.fieldKey] === xmlElementName + elementData.fields[elementData.fieldKey].separator + xmlSubelementName) {
                            for (let controlledField of elementData.fields[item].controlledFields) {
                                if (xmlElement[controlledField.field] !== undefined && xmlElement[item] === controlledField.valueToCompare) {
                                    xmlElement[controlledField.field] = controlledField.valueToSet;
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }
    }

    /**
     * Method to get the Namespace from the Metadata name
     * @param {String} objName Object or metadata name to check
     * 
     * @returns {String} Return the namespace name or empty string if not has namespace
     */
    static getNamespaceFromName(objName){
        let ns = '';
        if(StrUtils.contains(objName, '__')){
            const splits = objName.split('__');
            if(splits.length >= 2){
                ns = splits[0];
            }
        }
        return ns;
    }

    /**
     * Method to remove the selected elements from a JSON Metadata Object
     * @param {Object} metadata JSON Metadata Object
     * 
     * @returns {Object} Returns the MetadataJSON without selected data
     */
    static deleteCheckedMetadata(metadata) {
        Object.keys(metadata).forEach(function (typeKey) {
            Object.keys(metadata[typeKey].childs).forEach(function (objectKey) {
                if (MetadataUtils.haveChilds(metadata[typeKey].childs[objectKey])) {
                    Object.keys(metadata[typeKey].childs[objectKey].childs).forEach(function (itemKey) {
                        if (metadata[typeKey].childs[objectKey].childs[itemKey].checked)
                            delete metadata[typeKey].childs[objectKey].childs[itemKey];
                    });
                    if (metadata[typeKey].childs[objectKey].checked)
                        delete metadata[typeKey].childs[objectKey];
                } else {
                    if (metadata[typeKey].childs[objectKey].checked)
                        delete metadata[typeKey].childs[objectKey];
                }
            });
            if (!MetadataUtils.haveChilds(metadata[typeKey]))
                delete metadata[typeKey];
        });
        return metadata;
    }

    /**
     * Method to select all elements (and subelements) from a entire Metadata JSON, MetadataType or MetadataObject
     * @param {MetadataType | MetadataObject | Object} metadata 
     */
    static checkAll(metadata){
        Object.keys(metadata).forEach(function (key) {
            metadata[key].checked = true;
            if(MetadataUtils.haveChilds(metadata[key])){
                Object.keys(metadata[key].childs).forEach(function (childsKey) {
                    metadata[key].childs[childsKey].checked = true;
                    if(MetadataUtils.haveChilds(metadata[key].childs[childsKey])){
                        Object.keys(metadata[key].childs[childsKey].childs).forEach(function (itemKey) {
                            metadata[key].childs[childsKey].childs[itemKey].checked = true;
                        });
                    }
                });
            }
        });
    }

    /**
     * Method to unselect all elements (and subelements) from a entire Metadata JSON, MetadataType or MetadataObject
     * @param {MetadataType | MetadataObject | Object} metadata 
     */
    static uncheckAll(metadata){
        Object.keys(metadata).forEach(function (key) {
            metadata[key].checked = false;
            if(MetadataUtils.haveChilds(metadata[key])){
                Object.keys(metadata[key].childs).forEach(function (childsKey) {
                    metadata[key].childs[childsKey].checked = false;
                    if(MetadataUtils.haveChilds(metadata[key].childs[childsKey])){
                        Object.keys(metadata[key].childs[childsKey].childs).forEach(function (itemKey) {
                            metadata[key].childs[childsKey].childs[itemKey].checked = false;
                        });
                    }
                });
            }
        });
    }

    /**
     * Method to combine the Metadata source into the Metadata target to create only one Metadata JSON Object
     * @param {Object} metadataTarget Metadata JSON as target
     * @param {Object} metadataSource Metadata JSON as source
     * 
     * @returns {Object} Returns a single object with the combined data
     */
    static combineMetadata(metadataTarget, metadataSource) {
        Object.keys(metadataSource).forEach(function (key) {
            const metadataTypeSource = metadataSource[key];
            const metadataTypeTarget = metadataTarget[key];
            if (metadataTypeTarget) {
                const childKeys = Object.keys(metadataTypeSource.childs);
                if (childKeys.length > 0) {
                    Object.keys(metadataTypeSource.childs).forEach(function (childKey) {
                        const metadataObjectSource = metadataTypeSource.childs[childKey];
                        const metadataObjectTarget = metadataTypeTarget.childs[childKey];
                        if (metadataObjectTarget) {
                            const grandChildKeys = Object.keys(metadataObjectSource.childs);
                            if (grandChildKeys.length > 0) {
                                Object.keys(metadataObjectSource.childs).forEach(function (grandChildKey) {
                                    const metadataItemSource = metadataObjectSource.childs[grandChildKey];
                                    const metadataItemTarget = metadataObjectTarget.childs[grandChildKey];
                                    if (metadataItemTarget && metadataItemSource.checked) {
                                        metadataTarget[key].childs[childKey].childs[grandChildKey].checked = true;
                                    } else {
                                        metadataTarget[key].childs[childKey].childs[grandChildKey] = metadataItemSource;
                                    }
                                });
                                metadataTarget[key].childs[childKey].checked = MetadataUtils.isAllChecked(metadataTarget[key].childs[childKey].childs);
                            } else {
                                metadataTarget[key].childs[childKey].checked = metadataObjectSource.checked;
                            }
                        } else {
                            metadataTarget[key].childs[childKey] = metadataObjectSource;
                        }
                    });
                    metadataTarget[key].checked = MetadataUtils.isAllChecked(metadataTarget[key].childs);
                } else {
                    metadataTarget[key].checked = metadataTypeSource.checked;
                }
            } else {
                metadataTarget[key] = metadataSource[key];
            }
        });
        return metadataTarget;
    }

}
module.exports = MetadataUtils;

function deserializeMetadataTypes(metadataTypes, removeEmptyTypes) {
    if (!metadataTypes)
        return metadataTypes;
    const deserialized = {};
    Object.keys(metadataTypes).forEach((key) => {
        if (metadataTypes[key]) {
            const metadataType = new MetadataType(metadataTypes[key]);
            if (metadataTypes[key] && metadataTypes[key].childs && Object.keys(metadataTypes[key].childs).length > 0) {
                Object.keys(metadataTypes[key].childs).forEach((childKey) => {
                    if (metadataTypes[key].childs[childKey]) {
                        metadataType.addChild(childKey, new MetadataObject(metadataTypes[key].childs[childKey]));
                        if (metadataTypes[key].childs[childKey] && metadataTypes[key].childs[childKey].childs && Object.keys(metadataTypes[key].childs[childKey].childs).length > 0) {
                            Object.keys(metadataTypes[key].childs[childKey].childs).forEach((grandChildKey) => {
                                if (metadataTypes[key].childs[childKey].childs[grandChildKey]) {
                                    metadataType.getChild(childKey).addChild(grandChildKey, new MetadataItem(metadataTypes[key].childs[childKey].childs[grandChildKey]));
                                }
                            });
                        }
                    }
                });
            }
            if (metadataType.haveChilds() || (!metadataType.haveChilds() && !removeEmptyTypes)) {
                deserialized[key] = metadataType;
            }
        }
    });
    return deserialized;
}