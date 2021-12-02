/**
 * Class to represent a Metadata Detail when list available metadata types from org
 */
export class MetadataDetail {

    xmlName: string;
    directoryName?: string;
    inFolder: boolean;
    metaFile: boolean;
    suffix?: string;

    /**
     * Create new Metadata Detail instance
     * @param {string | MetadataDetail} xmlNameOrMetadataDetail Metadata Detail XML Name or Metadata Detail instance
     * @param {string} [directoryName] Metadata Type directory name
     * @param {string} [suffix] Metadata type file suffix
     * @param {boolean} [inFolder] True if is in folder
     * @param {boolean} [metaFile] True if has meta file
     */
    constructor(xmlNameOrMetadataDetail: string | MetadataDetail, directoryName?: string, suffix?: string, inFolder?: boolean, metaFile?: boolean) {
        if (xmlNameOrMetadataDetail instanceof MetadataDetail) {
            this.directoryName = xmlNameOrMetadataDetail.directoryName;
            this.inFolder = xmlNameOrMetadataDetail.inFolder;
            this.metaFile = xmlNameOrMetadataDetail.metaFile;
            this.suffix = xmlNameOrMetadataDetail.suffix;
            this.xmlName = xmlNameOrMetadataDetail.xmlName;
        } else {
            this.directoryName = directoryName;
            this.inFolder = inFolder === undefined ? true : inFolder;
            this.metaFile = metaFile === undefined ? true : metaFile;
            this.suffix = suffix;
            this.xmlName = xmlNameOrMetadataDetail;
        }
    }
}