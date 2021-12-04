import { Position } from "../../types";
import { Range } from "../../types";

describe('Testing ./src/types/range.js', () => {
    test('Testing instance', () => {
        const start = new Position(0, 1);
        const end = new Position(0, 4);
        const range = new Range(start, end);
        expect(range.start).toEqual(start);
        expect(range.end).toEqual(end);
        const range2 = new Range(range);
        expect(range2.start).toEqual(start);
        expect(range2.end).toEqual(end);
    });
});