import { OperationNotAllowedException } from '../../exceptions';

describe('Testing ./src/exceptions/operationNotAllowedException.js', () => {
    test('Testing instance()', () => {
        const ex = new OperationNotAllowedException('message');
        expect(ex.name).toMatch('OperationNotAllowedException');
        expect(ex.message).toMatch('message');
    });
});