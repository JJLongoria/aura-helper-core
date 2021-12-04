const SFDXProjectResult = require('../../../src/types/sfdxProjectResult');

describe('Testing ./src/types/sfdxProjectResult.js', () => {
    test('Testing instance', () => {
        const projectResult = new SFDXProjectResult('dir', [], 'rawOutput');
        expect(projectResult.outputDir).toEqual('dir');
        const projectResult2 = new SFDXProjectResult(projectResult);
        expect(projectResult2.outputDir).toEqual('dir');
    });
});