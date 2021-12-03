import { CommitDate } from "./commitDate";
/**
 * Class to represent a Git Commit info
 */
export declare class Commit {
    pointer: string;
    author?: string;
    authorEmail?: string;
    date?: CommitDate;
    title?: string;
    message?: string;
    /**
     * Create new Commit instance
     * @param {string | Commit} pointerOrObject Commit Pointer or Commit instance
     * @param {string} [author] Commit author name
     * @param {string} [authorEmail] Commit author email
     * @param {CommitDate} [date] Commit Date
     * @param {string} [title] Commit title
     * @param {string} [message] Commit message
     */
    constructor(pointerOrObject: string | Commit, author?: string, authorEmail?: string, date?: CommitDate, title?: string, message?: string);
}
