import { Position } from "./position";
/**
 * Represente a Range on text, that is, a Start Position and End Position
 */
export declare class Range {
    start: Position;
    end: Position;
    isEmpty: boolean;
    isSingleLine: boolean;
    /**
     * Constructor to create a Range using two position or other Range
     * @param {Position | Range} startPosOrRange Start Position or Range instance
     * @param {Position} [endPosition] End Position instance
     */
    constructor(startPosOrRange: Position | Range, endPosition?: Position);
}
