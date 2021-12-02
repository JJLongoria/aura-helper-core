import { Utils } from "../utils/utils";
import { MetadataObject } from "./metadataObject";

/**
 * Class to handle MetadataTypes, this class represent a Metadata Type, that is, the first level on Metadata Types hierarchy like Custom Objects, Apex Classes or any other Metadata type.
 */
export class MetadataType {

    name: string;
    checked: boolean;
    path?: string;
    suffix?: string;
    childs: { [key: string]: MetadataObject };

    /**
     * Create a Metadata Type instance
     * @param {string | MetadataType} nameOrMetadataType Metadata type name or MetadataType instance
     * @param {boolean} checked true to mark as checked, false in otherwise
     * @param {string} path Path to the Metadata Type folder
     * @param {string} suffix Metadata type file suffix
     * @param {{ [key: string]: MetadataObject }} childs Metadata objects map with API name as key and Metadata Object as value 
     */
    constructor(nameOrMetadataType: string | MetadataType, checked?: boolean, path?: string, suffix?: string, childs?: { [key: string]: MetadataObject }) {
        if (nameOrMetadataType instanceof MetadataType) {
            this.name = nameOrMetadataType.name;
            this.checked = nameOrMetadataType.checked;
            this.path = nameOrMetadataType.path;
            this.suffix = nameOrMetadataType.suffix;
            this.childs = (nameOrMetadataType.childs !== undefined) ? nameOrMetadataType.childs : {};
        } else {
            this.name = nameOrMetadataType;
            this.checked = (checked !== undefined) ? checked : false;
            this.path = path;
            this.suffix = suffix;
            this.childs = (childs !== undefined) ? childs : {};
        }
    }

    /**
     * Method to add Metadata Object as child
     * @param {string | MetadataObject} childOrName Metadata Object name or Metadata item instance
     * @param {MetadataObject} [child] Metadata Object intance
     */
    addChild(childOrName: string | MetadataObject, child?: MetadataObject) {
        if (childOrName instanceof MetadataObject && !Utils.isNull(childOrName.name)) {
            if (!this.childs[childOrName.name]) {
                this.childs[childOrName.name] = childOrName;
            }
        } else if (Utils.isString(childOrName) && child) {
            childOrName = childOrName as string;
            if (!this.childs[childOrName]) {
                this.childs[childOrName] = child;
            }
        }
    }


    /**
     * Method to get a Metadata Object child 
     * @param {string} name Metadata Object name to get it 
     * @returns {MetadataObject | undefined} Return the selected Metadata Object or undefined if not exists
     */
    getChild(name: string) {
        if (this.childs[name]) {
            return new MetadataObject(this.childs[name]);
        }
        return undefined;
    }

    /**
     * Method to get all metadata type childs
     * @returns {{ [key: string]: MetadataObject }} Return the metadata type childs
     */
    getChilds() {
        return this.childs;
    }

    /**
     * Method to get all child keys
     * @returns {string[]}
     */
    getChildKeys() {
        return (this.haveChilds()) ? Object.keys(this.childs) : [];
    }

    /**
     * Method to count childs
     * @returns {number}
     */
    childsCount() {
        return this.childs && Object.keys(this.childs).length;
    }

    /**
     * Method to check if the Metadata Type has childs
     * @returns {boolean}
     */
    haveChilds() {
        return this.childs && Object.keys(this.childs).length > 0;
    }

    /**
     * Method to check if all childs are marked as checked
     * @returns {boolean} true if all childs are checked, false in otherwise
     */
    allChildsChecked() {
        let nChecked = 0;
        const keys = Object.keys(this.childs);
        keys.forEach((key) => {
            if (this.childs[key].checked) {
                nChecked++;
            }
        });
        return keys.length === nChecked;
    }
}
