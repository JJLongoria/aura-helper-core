export interface DependenciesCheckResponse {
    object: string;
    item: string;
    line: number;
    startColumn: number;
    endColumn: number;
    message: string;
    severity: 'Warning';
    file: string;
}