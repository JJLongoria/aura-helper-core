import { MathUtils } from '../../utils';

describe('Testing ./src/utils/mathUtils.js', () => {
    test('Testing round()', () => {
        expect(MathUtils.round(2.25556)).toEqual(2.26);
        expect(MathUtils.round(2.25556, 2)).toEqual(2.26);
    });
});