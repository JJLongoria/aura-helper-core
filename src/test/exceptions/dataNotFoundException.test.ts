import { DataNotFoundException } from '../../exceptions';

describe('Testing ./src/exceptions/dataNotFoundException.js', () => {
    test('Testing instance()', () => {
        const ex = new DataNotFoundException('message');
        expect(ex.name).toMatch('DataNotFoundException');
        expect(ex.message).toMatch('message');
    });
});