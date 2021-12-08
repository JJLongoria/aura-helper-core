import { MetadataTypes } from "./metadataTypes";


export const SpecialMetadata: { [key: string]: string[] } = {
    Profile: [
        MetadataTypes.CUSTOM_APPLICATION,
        MetadataTypes.APEX_CLASS,
        MetadataTypes.APEX_PAGE,
        MetadataTypes.CUSTOM_METADATA,
        MetadataTypes.CUSTOM_OBJECT,
        MetadataTypes.CUSTOM_FIELD,
        MetadataTypes.CUSTOM_PERMISSION,
        MetadataTypes.CUSTOM_TAB,
        MetadataTypes.LAYOUT,
        MetadataTypes.FLOW,
        MetadataTypes.RECORD_TYPE,
        MetadataTypes.EXTERNAL_DATA_SOURCE,
        MetadataTypes.DATA_CATEGORY_GROUP,
    ],
    PermissionSet: [
        MetadataTypes.CUSTOM_APPLICATION,
        MetadataTypes.APEX_CLASS,
        MetadataTypes.APEX_PAGE,
        MetadataTypes.CUSTOM_METADATA,
        MetadataTypes.CUSTOM_OBJECT,
        MetadataTypes.CUSTOM_FIELD,
        MetadataTypes.CUSTOM_PERMISSION,
        MetadataTypes.CUSTOM_TAB,
        MetadataTypes.RECORD_TYPE
    ],
    Translations: [
        MetadataTypes.CUSTOM_APPLICATION,
        MetadataTypes.CUSTOM_LABEL,
        MetadataTypes.CUSTOM_TAB,
        MetadataTypes.FLOW,
        MetadataTypes.FLOW_DEFINITION,
        MetadataTypes.CUSTOM_OBJECT,
        MetadataTypes.CUSTOM_FIELD,
        MetadataTypes.QUICK_ACTION,
        MetadataTypes.REPORT_TYPE,
        MetadataTypes.CUSTOM_PAGE_WEB_LINK,
        MetadataTypes.S_CONTROL
    ],
    RecordType: [
        MetadataTypes.COMPACT_LAYOUT,
        MetadataTypes.CUSTOM_FIELD,
        MetadataTypes.BUSINESS_PROCESS
    ],
    CustomObject: []
};