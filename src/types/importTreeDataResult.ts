export interface ImportTreeDataResponse {
    results?: ImportTreeDataResult[];
    errors?: any[];
}

export interface ImportTreeDataResult {
    refId: string;
    id: string;
    sobject: string;
}