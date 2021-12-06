import { MetadataItem } from "../types/metadataItem";
import { MetadataObject } from "../types/metadataObject";
import { MetadataType } from "../types/metadataType";
import { MetadataTypesSummary } from "../types/metadataTypesSummary";
import { SObject } from "../types/sObject";
import { SObjectField } from "../types/sObjectField";
import { XMLDataControlledField } from "../types/xmlDataControlledField";
import { XMLDependencyField } from "../types/xmlDependencyField";
import { XMLField } from "../types/xmlField";
import { XMLUniqueFieldData } from "../types/xmlUniqueFieldData";
import { Datatypes } from "../values";
import { StrUtils } from "./strUtils";
import { Utils } from "./utils";

/**
 * Class with utils methods to work with Aura Helper Metadata JSON Format or other Metadata Types like SObjects or XML Metadata Files
 */
export class MetadataUtils {

    /**
     * Method to alphabetic sort a Metadata JSON or Map
     * @param {{ [key: string]: MetadataType } | any} metadata Metadata JSON to sort
     * @param {boolean} [deserialize] true if want to ensure the response are MetadataType, MetadataObject and MetadataItem instances.
     * 
     * @returns {{ [key: string]: MetadataType }} Returns the JSON data sort in alphabetic order 
     */
    static orderMetadata(metadata: { [key: string]: MetadataType } | any, deserialize?: boolean) {
        let orderedMetadata: { [key: string]: MetadataType } = {};
        Object.keys(metadata).sort((keyA, keyB) => {
            return keyA.toLowerCase().localeCompare(keyB.toLowerCase());
        }).forEach((key) => {
            orderedMetadata[key] = metadata[key];
            if (metadata[key] && metadata[key].childs && Object.keys(metadata[key].childs).length > 0) {
                orderedMetadata[key].childs = MetadataUtils.orderMetadata(metadata[key].childs, false);
            }
        });
        if (!deserialize) {
            return orderedMetadata;
        }
        return deserializeMetadataTypes(orderedMetadata);
    }

    /**
     * Method to alphabetic sort a SObjects JSON or Map
     * @param {{ [key: string]: SObject } | any} sObjects SObjects JSON to sort
     * 
     * @returns {Object} Returns the JSON data sort in alphabetic order
     */
    static orderSObjects(sObjects: { [key: string]: SObject } | any): { [key: string]: SObject } {
        let orderedSObjects: { [key: string]: SObject } = {};
        Object.keys(sObjects).sort(function (keyA, keyB) {
            return keyA.toLowerCase().localeCompare(keyB.toLowerCase());
        }).forEach((key) => {
            orderedSObjects[key] = sObjects[key];
            if (sObjects[key] && sObjects[key].fields && Object.keys(sObjects[key].fields).length > 0) {
                orderedSObjects[key].fields = MetadataUtils.orderSObjectFields(sObjects[key].fields);
            }
        });
        return orderedSObjects;
    }

    /**
     * Method to alphabetic sort a SObjects Fields JSON or Map
     * @param {{ [key: string]: SObject } | any} sObjectFields SObjects JSON to sort
     * 
     * @returns {Object} Returns the JSON data sort in alphabetic order
     */
    static orderSObjectFields(sObjectFields: { [key: string]: SObjectField } | any): { [key: string]: SObjectField } {
        let orderedSObjectsFields: { [key: string]: SObjectField } = {};
        Object.keys(sObjectFields).sort(function (keyA, keyB) {
            return keyA.toLowerCase().localeCompare(keyB.toLowerCase());
        }).forEach((key) => {
            orderedSObjectsFields[key] = sObjectFields[key];
        });
        return orderedSObjectsFields;
    }

