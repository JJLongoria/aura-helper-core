/**
 * Class to represent an Aura Helper Package Generator Result
 */
export class PackageGeneratorResult {

    package?: string;
    destructiveChanges?: string;
    destructiveChangesPost?: string;

    /**
     * Create new Package Generator Result instance
     * @param {string | { [key: string]: any }} packageFileOrPackageResult Package generated file path or Package Generator Result instance
     * @param {string} [destructiveChanges] Destructive changes generated file path
     * @param {string} [destructiveChangesPost] Destructive changes post generated file path
     */
    constructor(packageFileOrPackageResult?: string | { [key: string]: any }, destructiveChanges?: string, destructiveChangesPost?: string) {
        if(packageFileOrPackageResult && typeof packageFileOrPackageResult !== 'string'){
            this.package = packageFileOrPackageResult.package;
            this.destructiveChanges = packageFileOrPackageResult.destructiveChanges;
            this.destructiveChangesPost = packageFileOrPackageResult.destructiveChangesPost;
        } else {
            this.package = packageFileOrPackageResult;
            this.destructiveChanges = destructiveChanges;
            this.destructiveChangesPost = destructiveChangesPost;
        }
    }
}