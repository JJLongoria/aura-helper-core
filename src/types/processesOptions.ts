export interface AuraHelperCLIIgnoreOptions {
    types?: string[];
    ignoreFile?: string;
    compress?: boolean;
    sortOrder?: string;
}

export interface AuraHelperSFDXIgnoreOptions {
    types?: string[];
    ignoreFile?: string;
    compress?: boolean;
    sortOrder?: string;
    logLevel?: string;
}

export interface AuraHelperCLIDependenciesOptions {
    types?: string[];
    onlyCheck?: boolean;
    useIgnore?: boolean;
    ignoreFile?: string;
    compress?: boolean;
    sortOrder?: string;
    outputFile?: string;
}

export interface AuraHelperSFDXDependenciesOptions {
    types?: string[];
    onlyCheck?: boolean;
    useIgnore?: boolean;
    ignoreFile?: string;
    compress?: boolean;
    sortOrder?: string;
    outputFile?: string;
    logLevel?: string;
    apiVersion?: string | number;
}

export interface AuraHelperCLIPackageGeneratorOptions {
    createFrom: string;
    source: string;
    outputPath?: string;
    createType?: string;
    deleteOrder?: string;
    useIgnore?: boolean;
    ignoreFile?: string;
    target?: string;
    apiVersion?: string | number;
    raw?: boolean;
    explicit?: boolean;
}

export interface AuraHelperSFDXGitPackageOptions {
    fileType?: string;
    source?: string;
    target?: string;
    deleteBefore?: boolean;
    useIgnore?: boolean;
    ignoreFile?: string;
    ignoreDestructive?: boolean;
    destructiveIgnoreFile?: string;
    raw?: boolean;
    logLevel?: string;
    apiVersion?: string | number;
    outputPath?: string;
}

export interface AuraHelperSFDXJSONPackageOptions {
    source?: string;
    toDelete?: boolean;
    deleteBefore?: boolean;
    useIgnore?: boolean;
    ignoreFile?: string;
    wilcards?: boolean;
    logLevel?: string;
    apiVersion?: string | number;
    outputPath?: string;
}

export interface AuraHelperSFDXMergePackageOptions {
    source?: string;
    bytype?: boolean;
    onlyPackage?: boolean;
    onlyDestructive?: boolean;
    fullPackage?: boolean;
    fullDestructive?: boolean;
    deleteBefore?: boolean;
    useIgnore?: boolean;
    ignoreFile?: string;
    ignoreDestructive?: boolean;
    destructiveIgnoreFile?: string;
    logLevel?: string;
    apiVersion?: string | number;
    outputPath?: string;
}

export interface AuraHelperCLIPermissionsOptions {
    apiVersion?: string | number;
}

export interface AuraHelperSFDXPermissionsOptions {
    outputFile?: string;
    csv?: boolean;
    apiVersion?: string | number;
    logLevel?: string;
}

export interface AuraHelperCLIRetrieveSpecialOptions {
    fromOrg?: boolean;
    types?: string[];
    includeOrg?: boolean;
    downloadAll?: boolean;
    compress?: boolean;
    sortOrder?: string;
    apiVersion?: string | number;
}

export interface AuraHelperSFDXRetrieveSpecialOptions {
    fromOrg?: boolean;
    types?: string[];
    includeOrg?: boolean;
    downloadAll?: boolean;
    compress?: boolean;
    sortOrder?: string;
    logLevel?: string;
    apiVersion?: string | number;
}

export interface AuraHelperCLIDescribeOptions {
    fromOrg?: boolean;
    types?: string[];
    downloadAll?: boolean;
    groupGlobalActions?: boolean;
    apiVersion?: string | number;
}

export interface AuraHelperSFDXDescribeOptions {
    fromOrg?: boolean;
    types?: string[];
    downloadAll?: boolean;
    groupGlobalActions?: boolean;
    outputFile?: string;
    csv?: boolean;
    apiVersion?: string | number;
    logLevel?: string;
}


export interface AuraHelperCLICompareBetweenOptions {
    source?: string;
    target: string;
    apiVersion?: string | number;
}

export interface AuraHelperSFDXCompareBetweenOptions {
    source?: string;
    target: string;
    outputFile?: string;
    csv?: boolean;
    apiVersion?: string | number;
    logLevel?: string;
}

export interface AuraHelperCLICompareOptions {
    apiVersion?: string | number;
}

export interface AuraHelperSFDXCompareOptions {
    outputFile?: string;
    csv?: boolean;
    apiVersion?: string | number;
    logLevel?: string;
}

export interface AuraHelperCLICompressFileOptions {
    file: string[];
    sortOrder?: string;
}

export interface AuraHelperSFDXCompressFileOptions {
    file: string[];
    sortOrder?: string;
    logLevel?: string;
}

export interface AuraHelperCLICompressFolderOptions {
    folder: string[];
    sortOrder?: string;
}

export interface AuraHelperSFDXCompressFolderOptions {
    folder: string[];
    sortOrder?: string;
    logLevel?: string;
}