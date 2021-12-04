import { BulkStatus } from "../../types";

describe('Testing ./src/types/bulkStatus.js', () => {
    test('Testing instance', () => {
        const bulkStatus = new BulkStatus('id', 'jobId', 'state');
        expect(bulkStatus.id).toEqual('id');
        const bulkStatus2 = new BulkStatus(bulkStatus);
        expect(bulkStatus2.id).toEqual('id');
    });
});