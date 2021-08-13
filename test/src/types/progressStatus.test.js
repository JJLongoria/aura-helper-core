const ProgressStatus = require('../../../src/types/progressStatus');

describe('Testing ./src/types/progressStatus.js', () => {
    test('Testing instance', () => {
        const progressStatus = new ProgressStatus('stage', 1);
        expect(progressStatus.stage).toEqual('stage');
        expect(progressStatus.increment).toEqual(1);
        const progressStatus2 = new ProgressStatus(progressStatus);
        expect(progressStatus2.stage).toEqual('stage');
        expect(progressStatus2.increment).toEqual(1);
    });
});