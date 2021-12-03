/**
 * Class to represent a GitDiff
 */
export declare class GitDiff {
    path: string;
    mode: string;
    removeChanges: string[];
    addChanges: string[];
    /**
     * Create new GitDiff instance
     * @param {string | GitDiff} pathOrGitDiff File path or Git Diff instance
     * @param {string} [mode] Diff mode
     * @param {string[]} [removeChanges] Remove changes lines
     * @param {string[]} [addChanges] Added changes lines
     */
    constructor(pathOrGitDiff: string | GitDiff, mode?: string, removeChanges?: string[], addChanges?: string[]);
}
