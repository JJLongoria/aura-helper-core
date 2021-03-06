const RetrieveResult = require('../../../src/types/retrieveResult');
const RetrieveInboundFile = require('../../../src/types/retrieveInboundFile');
const RetrievePackage = require('../../../src/types/retrievePackage');
const RetrieveWarning = require('../../../src/types/retrieveWarning');

describe('Testing ./src/types/retrieveResult.js', () => {
    test('Testing instance', () => {
        const retrieveResult = new RetrieveResult([
            new RetrieveInboundFile('name', 'type', 'state', 'filePath')
        ], [
            new RetrievePackage('name')
        ], [
            new RetrieveWarning('name', 'error')
        ]);
        expect(retrieveResult.getInboundFile(0).fullName).toEqual('name');
        expect(retrieveResult.getPackage(0).name).toEqual('name');
        expect(retrieveResult.getWarning(0).fileName).toEqual('name');
        const retrieveResult2 = new RetrieveResult(retrieveResult);
        expect(retrieveResult2.getInboundFile(0).fullName).toEqual('name');
        expect(retrieveResult2.getPackage(0).name).toEqual('name');
        expect(retrieveResult2.getWarning(0).fileName).toEqual('name');
    });
});