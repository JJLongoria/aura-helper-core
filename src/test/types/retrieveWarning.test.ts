import { RetrieveWarning } from "../../types";

describe('Testing ./src/types/retrieveWarning.js', () => {
    test('Testing instance', () => {
        const retrieveWarning = new RetrieveWarning('name', 'error');
        expect(retrieveWarning.fileName).toEqual('name');
        const retrieveWarning2 = new RetrieveWarning(retrieveWarning);
        expect(retrieveWarning2.fileName).toEqual('name');
    });
});