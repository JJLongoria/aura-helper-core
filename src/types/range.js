const Utils = require('../utils/utils');

class Range {

    constructor(startPosOrObject, endPosition) {
        if (Utils.isObject(startPosOrObject) && !Utils.isNull(startPosOrObject.start)) {
            this.start = startPosOrObject.start;
            this.end = startPosOrObject.end;
            this.isEmpty = startPosOrObject.isEmpty;
            this.isSingleLine = startPosOrObject.isSingleLine;
        } else {
            this.start = startPosOrObject;
            this.end = endPosition;
            this.isEmpty = !this.start || !this.end || this.start.isEqual(this.end);
            this.isSingleLine = !this.start || !this.end || this.start.line === this.end.line;
        }
    }
}
module.exports = Range;