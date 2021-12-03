import { MetadataItem } from "./metadataItem";
/**
 * Class to handle MetadataTypes, this class represent a Metadata Object, that is, the second level on Metadata Types hierarchy like Apex Classes or CustomObjects for example.
 */
export declare class MetadataObject {
    name: string;
    checked: boolean;
    path?: string;
    childs: {
        [key: string]: MetadataItem;
    };
    /**
     * Create a MetadataObject instance
     * @param {string | MetadataObject} nameOrMetadataObject Metadata Object name or MetadataObject instance
     * @param {boolean} checked true to mark as checked, false in otherwise
     * @param {string} path Metadata Object file or foler path
     * @param {{ [key: string]: MetadataItem }} childs Metadata Items map with Api Name as key and Metadata Item Data as value
     */
    constructor(nameOrMetadataObject: string | MetadataObject, checked?: boolean, path?: string, childs?: {
        [key: string]: MetadataItem;
    });
    /**
     * Method to add Metadata Item as child
     * @param {string | MetadataItem} childOrName Metadata Item name or Metadata item instance
     * @param {MetadataItem} [child] Metadata Item intance
     */
    addChild(childOrName: string | MetadataItem, child?: MetadataItem): void;
    /**
     * Method to get a Metadata Item child
     * @param {string} name Metadata Item name to get it
     * @returns {MetadataItem | undefined} Return the selected Metadata Item or undefined if not exists
     */
    getChild(name: string): MetadataItem | undefined;
    /**
     * Method to get all metadata object childs
     * @returns {{ [key: string]: MetadataItem }} Return the metadata object childs
     */
    getChilds(): {
        [key: string]: MetadataItem;
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
     * Method to check if the Metadata Object has childs
     * @returns {boolean}
     */
    hasChilds(): boolean;
    /**
     * Method to check if all childs are marked as checked
     * @returns {boolean} true if all childs are checked, false in otherwise
     */
    allChildsChecked(): boolean;
}
