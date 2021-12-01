import { Position } from "./position";

/**
 * Represente a Range on text, that is, a Start Position and End Position
 */
export class Range {

    start: Position;
    end: Position;
    isEmpty: boolean;
    isSingleLine: boolean;

    /**
     * Constructor to create a Range using two position or other Range
     * @param {Position | Range} startPosOrRange Start Position or Range instance
     * @param {Position} [endPosition] End Position instance
     */
    constructor(startPosOrRange: Position | Range, endPosition?: Position) {
        if (startPosOrRange instanceof Range) {
            this.start = startPosOrRange.start;
            this.end = startPosOrRange.end;
            this.isEmpty = startPosOrRange.isEmpty;
            this.isSingleLine = startPosOrRange.isSingleLine;
        } else {
            this.start = startPosOrRange;
            this.end = endPosition || new Position(startPosOrRange);
            this.isEmpty = !this.start || !this.end || this.start.isEqual(this.end);
            this.isSingleLine = !this.start || !this.end || this.start.line === this.end.line;
        }
    }
}