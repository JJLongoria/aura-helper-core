import { PositionData } from "../../types";

describe('Testing ./src/types/positionData.js', () => {
    test('Testing instance', () => {
        const positionData = new PositionData('startPart', 'endPart');
        expect(positionData.startPart).toEqual('startPart');
        expect(positionData.endPart).toEqual('endPart');
        const positionData2 = new PositionData(positionData);
        expect(positionData2.startPart).toEqual('startPart');
        expect(positionData2.endPart).toEqual('endPart');
    });
});