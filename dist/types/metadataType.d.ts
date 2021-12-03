import { MetadataObject } from "./metadataObject";
/**
 * Class to handle MetadataTypes, this class represent a Metadata Type, that is, the first level on Metadata Types hierarchy like Custom Objects, Apex Classes or any other Metadata type.
 */
export declare class MetadataType {
    name: string;
    checked: boolean;
    path?: string;
    suffix?: string;
    childs: {
        [key: string]: MetadataObject;
    };
    /**
     * Create a Metadata Type instance
     * @param {string | MetadataType} nameOrMetadataType Metadata type name or MetadataType instance
     * @param {boolean} checked true to mark as checked, false in otherwise
     * @param {string} path Path to the Metadata Type folder
     * @param {string} suffix Metadata type file suffix
     * @param {{ [key: string]: MetadataObject }} childs Metadata objects map with API name as key and Metadata Object as value
     */
    constructor(nameOrMetadataType: string | MetadataType, checked?: boolean, path?: string, suffix?: string, childs?: {
        [key: string]: MetadataObject;
    });
    /**
     * Method to add Metadata Object as child
     * @param {string | MetadataObject} childOrName Metadata Object name or Metadata item instance
     * @param {MetadataObject} [child] Metadata Object intance
     */
    addChild(childOrName: string | MetadataObject, child?: MetadataObject): void;
    /**
     * Method to get a Metadata Object child
     * @param {string} name Metadata Object name to get it
     * @returns {MetadataObject | undefined} Return the selected Metadata Object or undefined if not exists
     */
    getChild(name: string): MetadataObject | undefined;
    /**
     * Method to get all metadata type childs
     * @returns {{ [key: string]: MetadataObject }} Return the metadata type childs
     */
    getChilds(): {
        [key: string]: MetadataObject;
    };
    /**
     * Method to get all child keys
     * @returns {string[]}
     */
    getChildKeys(): string[];
    /**
     * Method to count childs
     * @returns {number}
     */
    childsCount(): number;
    /**
     * Method to check if the Metadata Type has childs
     * @returns {boolean}
     */
    hasChilds(): boolean;
    /**
     * Method to check if all childs are marked as checked
     * @returns {boolean} true if all childs are checked, false in otherwise
     */
    allChildsChecked(): boolean;
}