    /**
     * Method to compare the Metadata JSON or Map as source with the Metadata JSON or Map as target with get the data that exists on source but does not exists on target
     * @param {{ [key: string]: MetadataType } | any} metadataSource Metadata JSON or Map source to compare
     * @param {{ [key: string]: MetadataType } | any} metadataTarget Metadata JSON or Map target to compare
     * 
     * @returns {{ [key: string]: MetadataType }} Returns a Metadata Map with the existing data on source but not exists on target
     */
    static compareMetadata(metadataSource: { [key: string]: MetadataType } | any, metadataTarget: { [key: string]: MetadataType } | any): { [key: string]: MetadataType } {
        const compareResult: { [key: string]: MetadataType } = {};
        Object.keys(metadataSource).forEach(function (key) {
            const metadataTypeFromFileSystem = metadataSource[key];
            const metadataTypeFromOrg = metadataTarget[key];
            if (metadataTypeFromOrg) {
                Object.keys(metadataTypeFromOrg.childs).forEach(function (childKey) {
                    const childFromOrg = metadataTypeFromOrg.childs[childKey];
                    const childFromFile = metadataTypeFromFileSystem.childs[childKey];
                    const grandChildsFromOrgKeys = (childFromOrg && childFromOrg.childs) ? Object.keys(childFromOrg.childs) : undefined;
                    if (grandChildsFromOrgKeys && grandChildsFromOrgKeys.length > 0) {
                        Object.keys(childFromOrg.childs).forEach(function (grandChildKey) {
                            const grandChildFromOrg = childFromOrg.childs[grandChildKey];
                            const grandChildFromFile = (childFromFile && childFromFile.childs) ? childFromFile.childs[grandChildKey] : undefined;
                            if (!grandChildFromFile) {
                                if (!compareResult[key]) {
                                    const clonedMetadata = JSON.parse(JSON.stringify(metadataTypeFromOrg));
                                    clonedMetadata.childs = {};
                                    compareResult[key] = clonedMetadata;
                                }
                                if (!compareResult[key].childs[childKey]) {
                                    const clonedObject = JSON.parse(JSON.stringify(childFromOrg));
                                    clonedObject.childs = {};
                                    compareResult[key].childs[childKey] = clonedObject;
                                }
                                compareResult[key].childs[childKey].childs[grandChildKey] = grandChildFromOrg;
                            }
                        });
                    } else {
                        if (!childFromFile) {
                            if (!compareResult[key]) {
                                const clonedMetadata = JSON.parse(JSON.stringify(metadataTypeFromOrg));
                                clonedMetadata.childs = {};
                                compareResult[key] = clonedMetadata;
                            }
                            compareResult[key].childs[childKey] = childFromOrg;
                        }
                    }
                });
            }
        });
        return deserializeMetadataTypes(compareResult);
    }

    /**
     * Method to check if has almost one element selected on MetadataTypes, MetadataObjects or MetadataItems
     * @param {{ [key: string]: MetadataType } | { [key: string]: MetadataObject }} objects MetadataType childs or MetadataObject childs
     * 
     * @returns {boolean} true if has almost one element selected, false in otherwise
     */
    static isAnyChecked(objects: { [key: string]: MetadataType } | { [key: string]: MetadataObject }): boolean {
        let nChecked = 0;
        let nUnchecked = 0;
        Object.keys(objects).forEach(function (key) {
            if (objects[key].checked) {
                nChecked++;
            } else {
                nUnchecked++;
            }
        });
        return nChecked > 0 && nUnchecked > 0;
    }

    /**
     * Method to check if has all elements selected on MetadataTypes, MetadataObjects or MetadataItems
     * @param {{ [key: string]: MetadataType } | { [key: string]: MetadataObject }} objects MetadataType childs or MetadataObject childs
     * @returns {boolean} true if has all elements selected, false in otherwise
     */
    static isAllChecked(objects: { [key: string]: MetadataType } | { [key: string]: MetadataObject } | any): boolean {
        let nChecked = 0;
        Object.keys(objects).forEach(function (key) {
            if (objects[key].checked) {
                nChecked++;
            }
        });
        return Object.keys(objects).length === nChecked;
    }

    /**
     * Method to check if a MetadataType or MetadataObject has childs
     * @param {MetadataType | MetadataObject} object Element to check if has childs
     * 
     * @returns {boolean} true if has childs, false in otherwise
     */
    static haveChilds(object: MetadataType | MetadataObject) {
        return Utils.hasKeys(object.childs);
    }

