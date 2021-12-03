/**
 * Represent a Position into a file
 */
export declare class Position {
    line: number;
    character: number;
    constructor(lineOrPosition: number | Position, character?: number);
    /**
     * Compare this position with other position to check if are equals
     * @param {Position} position Position to compare
     * @returns {boolean} Return true if this position is equal to the received position
     */
    isEqual(position: Position): boolean;
    /**
     * Compare this position with other position to check if this position is before
     * @param {Position} position Position to compare
     * @returns {boolean} Return true if this position is before to the received position
     */
    isBefore(position: Position): boolean;
    /**
     * Compare this position with other position to check if this position is after
     * @param {Position} position Position to compare
     * @returns {boolean} Return true if this position is after to the received position
     */
    isAfter(position: Position): boolean;
    /**
     * Compare this position with other position to check if this position is before or equal
     * @param {Position} position Position to compare
     * @returns {boolean} Return true if this position is before or equal to the received position
     */
    isBeforeOrEqual(position: Position): boolean;
    /**
     * Compare this position with other position to check if this position is after or equal
     * @param {Position} position Position to compare
     * @returns {boolean} Return true if this position is after or equal to the received position
     */
    isAfterOrEqual(position: Position): boolean;
}
