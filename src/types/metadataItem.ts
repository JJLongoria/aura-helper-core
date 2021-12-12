/**
 * Class to handle MetadataTypes, this class represent a MetadataItem, that is, the thrid level on Metadata Types hierarchy like CustomFields or Validation Rules for example.
 */
export class MetadataItem {

    name: string;
    checked: boolean;
    path?: string;
    id?: string;

    /**
     * Create a Metadata item Instance
     * @param {string | { [key: string]: any }} nameOrMetadataItem Metadata Item API Name or Metadata Item instance
     * @param {boolean} [checked] true to mark as checked, false in otherwise
     * @param {string} [path] Metadata item file path
     */
    constructor(nameOrMetadataItem: string | { [key: string]: any }, checked?: boolean, path?: string) {
        if (nameOrMetadataItem && typeof nameOrMetadataItem !== 'string') {
            this.name = nameOrMetadataItem.name;
            this.checked = nameOrMetadataItem.checked;
            this.path = nameOrMetadataItem.path;
            this.id = nameOrMetadataItem.id;
        } else {
            this.name = nameOrMetadataItem;
            this.checked = (checked !== undefined) ? checked : false;
            this.path = path;
        }
    }
}