/**
 * Class to handle MetadataTypes, this class represent a MetadataItem, that is, the thrid level on Metadata Types hierarchy like CustomFields or Validation Rules for example.
 */
export declare class MetadataItem {
    name: string;
    checked: boolean;
    path?: string;
    /**
     * Create a Metadata item Instance
     * @param {string | MetadataItem} nameOrMetadataItem Metadata Item API Name or Metadata Item instance
     * @param {boolean} [checked] true to mark as checked, false in otherwise
     * @param {string} [path] Metadata item file path
     */
    constructor(nameOrMetadataItem: string | MetadataItem, checked?: boolean, path?: string);
}
