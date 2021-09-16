const MathUtils = require('../../../src/utils/mathUtils');

describe('Testing ./src/utils/mathUtils.js', () => {
    test('Testing round()', async (done) => {
        MathUtils.round(2.25556);
        const result = MathUtils.round(2.25556, 2);
        expect(result).toEqual(2.26);
        done();
    });
});