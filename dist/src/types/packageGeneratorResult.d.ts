/**
 * Class to represent an Aura Helper Package Generator Result
 */
export declare class PackageGeneratorResult {
    package?: string;
    destructiveChanges?: string;
    destructiveChangesPost?: string;
    /**
     * Create new Package Generator Result instance
     * @param packageFileOrPackageResult Package generated file path or Package Generator Result instance
     * @param destructiveChanges Destructive changes generated file path
     * @param destructiveChangesPost Destructive changes post generated file path
     */
    constructor(packageFileOrPackageResult: string | PackageGeneratorResult, destructiveChanges?: string, destructiveChangesPost?: string);
}
