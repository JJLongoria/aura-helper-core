import { RetrieveInboundFile, RetrievePackage, RetrieveResult, RetrieveWarning } from "../../types";

describe('Testing ./src/types/retrieveResult.js', () => {
    test('Testing instance', () => {
        const retrieveResult = new RetrieveResult('id', 'status', true, true);
        retrieveResult.inboundFiles = [new RetrieveInboundFile('name', 'type', 'state', 'filePath')];
        retrieveResult.packages = [new RetrievePackage('name')];
        retrieveResult.warnings = [new RetrieveWarning('name', 'error')];
        expect(retrieveResult.getInboundFile(0)!.fullName).toEqual('name');
        expect(retrieveResult.getPackage(0)!.name).toEqual('name');
        expect(retrieveResult.getWarning(0)!.fileName).toEqual('name');
        const retrieveResult2 = new RetrieveResult(retrieveResult);
        expect(retrieveResult2.getInboundFile(0)!.fullName).toEqual('name');
        expect(retrieveResult2.getPackage(0)!.name).toEqual('name');
        expect(retrieveResult2.getWarning(0)!.fileName).toEqual('name');
    });
});