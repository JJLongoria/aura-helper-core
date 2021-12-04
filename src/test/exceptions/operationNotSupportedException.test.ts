import { OperationNotSupportedException } from '../../exceptions';

describe('Testing ./src/exceptions/operationNotSupportedException.js', () => {
    test('Testing instance()', () => {
        const ex = new OperationNotSupportedException('message');
        expect(ex.name).toMatch('OperationNotSupportedException');
        expect(ex.message).toMatch('message');
    });
});