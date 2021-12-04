const RetrievePackage = require('../../../src/types/retrievePackage');

describe('Testing ./src/types/retrievePackage.js', () => {
    test('Testing instance', () => {
        const retrievePackage = new RetrievePackage('name');
        expect(retrievePackage.name).toEqual('name');
        const retrievePackage2 = new RetrievePackage(retrievePackage);
        expect(retrievePackage2.name).toEqual('name');
    });
});