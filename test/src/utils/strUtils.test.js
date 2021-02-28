const StrUtils = require('../../../src/utils/strUtils');

describe('Testing ./src/utils/strUtils.js', () => {
    test('Testing round()', () => {
        const result = StrUtils.replace('Test replace string', 'string', 'str');
        expect(result).toEqual('Test replace str');
    });
});