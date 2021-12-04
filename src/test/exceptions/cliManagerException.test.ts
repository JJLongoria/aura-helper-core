import { CLIManagerException } from '../../exceptions';

describe('Testing ./src/exceptions/cliManagerException.js', () => {
    test('Testing instance()', () => {
        const ex = new CLIManagerException('message');
        expect(ex.name).toMatch('CLIManagerException');
        expect(ex.message).toMatch('message');
    });
});