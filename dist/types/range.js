"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
const position_1 = require("./position");
/**
 * Represente a Range on text, that is, a Start Position and End Position
 */
class Range {
    /**
     * Constructor to create a Range using two position or other Range
     * @param {Position | Range} startPosOrRange Start Position or Range instance
     * @param {Position} [endPosition] End Position instance
     */
    constructor(startPosOrRange, endPosition) {
        if (startPosOrRange instanceof Range) {
            this.start = startPosOrRange.start;
            this.end = startPosOrRange.end;
            this.isEmpty = startPosOrRange.isEmpty;
            this.isSingleLine = startPosOrRange.isSingleLine;
        }
        else {
            this.start = startPosOrRange;
            this.end = endPosition || new position_1.Position(startPosOrRange);
            this.isEmpty = !this.start || !this.end || this.start.isEqual(this.end);
            this.isSingleLine = !this.start || !this.end || this.start.line === this.end.line;
        }
    }
}
exports.Range = Range;
//# sourceMappingURL=range.js.map