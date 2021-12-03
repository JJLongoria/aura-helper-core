"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageGeneratorResult = void 0;
/**
 * Class to represent an Aura Helper Package Generator Result
 */
class PackageGeneratorResult {
    /**
     * Create new Package Generator Result instance
     * @param packageFileOrPackageResult Package generated file path or Package Generator Result instance
     * @param destructiveChanges Destructive changes generated file path
     * @param destructiveChangesPost Destructive changes post generated file path
     */
    constructor(packageFileOrPackageResult, destructiveChanges, destructiveChangesPost) {
        if (packageFileOrPackageResult instanceof PackageGeneratorResult) {
            this.package = packageFileOrPackageResult.package;
            this.destructiveChanges = packageFileOrPackageResult.destructiveChanges;
            this.destructiveChangesPost = packageFileOrPackageResult.destructiveChangesPost;
        }
        else {
            this.package = packageFileOrPackageResult;
            this.destructiveChanges = destructiveChanges;
            this.destructiveChangesPost = destructiveChangesPost;
        }
    }
}
exports.PackageGeneratorResult = PackageGeneratorResult;
//# sourceMappingURL=packageGeneratorResult.js.map