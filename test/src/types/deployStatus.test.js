const DeployStatus = require('../../../src/types/deployStatus');

describe('Testing ./src/types/deployStatus.js', () => {
    test('Testing instance', () => {
        const deployStatus = new DeployStatus('objecrOrId', 'success', true, true, 'zipFile');
        expect(deployStatus.id).toMatch('objecrOrId');
        expect(deployStatus.status).toMatch('success');
        const deployStatus2 = new DeployStatus(deployStatus);
        expect(deployStatus2.id).toMatch('objecrOrId');
        expect(deployStatus2.status).toMatch('success');
    });
});