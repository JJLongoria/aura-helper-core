/**
 * Class to represent a GitDiff
 */
export class GitDiff {

    path: string;
    mode: string;
    removeChanges: string[];
    addChanges: string[];

    /**
     * Create new GitDiff instance
     * @param pathOrGitDiff File path or Git Diff instance
     * @param mode Diff mode
     * @param removeChanges Remove changes lines
     * @param addChanges Added changes lines
     */
    constructor(pathOrGitDiff: string | GitDiff, mode?: string, removeChanges?: string[], addChanges?: string[]) {
        if (pathOrGitDiff instanceof GitDiff) {
            this.path = pathOrGitDiff.path;
            this.mode = pathOrGitDiff.mode;
            this.removeChanges = (pathOrGitDiff.removeChanges !== undefined) ? pathOrGitDiff.removeChanges : [];
            this.addChanges = (pathOrGitDiff.addChanges !== undefined) ? pathOrGitDiff.addChanges : [];
        } else {
            this.path = pathOrGitDiff;
            this.mode = mode || 'edit file';
            this.removeChanges = (removeChanges !== undefined) ? removeChanges : [];
            this.addChanges = (addChanges !== undefined) ? addChanges : [];
        }
        if (!this.mode) {
            this.mode = 'edit file';
        }
    }
}