import { RetrieveStatus } from "../../types";

describe('Testing ./src/types/retrieveStatus.js', () => {
    test('Testing instance', () => {
        const retrieveStatus = new RetrieveStatus('id', 'success', false, false, 'zipFile');
        expect(retrieveStatus.id).toEqual('id');
        const retrieveStatus2 = new RetrieveStatus(retrieveStatus);
        expect(retrieveStatus2.id).toEqual('id');
    });
});