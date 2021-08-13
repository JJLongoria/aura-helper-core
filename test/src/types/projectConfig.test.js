const ProjectConfig = require('../../../src/types/projectConfig');

describe('Testing ./src/types/progressStatus.js', () => {
    test('Testing instance', () => {
        const projectConfig = new ProjectConfig('ns', 'test.salesforce.com');
        expect(projectConfig.namespace).toEqual('ns');
        expect(projectConfig.sfdcLoginUrl).toEqual('test.salesforce.com');
        const projectConfig2 = new ProjectConfig(projectConfig);
        expect(projectConfig2.namespace).toEqual('ns');
        expect(projectConfig2.sfdcLoginUrl).toEqual('test.salesforce.com');
    });
});