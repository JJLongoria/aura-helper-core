const Utils = require('../utils/utils');

/**
 * Represent a Position into a file
 */
class Position {

    constructor(lineOrObject, character) {
        if (Utils.isObject(lineOrObject)) {
            this.line = lineOrObject.line;
            this.character = lineOrObject.character;
        } else {
            this.line = lineOrObject;
            this.character = character;
        }
    }

    /**
     * Compare this position with other position to check if are equals
     * @param {Position} position Position to compare
     * @returns Return true if this position is equal to the received position
     */
    isEqual(position){
        return hasPositionData(position) && hasPositionData(this) && this.line === position.line && this.character === position.character;
    }

    /**
     * Compare this position with other position to check if this position is before
     * @param {Position} position Position to compare
     * @returns Return true if this position is before to the received position
     */
    isBefore(position){
        return hasPositionData(position) && hasPositionData(this) && (this.line < position.line || (this.line === position.line && this.character < position.character));
    }

    /**
     * Compare this position with other position to check if this position is after
     * @param {Position} position Position to compare
     * @returns Return true if this position is after to the received position
     */
    isAfter(position){
        return hasPositionData(position) && hasPositionData(this) && (this.line > position.line || (this.line === position.line && this.character > position.character));
    }

    /**
     * Compare this position with other position to check if this position is before or equal
     * @param {Position} position Position to compare
     * @returns Return true if this position is before or equal to the received position
     */
    isBeforeOrEqual(position){
        return hasPositionData(position) && hasPositionData(this) && (this.line <= position.line || (this.line === position.line && this.character <= position.character));
    }

    /**
     * Compare this position with other position to check if this position is after or equal
     * @param {Position} position Position to compare
     * @returns Return true if this position is after or equal to the received position
     */
    isAfterOrEqual(position){
        return hasPositionData(position) && hasPositionData(this) && (this.line >= position.line || (this.line === position.line && this.character >= position.character));
    }
}
module.exports = Position;

/**
 * Check if the received position has data
 * @param {Position} position Position to compare
 * @returns Return true if the position has data, false in otherwise
 */
function hasPositionData(position){
    return position && position.line !== undefined && position.character !== undefined;
}