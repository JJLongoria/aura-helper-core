import { Position } from "../../types";

describe('Testing ./src/types/position.js', () => {
    test('Testing instance', () => {
        const position = new Position(0, 0);
        expect(position.line).toEqual(0);
        expect(position.character).toEqual(0);
        const position2 = new Position(position);
        expect(position2.line).toEqual(0);
        expect(position2.character).toEqual(0);
        expect(position.isEqual(position2)).toBeTruthy();
        expect(position.isBefore(position2)).toBeFalsy();
        expect(position.isBeforeOrEqual(position2)).toBeTruthy();
        expect(position.isAfterOrEqual(position2)).toBeTruthy();
        expect(position.isAfter(position2)).toBeFalsy();
    });
});