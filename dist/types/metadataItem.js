"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataItem = void 0;
/**
 * Class to handle MetadataTypes, this class represent a MetadataItem, that is, the thrid level on Metadata Types hierarchy like CustomFields or Validation Rules for example.
 */
class MetadataItem {
    /**
     * Create a Metadata item Instance
     * @param {string | MetadataItem} nameOrMetadataItem Metadata Item API Name or Metadata Item instance
     * @param {boolean} [checked] true to mark as checked, false in otherwise
     * @param {string} [path] Metadata item file path
     */
    constructor(nameOrMetadataItem, checked, path) {
        if (nameOrMetadataItem instanceof MetadataItem) {
            this.name = nameOrMetadataItem.name;
            this.checked = nameOrMetadataItem.checked;
            this.path = nameOrMetadataItem.path;
        }
        else {
            this.name = nameOrMetadataItem;
            this.checked = (checked !== undefined) ? checked : false;
            this.path = path;
        }
    }
}
exports.MetadataItem = MetadataItem;
//# sourceMappingURL=metadataItem.js.map