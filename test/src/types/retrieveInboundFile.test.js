const RetrieveInboundFile = require('../../../src/types/retrieveInboundFile');

describe('Testing ./src/types/retrieveInboundFile.js', () => {
    test('Testing instance', () => {
        const retrieveInboundFile = new RetrieveInboundFile('name', 'ApexClass', 'Changed', 'file/path');
        expect(retrieveInboundFile.fullName).toEqual('name');
        const retrieveInboundFile2 = new RetrieveInboundFile(retrieveInboundFile);
        expect(retrieveInboundFile2.fullName).toEqual('name');
    });
});