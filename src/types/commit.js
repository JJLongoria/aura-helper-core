const CommitDate = require('./commitDate');
const Utils = require('../utils/utils');

class Commit {

    constructor(pointerOrObject, author, authorEmail, date, title, message){
        if(Utils.isObject(pointerOrObject)){
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
            this.date = new CommitDate(date);
            this.title = title;
            this.message = message;
        }
    }
}
module.exports = Commit;