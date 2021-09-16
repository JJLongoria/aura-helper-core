const ProgressStatus = require('../../../src/types/progressStatus');

describe('Testing ./src/types/progressStatus.js', () => {
    test('Testing instance', () => {
        const progressStatus = new ProgressStatus(1, 100, 'CustomField', 'Account', 'Name', {});
        expect(progressStatus.entityType).toEqual('CustomField');
        expect(progressStatus.increment).toEqual(1);
        const progressStatus2 = new ProgressStatus(progressStatus);
        expect(progressStatus2.entityType).toEqual('CustomField');
        expect(progressStatus2.increment).toEqual(1);
    });
});