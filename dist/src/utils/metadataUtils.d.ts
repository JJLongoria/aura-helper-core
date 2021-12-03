import { MetadataObject } from "../types/metadataObject";
import { MetadataType } from "../types/metadataType";
import { MetadataTypesSummary } from "../types/metadataTypesSummary";
import { SObject } from "../types/sObject";
import { SObjectField } from "../types/sObjectField";
import { XMLDataControlledField } from "../types/xmlDataControlledField";
import { XMLDependencyField } from "../types/xmlDependencyField";
import { XMLField } from "../types/xmlField";
import { XMLUniqueFieldData } from "../types/xmlUniqueFieldData";
/**
 * Class with utils methods to work with Aura Helper Metadata JSON Format or other Metadata Types like SObjects or XML Metadata Files
 */
export declare class MetadataUtils {
    /**
     * Method to alphabetic sort a Metadata JSON or Map
     * @param {{ [key: string]: MetadataType } | any} metadata Metadata JSON to sort
     * @param {boolean} [deserialize] true if want to ensure the response are MetadataType, MetadataObject and MetadataItem instances.
     *
     * @returns {{ [key: string]: MetadataType }} Returns the JSON data sort in alphabetic order
     */
    static orderMetadata(metadata: {
        [key: string]: MetadataType;
    } | any, deserialize?: boolean): {
        [key: string]: MetadataType;
    };
    /**
     * Method to alphabetic sort a SObjects JSON or Map
     * @param {{ [key: string]: SObject } | any} sObjects SObjects JSON to sort
     *
     * @returns {Object} Returns the JSON data sort in alphabetic order
     */
    static orderSObjects(sObjects: {
        [key: string]: SObject;
    } | any): {
        [key: string]: SObject;
    };
    /**
     * Method to alphabetic sort a SObjects Fields JSON or Map
     * @param {{ [key: string]: SObject } | any} sObjectFields SObjects JSON to sort
     *
     * @returns {Object} Returns the JSON data sort in alphabetic order
     */
    static orderSObjectFields(sObjectFields: {
        [key: string]: SObjectField;
    } | any): {
        [key: string]: SObjectField;
    };
    /**
     * Method to compare the Metadata JSON or Map as source with the Metadata JSON or Map as target with get the data that exists on source but does not exists on target
     * @param {{ [key: string]: MetadataType } | any} metadataSource Metadata JSON or Map source to compare
     * @param {{ [key: string]: MetadataType } | any} metadataTarget Metadata JSON or Map target to compare
     *
     * @returns {{ [key: string]: MetadataType }} Returns a Metadata Map with the existing data on source but not exists on target
     */
    static compareMetadata(metadataSource: {
        [key: string]: MetadataType;
    } | any, metadataTarget: {
        [key: string]: MetadataType;
    } | any): {
        [key: string]: MetadataType;
    };
    /**
     * Method to check if has almost one element selected on MetadataTypes, MetadataObjects or MetadataItems
     * @param {{ [key: string]: MetadataType } | { [key: string]: MetadataObject }} objects MetadataType childs or MetadataObject childs
     *
     * @returns {boolean} true if has almost one element selected, false in otherwise
     */
    static isAnyChecked(objects: {
        [key: string]: MetadataType;
    } | {
        [key: string]: MetadataObject;
    }): boolean;
    /**
     * Method to check if has all elements selected on MetadataTypes, MetadataObjects or MetadataItems
     * @param {{ [key: string]: MetadataType } | { [key: string]: MetadataObject }} objects MetadataType childs or MetadataObject childs
     * @returns {boolean} true if has all elements selected, false in otherwise
     */
    static isAllChecked(objects: {
        [key: string]: MetadataType;
    } | {
        [key: string]: MetadataObject;
    } | any): boolean;
    /**
     * Method to check if a MetadataType or MetadataObject has childs
     * @param {MetadataType | MetadataObject} object Element to check if has childs
     *
     * @returns {boolean} true if has childs, false in otherwise
     */
    static haveChilds(object: MetadataType | MetadataObject): boolean;
    /**
     * Method to get the childs selected data. Count all elements selected and all childs to compare
     * @param {MetadataType | MetadataObject} object Element to get childs data
     *
     * @returns {MetadataTypesSummary} Returns an object with the data selected Items and subitems data, and total items and subitems.
     */
    static getChildsData(object: MetadataType | MetadataObject): MetadataTypesSummary;
    /**
     * Method to check if an element or Metadata is available with your or version
     * @param {XMLField | XMLDependencyField | XMLDataControlledField} elementData Element to check
     * @param {number} lastVersion Last version to check if is available
     * @param {number} orgVersion Org version to check if is available
     *
     * @returns {boolean} True if the element is available, false in otherwise
     */
    static availableOnVersion(elementData: XMLField | XMLDependencyField | XMLDataControlledField, lastVersion: number, orgVersion: number): boolean;
    /**
     * Method to handle unique fields on XML metadata types
     * @param {any} xmlFile XML File content as JSON
     * @param {any} elementData XMLObjectField or XMLArrayField to handle unique fields
     * @param {XMLUniqueFieldData[]} uniqueFields XML Unique fields data to handle it
     * @param {string} xmlElementName XML Element name to process
     * @param {string} xmlSubelementName XML Subelement name to process
     */
    static handleUniqueFields(xmlFile: any, elementData: any, uniqueFields: XMLUniqueFieldData[], xmlElementName: string, xmlSubelementName?: string): void;
    /**
     * Method to handle controlled fields into XML Metadata files
     * @param {any} xmlFile XML File content as JSON
     * @param {any} elementData XMLObjectField or XMLArrayField to handle unique fields
     * @param {string[]} checkedOrUncheckedItems Checked or uncheked element list names
     * @param {string} xmlElementName XML Element name to process
     * @param {string} xmlSubelementName XML Subelement name to process
     */
    static handleControlledFields(xmlFile: any, elementData: any, checkedOrUncheckedItems: string[], xmlElementName: string, xmlSubelementName?: string): void;
    /**
     * Method to get the Namespace from the Metadata name
     * @param {string} objName Object or metadata name to check
     *
     * @returns {string} Return the namespace name or empty string if not has namespace
     */
    static getNamespaceFromName(objName: string): string;
    /**
     * Method to remove the selected elements from a JSON Metadata Object or Map
     * @param {{ [key: string]: MetadataType } | any} metadata JSON Metadata Object
     *
     * @returns {{ [key: string]: MetadataType }} Returns the MetadataJSON without selected data
     */
    static deleteCheckedMetadata(metadata: {
        [key: string]: MetadataType;
    } | any): {
        [key: string]: MetadataType;
    };
    /**
     * Method to select all elements (and subelements) from a entire Metadata JSON, MetadataType or MetadataObject
     * @param {{ [key: string]: MetadataType } | { [key: string]: MetadataObject }  | any} metadata
     */
    static checkAll(metadata: {
        [key: string]: MetadataType;
    } | {
        [key: string]: MetadataObject;
    } | any): void;
    /**
     * Method to unselect all elements (and subelements) from a entire Metadata JSON, MetadataType or MetadataObject
     *  @param {{ [key: string]: MetadataType } | { [key: string]: MetadataObject }  | any} metadata
     */
    static uncheckAll(metadata: {
        [key: string]: MetadataType;
    } | {
        [key: string]: MetadataObject;
    } | any): void;
    /**
     * Method to combine the Metadata source into the Metadata target to create only one Metadata JSON Object
     * @param {{ [key: string]: MetadataType }} metadataTarget Metadata JSON or Map as target
     * @param {{ [key: string]: MetadataType }} metadataSource Metadata JSON or Map as source
     *
     * @returns {Object} Returns a single object with the combined data
     */
    static combineMetadata(metadataTarget: {
        [key: string]: MetadataType;
    }, metadataSource: {
        [key: string]: MetadataType;
    }): {
        [key: string]: MetadataType;
    };
}
