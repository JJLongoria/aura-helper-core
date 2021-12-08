export interface DependenciesRepairResponse {
    metadataType: string;
    errors: DependenciesXMLFileError[];
}

export interface DependenciesXMLFileError {
    file: string;
    errors: DependencyError[];
}

export interface DependencyError {
    elementPath: string;
    value: any;
    metadataType: string;
    metadataObject: string;
    metadataItem: string;
    xmlElement?: any;
}