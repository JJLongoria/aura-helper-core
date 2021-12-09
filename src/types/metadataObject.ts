import { Utils } from "../utils/utils";
import { MetadataItem } from "./metadataItem";

/**
 * Class to handle MetadataTypes, this class represent a Metadata Object, that is, the second level on Metadata Types hierarchy like Apex Classes or CustomObjects for example.
 */
export class MetadataObject {

    name: string;
    checked: boolean;
    path?: string;
    childs: { [key: string]: MetadataItem };

    /**
     * Create a MetadataObject instance
     * @param {string | MetadataObject} nameOrMetadataObject Metadata Object name or MetadataObject instance
     * @param {boolean} checked true to mark as checked, false in otherwise
     * @param {string} path Metadata Object file or foler path
     * @param {{ [key: string]: MetadataItem }} childs Metadata Items map with Api Name as key and Metadata Item Data as value
     */
    constructor(nameOrMetadataObject: string | MetadataObject, checked?: boolean, path?: string, childs?: { [key: string]: MetadataItem }) {
        if (nameOrMetadataObject instanceof MetadataObject) {
            this.name = nameOrMetadataObject.name;
            this.checked = nameOrMetadataObject.checked;
            this.path = nameOrMetadataObject.path;
            this.childs = (nameOrMetadataObject.childs !== undefined) ? nameOrMetadataObject.childs : {};
        } else {
            this.name = nameOrMetadataObject;
            this.checked = (checked !== undefined) ? checked : false;
            this.path = path;
            this.childs = (childs !== undefined) ? childs : {};
        }
    }

    /**
     * Method to add Metadata Item as child
     * @param {string | MetadataItem} childOrName Metadata Item name or Metadata item instance
     * @param {MetadataItem} [child] Metadata Item intance
     */
    addChild(childOrName: string | MetadataItem, child?: MetadataItem): void {
        if (childOrName instanceof MetadataItem && !Utils.isNull(childOrName.name)) {
            if (!this.childs[childOrName.name]) {
                this.childs[childOrName.name] = childOrName;
            }
        } else if (typeof childOrName === 'string' && child) {
            childOrName = childOrName as string;
            if (!this.childs[childOrName]) {
                this.childs[childOrName] = child;
            }
        }
    }

    /**
     * Method to get a Metadata Item child
     * @param {string} name Metadata Item name to get it 
     * @returns {MetadataItem | undefined} Return the selected Metadata Item or undefined if not exists
     */
    getChild(name: string): MetadataItem | undefined {
        if (this.childs[name]) {
            return new MetadataItem(this.childs[name]);
        }
        return undefined;
    }

    /**
     * Method to get all metadata object childs
     * @returns {{ [key: string]: MetadataItem }} Return the metadata object childs
     */
    getChilds(): { [key: string]: MetadataItem } {
        return this.childs;
    }

    /**
     * Method to get all child keys
     * @returns {string[]}
     */
    getChildKeys(): string[] {
        return (this.hasChilds()) ? Object.keys(this.childs) : [];
    }

    /**
     * Method to count childs
     * @returns {number}
     */
    childsCount(): number {
        return Object.keys(this.childs).length;
    }

    /**
     * Method to check if the Metadata Object has childs
     * @returns {boolean}
     */
    hasChilds(): boolean {
        return Object.keys(this.childs).length > 0;
    }

    /**
     * Method to check if all childs are marked as checked
     * @returns {boolean} true if all childs are checked, false in otherwise
     */
    allChildsChecked(): boolean {
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