    /**
     * Method to get the childs selected data. Count all elements selected and all childs to compare
     * @param {MetadataType | MetadataObject} object Element to get childs data
     * 
     * @returns {MetadataTypesSummary} Returns an object with the data selected Items and subitems data, and total items and subitems.
     */
    static getChildsData(object: MetadataType | MetadataObject): MetadataTypesSummary {
        let nChilds = -1;
        let totalItems = 0;
        let nSubChild = -1;
        let totalChilds = 0;
        if (object && MetadataUtils.haveChilds(object)) {
            if (nChilds === -1) {
                nChilds = 0;
            }
            Object.keys(object.childs).forEach(function (key) {
                totalItems++;
                if (object.childs[key].checked) {
                    nChilds++;
                }
                if (object instanceof MetadataType && MetadataUtils.haveChilds(object.childs[key])) {
                    if (nSubChild === -1) {
                        nSubChild = 0;
                    }
                    Object.keys(object.childs[key].childs).forEach(function (childKey) {
                        totalChilds++;
                        if (object.childs[key].childs[childKey].checked) {
                            nSubChild++;
                        }
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
     * @param {XMLField | XMLDependencyField | XMLDataControlledField} elementData Element to check
     * @param {number} lastVersion Last version to check if is available
     * @param {number} orgVersion Org version to check if is available
     * 
     * @returns {boolean} True if the element is available, false in otherwise
     */
    static availableOnVersion(elementData: XMLField | XMLDependencyField | XMLDataControlledField, lastVersion: number, orgVersion: number): boolean {
        let maxVersion = (elementData.maxApi === -1) ? lastVersion : elementData.maxApi;
        let minVersion = elementData.minApi;
        if (!maxVersion) {
            maxVersion = orgVersion;
        }
        return Number(orgVersion) >= Number(minVersion) && Number(orgVersion) <= Number(maxVersion);
    }

    /**
     * Method to handle unique fields on XML metadata types
     * @param {any} xmlFile XML File content as JSON
     * @param {any} elementData XMLObjectField or XMLArrayField to handle unique fields
     * @param {XMLUniqueFieldData[]} uniqueFields XML Unique fields data to handle it
     * @param {string} xmlElementName XML Element name to process
     * @param {string} xmlSubelementName XML Subelement name to process 
     */
    static handleUniqueFields(xmlFile: any, elementData: any, uniqueFields: XMLUniqueFieldData[], xmlElementName: string, xmlSubelementName?: string): void {
        if (uniqueFields.length > 0) {
            for (const xmlElement of xmlFile[elementData.key]) {
                if (!xmlSubelementName && xmlElement[elementData.fieldKey] !== xmlElementName) {
                    for (const uniqueField of uniqueFields) {
                        if (xmlElement[uniqueField.field] === uniqueField.value) {
                            if (uniqueField.datatype === Datatypes.BOOLEAN) {
                                xmlElement[uniqueField.field] = !uniqueField.value;
                            } else {
                                // throw Error
                            }
                        }
                    }
                } else if (xmlSubelementName && xmlElement[elementData.fieldKey] !== xmlElementName + elementData.fields[elementData.fieldKey].separator + xmlSubelementName && xmlElement[elementData.fieldKey].startsWith(xmlElementName)) {
                    for (const uniqueField of uniqueFields) {
                        if (xmlElement[uniqueField.field] === uniqueField.value) {
                            if (uniqueField.datatype === Datatypes.BOOLEAN) {
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

    /**
     * Method to handle controlled fields into XML Metadata files
     * @param {any} xmlFile XML File content as JSON
     * @param {any} elementData XMLObjectField or XMLArrayField to handle unique fields
     * @param {string[]} checkedOrUncheckedItems Checked or uncheked element list names
     * @param {string} xmlElementName XML Element name to process
     * @param {string} xmlSubelementName XML Subelement name to process  
     */
    static handleControlledFields(xmlFile: any, elementData: any, checkedOrUncheckedItems: string[], xmlElementName: string, xmlSubelementName?: string): void {
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
     * @param {string} objName Object or metadata name to check
     * 
     * @returns {string} Return the namespace name or empty string if not has namespace
     */
    static getNamespaceFromName(objName: string): string {
        let ns = '';
        if (StrUtils.contains(objName, '__')) {
            const splits = objName.split('__');
            if (splits.length >= 2) {
                ns = splits[0];
            }
        }
        return ns;
    }

    /**
     * Method to remove the selected elements from a JSON Metadata Object or Map
     * @param {{ [key: string]: MetadataType } | any} metadata JSON Metadata Object
     * 
     * @returns {{ [key: string]: MetadataType }} Returns the MetadataJSON without selected data
     */
    static deleteCheckedMetadata(metadata: { [key: string]: MetadataType } | any): { [key: string]: MetadataType } {
        Object.keys(metadata).forEach(function (typeKey) {
            Object.keys(metadata[typeKey].childs).forEach(function (objectKey) {
                if (MetadataUtils.haveChilds(metadata[typeKey].childs[objectKey])) {
                    Object.keys(metadata[typeKey].childs[objectKey].childs).forEach(function (itemKey) {
                        if (metadata[typeKey].childs[objectKey].childs[itemKey].checked) {
                            delete metadata[typeKey].childs[objectKey].childs[itemKey];
                        }
                    });
                    if (metadata[typeKey].childs[objectKey].checked) {
                        delete metadata[typeKey].childs[objectKey];
                    }
                } else {
                    if (metadata[typeKey].childs[objectKey].checked) {
                        delete metadata[typeKey].childs[objectKey];
                    }
                }
            });
            if (!MetadataUtils.haveChilds(metadata[typeKey])) {
                delete metadata[typeKey];
            }
        });
        return deserializeMetadataTypes(metadata);
    }

    /**
     * Method to select all elements (and subelements) from a entire Metadata JSON, MetadataType or MetadataObject
     * @param {{ [key: string]: MetadataType } | { [key: string]: MetadataObject }  | any} metadata 
     */
    static checkAll(metadata: { [key: string]: MetadataType } | { [key: string]: MetadataObject } | any): void {
        Object.keys(metadata).forEach(function (key) {
            metadata[key].checked = true;
            if (MetadataUtils.haveChilds(metadata[key])) {
                Object.keys(metadata[key].childs).forEach(function (childsKey) {
                    metadata[key].childs[childsKey].checked = true;
                    if (MetadataUtils.haveChilds(metadata[key].childs[childsKey])) {
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
     *  @param {{ [key: string]: MetadataType } | { [key: string]: MetadataObject }  | any} metadata 
     */
    static uncheckAll(metadata: { [key: string]: MetadataType } | { [key: string]: MetadataObject } | any) {
        Object.keys(metadata).forEach(function (key) {
            metadata[key].checked = false;
            if (MetadataUtils.haveChilds(metadata[key])) {
                Object.keys(metadata[key].childs).forEach(function (childsKey) {
                    metadata[key].childs[childsKey].checked = false;
                    if (MetadataUtils.haveChilds(metadata[key].childs[childsKey])) {
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
     * @param {{ [key: string]: MetadataType }} metadataTarget Metadata JSON or Map as target
     * @param {{ [key: string]: MetadataType }} metadataSource Metadata JSON or Map as source
     * 
     * @returns {Object} Returns a single object with the combined data
     */
    static combineMetadata(metadataTarget: { [key: string]: MetadataType }, metadataSource: { [key: string]: MetadataType }): { [key: string]: MetadataType } {
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

function deserializeMetadataTypes(metadataTypes: { [key: string]: MetadataType } | any, removeEmptyTypes?: boolean): { [key: string]: MetadataType } {
    if (!metadataTypes) {
        return metadataTypes;
    }
    const deserialized: { [key: string]: MetadataType } = {};
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
                                    metadataType.getChild(childKey)!.addChild(grandChildKey, new MetadataItem(metadataTypes[key].childs[childKey].childs[grandChildKey]));
                                }
                            });
                        }
                    }
                });
            }
            if (metadataType.hasChilds() || (!metadataType.hasChilds() && !removeEmptyTypes)) {
                deserialized[key] = metadataType;
            }
        }
    });
    return deserialized;
}