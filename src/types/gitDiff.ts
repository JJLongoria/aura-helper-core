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
     * @param {string | { [key: string]: any }} pathOrGitDiff File path or Git Diff instance
     * @param {string} [mode] Diff mode
     * @param {string[]} [removeChanges] Remove changes lines
     * @param {string[]} [addChanges] Added changes lines
     */
    constructor(pathOrGitDiff?: string | { [key: string]: any }, mode?: string, removeChanges?: string[], addChanges?: string[]) {
        if (pathOrGitDiff && typeof pathOrGitDiff !== 'string') {
            this.path = pathOrGitDiff.path;
            this.mode = pathOrGitDiff.mode;
            this.removeChanges = (pathOrGitDiff.removeChanges !== undefined) ? pathOrGitDiff.removeChanges : [];
            this.addChanges = (pathOrGitDiff.addChanges !== undefined) ? pathOrGitDiff.addChanges : [];
        } else {
            this.path = pathOrGitDiff || '';
            this.mode = mode || 'edit file';
            this.removeChanges = (removeChanges !== undefined) ? removeChanges : [];
            this.addChanges = (addChanges !== undefined) ? addChanges : [];
        }
        if (!this.mode) {
            this.mode = 'edit file';
        }
    }
}