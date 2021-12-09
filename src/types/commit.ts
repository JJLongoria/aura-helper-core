import { CommitDate } from "./commitDate";

/**
 * Class to represent a Git Commit info
 */
export class Commit {

    pointer: string;
    author?: string;
    authorEmail?: string;
    date?: CommitDate;
    title?: string;
    message?: string;

    /**
     * Create new Commit instance
     * @param {string | { [key: string]: any }} pointerOrObject Commit Pointer or Commit instance
     * @param {string} [author] Commit author name
     * @param {string} [authorEmail] Commit author email
     * @param {CommitDate} [date] Commit Date
     * @param {string} [title] Commit title
     * @param {string} [message] Commit message
     */
    constructor(pointerOrObject: string | { [key: string]: any }, author?: string, authorEmail?: string, date?: CommitDate, title?: string, message?: string) {
        if (pointerOrObject && typeof pointerOrObject !== 'string') {
            this.pointer = pointerOrObject.pointer;
            this.author = pointerOrObject.author;
            this.authorEmail = pointerOrObject.authorEmail;
            this.date = new CommitDate(pointerOrObject.date);
            this.title = pointerOrObject.title;
            this.message = pointerOrObject.message;
        } else {
            this.pointer = pointerOrObject;
            this.author = author;
            this.authorEmail = authorEmail;
            this.date = date;
            this.title = title;
            this.message = message;
        }
    }
}