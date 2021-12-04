import { DataRequiredException } from '../../exceptions';

describe('Testing ./src/exceptions/dataRequiredException.js', () => {
    test('Testing instance()', () => {
        const ex = new DataRequiredException('fieldName');
        expect(ex.name).toMatch('DataRequiredException');
        expect(ex.message).toMatch('fieldName is Required');
    });
});