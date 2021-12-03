"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commit = void 0;
/**
 * Class to represent a Git Commit info
 */
class Commit {
    /**
     * Create new Commit instance
     * @param {string | Commit} pointerOrObject Commit Pointer or Commit instance
     * @param {string} [author] Commit author name
     * @param {string} [authorEmail] Commit author email
     * @param {CommitDate} [date] Commit Date
     * @param {string} [title] Commit title
     * @param {string} [message] Commit message
     */
    constructor(pointerOrObject, author, authorEmail, date, title, message) {
        if (pointerOrObject instanceof Commit) {
            this.pointer = pointerOrObject.pointer;
            this.author = pointerOrObject.author;
            this.authorEmail = pointerOrObject.authorEmail;
            this.date = pointerOrObject.date;
            this.title = pointerOrObject.title;
            this.message = pointerOrObject.message;
        }
        else {
            this.pointer = pointerOrObject;
            this.author = author;
            this.authorEmail = authorEmail;
            this.date = date;
            this.title = title;
            this.message = message;
        }
    }
}
exports.Commit = Commit;
//# sourceMappingURL=commit.js.map